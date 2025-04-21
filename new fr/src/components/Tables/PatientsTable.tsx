//@ts-nocheck
import DataTable from "../DataTable";
import { useNavigate } from "react-router";
import { Box, IconButton, TextField, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CACHE_KEY_PATIENTS, CACHE_KEY_WAITINGLIST } from "../../constants";
import patientAPIClient from "../../services/PatientService";
import { useQueryClient } from "@tanstack/react-query";
import { confirmDialog } from "../ConfirmDialog";
import deleteItem from "../../hooks/deleteItem";
import { useSnackbarStore } from "../../zustand/useSnackbarStore";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import getGlobalv2 from "../../hooks/getGlobalv2";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useUserRoles from "../../zustand/UseRoles";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import addGlobal from "../../hooks/addGlobal";
import {
  incrementbyone,
  incrementPatientApiClient,
} from "../../services/WaitingroomService";
import { AxiosError } from "axios";
const PatientsTable = ({ dates }) => {
  const { showSnackbar } = useSnackbarStore();
  const { can } = useUserRoles();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const AddPatient = addGlobal({} as incrementbyone, incrementPatientApiClient);

  const addWaitingRoom = async (id) => {
    await AddPatient.mutateAsync(
      { patient_id: id },
      {
        onSuccess(data: any) {
          showSnackbar(data?.message, "success");
          queryClient.invalidateQueries(CACHE_KEY_WAITINGLIST);
        },
        onError(error: any) {
          const message =
            error instanceof AxiosError
              ? error.response?.data?.message
              : error.message;
          showSnackbar(message, "error");
        },
      }
    );
  };
  const columns = [
    { name: "id", label: "Id", options: { display: false, filter: false } },
    { name: "nom", label: "Nom", options: { filter: false, sort: true } },
    { name: "prenom", label: "Prenom", options: { filter: false, sort: true } },
    { name: "date", label: "Date", options: { filter: false, sort: true } },
    {
      name: "address",
      label: "Address",
      options: { filter: false, sort: true },
    },
    { name: "cin", label: "Cin", options: { filter: false, sort: true } },
    { name: "sex", label: "Sex", options: { filter: false, sort: true } },
    {
      name: "mutuelle",
      label: "Mutuelle",
      options: { filter: false, sort: true },
    },
    {
      name: "phoneNumber",
      label: "Telephone",
      options: { filter: false, sort: false },
    },

    {
      name: "PatientDetails",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value: any, tableMeta: any) => {
          const patientId = tableMeta.rowData[0]; // Assuming the first column is the ID

          return (
            <Box className="w-max">
              <Tooltip title="Ajouter le patient à la salle d'attente">
                <IconButton className="btn-patient-waiting !text-gray-600 hover:!text-blue-700 cursor-pointer">
                  <AccessAlarmOutlinedIcon color="inherit" />
                </IconButton>
              </Tooltip>
              {can(["doctor"]) && (
                <Tooltip title="Nouveau operation">
                  <IconButton className="btn-patient-info !text-gray-600 hover:!text-blue-700 cursor-pointer">
                    <HealthAndSafetyOutlinedIcon />
                  </IconButton>
                </Tooltip>
              )}
              {can(["update_patient", "doctor"]) && (
                <Tooltip title="Modifier le patient">
                  <IconButton className="btn-patient-edit !text-gray-600 hover:!text-blue-700 cursor-pointer">
                    <EditOutlinedIcon />
                  </IconButton>
                </Tooltip>
              )}
              {can(["delete_patient", "doctor"]) && (
                <Tooltip title="Supprimer le patient">
                  <IconButton className="btn-patient-delete  !text-gray-600 hover:!text-red-700 cursor-pointer">
                    <DeleteOutlineIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          );
        },
      },
    },
  ];

  const handleDeletePatient = async (id: any) => {
    confirmDialog("Voulez-vous vraiment supprimer le patient ?", async () => {
      try {
        const deletionSuccessful = await deleteItem(id, patientAPIClient);
        if (deletionSuccessful) {
          queryClient.invalidateQueries(CACHE_KEY_PATIENTS);
          showSnackbar("La suppression du patient a réussi", "success");
        } else {
          showSnackbar("La suppression du patient a échoué", "error");
        }
      } catch (error) {
        showSnackbar(
          `Erreur lors de la suppression du patient: ${error}`,
          "error"
        );
      }
    });
  };

  // Hook to fetch patients data
  const dataHook = (page: number, searchQuery: string, rowsPerPage: number) =>
    getGlobalv2(
      {}, // _Tname (Type placeholder)
      CACHE_KEY_PATIENTS, // Query key
      patientAPIClient, // Service function
      page, // Current page
      rowsPerPage, // Number of rows per page
      searchQuery,
      undefined,
      dates
    );

  return (
    <>
      {can([
        "access_patient",
        "doctor",
        "insert_patient",
        "update_patient",
        "delete_patient",
        "detail_patient",
      ]) ? (
        <DataTable
          title="Liste des patients"
          noMatchMessage="Désolé, aucun patient n'est dans nos données."
          columns={columns}
          dataHook={dataHook}
          options={{
            searchPlaceholder: "Rechercher un patient",
            customToolbar: () => {
              return can(["insert_patient", "doctor"]) ? (
                <Tooltip title="Nouveau patient">
                  <IconButton onClick={() => navigate("/AddPatient")}>
                    <AddIcon />
                  </IconButton>
                </Tooltip>
              ) : null;
            },
            selectableRowsHideCheckboxes: true,
            onRowClick: (s: any, _m: any, e: any) => {
              const patientId = s[0];
              // Check if the click was on the "Patient Info" button
              if (e.target.closest(".btn-patient-info")) {
                navigate(`/Patients/operations/?id=${s[0]}`);
                return;
              }

              // Check if the click was on the "Edit" button
              if (e.target.closest(".btn-patient-edit")) {
                navigate(`/AddPatient/${patientId}`);
                return;
              }

              // Check if the click was on the "Delete" button
              if (e.target.closest(".btn-patient-delete")) {
                handleDeletePatient(patientId);
                return;
              }
              if (e.target.closest(".btn-patient-waiting")) {
                addWaitingRoom(patientId);
                return;
              }
              const formatedDate = s[3].split("-");
              /* navigate(`Xray?id=${s[0]}`); */
              navigate(`/Patients/Details/${s[0]}`);
            },
          }}
        />
      ) : (
        <div style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
          Vous n'avez pas la permission de consulter cette page.
        </div>
      )}
    </>
  );
};

export default PatientsTable;
