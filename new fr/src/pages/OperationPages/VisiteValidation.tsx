//@ts-nocheck
import {
  Paper,
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import getGlobalById from "../../hooks/getGlobalById";
import {
  insertOpwithoutxray,
  origonalxrayApiClient,
  PatientXrayApiClient,
  xrayApiClient,
  XrayData,
} from "../../services/XrayService";
import { useLocation, useNavigate } from "react-router";
import LoadingSpinner from "../../components/LoadingSpinner";
import {
  CACHE_KEY_OperationBloodTest,
  CACHE_KEY_operationNote,
  CACHE_KEY_OperationPref,
  CACHE_KEY_OrdonanceId,
  CACHE_KEY_ProductOperation,
  CACHE_KEY_XraysWithCategoryBACK,
} from "../../constants";
import updateItem from "../../hooks/updateItem";
import addGlobal from "../../hooks/addGlobal";
import { useSnackbarStore } from "../../zustand/useSnackbarStore";

import getGlobal from "../../hooks/getGlobal";
import { OperationPrefApiClient } from "../../services/SettingsService";
import { useQueryClient } from "@tanstack/react-query";

import { productOperationApiClient } from "../../services/StockService";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { CliniquerensignementProps } from "../OperationPagesUpdated/Cliniquerensignement";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { SupplierTinyData } from "../../services/SupplierService";

interface RowData {
  id?: string | number;
  xray_type: string;
  price: number;
}
interface Consomables {
  id?: string | number;
  consomable: string;
  qte: number;
}
const VisiteValidation: React.FC<CliniquerensignementProps> = ({
  onNext,
  onBack,
}) => {
  const [operations, setOperations] = useState([]);
  const [consomables, setConsomables] = useState([]);

  const navigate = useNavigate();
  const { showSnackbar } = useSnackbarStore();

  const queryClient = useQueryClient();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const operation_id = queryParams.get("operation_id");
  const patient_id = queryParams.get("id");
  const isdone = queryParams.get("isdone");
  const withxrays = queryParams.get("withxrays");

  const addmutation = addGlobal({} as RowData, insertOpwithoutxray);
  const updateMutation = updateItem({} as XrayData, origonalxrayApiClient);

  const { data: consomableArrayList, isLoading: isLoading1 } = getGlobal(
    {},
    CACHE_KEY_ProductOperation,
    productOperationApiClient,
    undefined
  );

  const {
    data: extraData,
    refetch,
    isLoading: isloading2,
  } = getGlobal({}, CACHE_KEY_OperationPref, OperationPrefApiClient, undefined);

  const { data: xrayData, isLoading: isLoading3 } = operation_id
    ? getGlobalById(
        {} as XrayData,
        ["CACHE_KEY_Xray", operation_id.toString()],
        PatientXrayApiClient,
        undefined,
        parseInt(operation_id)
      )
    : { data: [], isLoading: false };

  const addNewOperation = () => {
    setOperations((old) => [...old, { xray_type: "", price: 0 }]);
  };

  const addNewConomable = () => {
    setConsomables((old) => [...old, { consomable: "", qte: 0 }]);
  };

  const patchOperation = (index, value, type) => {
    setOperations((old) =>
      old.map((op, idx) => {
        if (idx === index && op[type] !== value) {
          return { ...op, [type]: value };
        }
        return op;
      })
    );
  };

  const patchConsomable = (index, value, type) => {
    setConsomables((old) =>
      old.map((op, idx) => {
        if (idx === index && op[type] !== value) {
          return { ...op, [type]: value };
        }
        return op;
      })
    );
  };

  const removeOperation = (index) => {
    setOperations((old) => old.filter((op, idx) => idx !== index));
  };

  const removeConsomable = (index) => {
    setConsomables((old) => old.filter((op, idx) => idx !== index));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (operations.length === 0) {
      showSnackbar(
        "Vous devez remplir au moins une opération avant de soumettre",
        "error"
      );
      return;
    }
    const validRows = operations.filter((row) => row.xray_type.trim() !== "");

    if (validRows.length === 0) {
      showSnackbar(
        "Veuillez remplir le nom de l'opération avant de soumettre",
        "error"
      );
      return;
    }

    try {
      // Check if operation_id exists
      if (withxrays !== null) {
        const formData = {
          operation_id: operation_id,
          patient_id: patient_id,
          treatment_isdone: isdone ?? 1,
          consomables: consomables,
          rows: operations.map((e) => {
            const { id, ...rest } = e;
            if (id)
              if (String(id).startsWith("data-")) {
                rest.id = String(id).replace(/^data-(\d+)$/, "$1"); // Keep only the number for "data-"
              }
            return rest;
          }),
        };

        // If operation_id exists, update the operation
        await updateMutation.mutateAsync(
          {
            data: formData,
            id: Number(operation_id),
          },
          {
            onSuccess: (data) => {
              queryClient.clear();
              showSnackbar(
                "L'opération a été enregistrée avec succès",
                "success"
              );

              navigate("/Patients");
            },
            onError: (error: any) => {
              const message = error.response?.data?.error;

              showSnackbar(message, "error");
            },
          }
        );
      } else {
        const formData = {
          patient_id: Number(patient_id),
          treatment_isdone: isdone ?? 1,
          consomables: consomables,
          rows: operations,
        };
        await addmutation.mutateAsync(formData, {
          onSuccess: (data) => {
            queryClient.invalidateQueries({
              queryKey: ["operation"],
              exact: false,
            });
            showSnackbar(
              "L'opération a été enregistrée avec succès",
              "success"
            );
            navigate("/Patients");
          },
          onError: (error) => {
            const message = error.response?.data?.error;
            showSnackbar(message, "error");
          },
        });
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  const xrayRows = useMemo(() => {
    return [...(xrayData || [])].map((item, index) => ({
      id: `data-${item.id || index}`,
      xray_type: item.xray_type || "",
      price: item.price || 0,
    }));
  }, [xrayData]);

  const extraRows = useMemo(() => {
    return [...(extraData || [])].map((pref, index) => ({
      id: `pref-${pref.id || index}`,
      xray_type: pref.operation_type || "",
      price: parseFloat(pref.price || "0"),
    }));
  }, [extraData]);

  const xrayString = JSON.stringify(xrayRows);
  const extraString = JSON.stringify(extraRows);

  useEffect(() => {
    setOperations([...xrayRows, ...extraRows]);
  }, [extraString, xrayString]);

  if (isLoading1 || isloading2 || isLoading3) return <LoadingSpinner />;
  return (
    <Paper className="!p-6 w-full flex flex-col gap-4">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className="flex gap-6 flex-col relative"
        onSubmit={onSubmit}
      >
        <Tooltip title="Retour">
          <IconButton className="!absolute -top-1 left-0" onClick={onBack}>
            <KeyboardBackspaceOutlinedIcon
              color="primary"
              className="pointer-events-none"
              fill="currentColor"
            />
          </IconButton>
        </Tooltip>
        <Box className="flex justify-center">
          <Typography
            id="modal-modal-title"
            component="h2"
            className="text-center !text-2xl font-bold"
          >
            Validation Globale
          </Typography>
        </Box>
        <Box className="flex gap-4 flex-col">
          <Box className="flex justify-between items-center">
            <Typography
              id="modal-modal-title"
              component="h2"
              className="text-center !text-xl font-bold"
            >
              Validation Operations
            </Typography>
            <Button
              className="!px-4 !py-2 !min-w-max !rounded-full"
              variant="outlined"
              onClick={addNewOperation}
            >
              <AddIcon />
            </Button>
          </Box>
          <Box className="w-full flex flex-col gap-2 md:flex-row md:flex-wrap items-center">
            <TableContainer
              component={Paper}
              elevation={0}
              className="border border-gray-300"
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className="bg-gray-200">
                  <TableRow>
                    <TableCell>Operation</TableCell>
                    <TableCell width={300}>Prix</TableCell>
                    <TableCell width={60} align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {operations.length ? (
                    operations.map((field, index) => (
                      <TableRow
                        key={field.id}
                        className="border-t border-gray-300"
                      >
                        <TableCell component="th" scope="row">
                          <FormControl className="w-full md:flex-1">
                            <TextField
                              {...field}
                              id={`xray_type_${field.id}`}
                              type="text"
                              value={field.xray_type}
                              onChange={(event) =>
                                patchOperation(
                                  index,
                                  event.target.value,
                                  "xray_type"
                                )
                              }
                            />
                          </FormControl>
                        </TableCell>
                        <TableCell>
                          <FormControl className="w-full md:flex-1">
                            <TextField
                              {...field}
                              id={`price_${field.id}`}
                              type="number"
                              value={field.price}
                              onChange={(event) =>
                                patchOperation(
                                  index,
                                  event.target.value,
                                  "price"
                                )
                              }
                            />
                          </FormControl>
                        </TableCell>

                        <TableCell>
                          <IconButton onClick={() => removeOperation(index)}>
                            <DeleteOutlineIcon
                              color="error"
                              className="pointer-events-none"
                              fill="currentColor"
                            />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow className="border-t border-gray-300">
                      <TableCell
                        colSpan={3}
                        align="center"
                        className="!text-gray-600 p-4"
                      >
                        <p className="text-lg">
                          Désolé, aucune operation pour le moment.
                        </p>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box className="flex justify-between items-center">
            <h2 className="font-semibold text-base text-start">
              Montant Total
            </h2>
            <span className="font-semibold text-sm text-end">
              {operations.reduce((carry, current) => carry + +current.price, 0)}{" "}
              MAD
            </span>
          </Box>
        </Box>
        <Box className="flex gap-4 flex-col">
          <Box className="flex justify-between items-center">
            <Typography
              id="modal-modal-title"
              component="h2"
              className="text-center !text-xl font-bold"
            >
              Validation Consomables
            </Typography>
            <Button
              className="!px-4 !py-2 !min-w-max !rounded-full"
              variant="outlined"
              onClick={addNewConomable}
            >
              <AddIcon />
            </Button>
          </Box>
          <Box className="w-full flex flex-col gap-2 md:flex-row md:flex-wrap items-center">
            <TableContainer
              component={Paper}
              elevation={0}
              className="border border-gray-300"
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className="bg-gray-200">
                  <TableRow>
                    <TableCell>Consommable</TableCell>
                    <TableCell width={300}>Quantité</TableCell>
                    <TableCell width={60} align="center">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {consomables.length ? (
                    consomables.map((field, index) => (
                      <TableRow
                        key={"consomable." + index}
                        className="border-t border-gray-300"
                      >
                        <TableCell component="th" scope="consomables">
                          <FormControl className="w-full md:flex-1">
                            <Select
                              labelId="demo-select-small-label"
                              id={`consomables.consomable_${index}`}
                              value={field.consomable}
                              onChange={(event) =>
                                patchConsomable(
                                  index,
                                  event.target.value,
                                  "consomable"
                                )
                              }
                            >
                              {consomableArrayList &&
                              consomableArrayList.length > 0 ? (
                                consomableArrayList.map(
                                  (consumable: SupplierTinyData) => (
                                    <MenuItem
                                      key={consumable.id}
                                      value={consumable.id}
                                    >
                                      {consumable.product_name}
                                    </MenuItem>
                                  )
                                )
                              ) : (
                                <MenuItem value="none" disabled>
                                  <em>Aucun consommable trouvé</em>
                                </MenuItem>
                              )}
                            </Select>
                          </FormControl>
                        </TableCell>

                        <TableCell>
                          <FormControl className="w-full md:flex-1">
                            <TextField
                              id={`consomables.qte_${index}`}
                              type="number"
                              value={field.qte}
                              onChange={(event) =>
                                patchConsomable(
                                  index,
                                  event.target.value,
                                  "qte"
                                )
                              }
                            />
                          </FormControl>
                        </TableCell>

                        <TableCell>
                          <IconButton onClick={() => removeConsomable(index)}>
                            <DeleteOutlineIcon
                              color="error"
                              className="pointer-events-none"
                              fill="currentColor"
                            />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow className="border-t border-gray-300">
                      <TableCell
                        colSpan={3}
                        align="center"
                        className="!text-gray-600 p-4"
                      >
                        <p className="text-lg">
                          Désolé, aucun consomable pour le moment.
                        </p>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box className="flex justify-between items-center">
            <h2 className="font-semibold text-base text-start">
              Quantité Total
            </h2>
            <span className="font-semibold text-sm text-end">
              {consomables.reduce((carry, current) => carry + +current.qte, 0)}{" "}
              Pièces
            </span>
          </Box>
        </Box>
        <Box className="flex">
          <Button
            type="submit"
            variant="contained"
            className="w-full md:w-max !px-10 !py-3 rounded-lg !ms-auto"
          >
            Enregistrer
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default VisiteValidation;
