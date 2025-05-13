import {
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  LocalizationProvider,
  DateTimePicker,
  DateTimeValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment, { Moment } from "moment";
import React, { useRef, useState } from "react";
import { CACHE_KEY_opappointment, CACHE_KEY_PATIENTS } from "../../constants";
import getGlobalById from "../../hooks/getGlobalById";
import patientAPIClient, {
  OnlyPatientData,
} from "../../services/PatientService";
import addGlobal from "../../hooks/addGlobal";
import appointmentAPIClient, {
  AppointmentPayload,
  operationAppointmentStep,
  StoreOpappointmentAPIClient,
} from "../../services/AppointmentService";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useSnackbarStore } from "../../zustand/useSnackbarStore";
import { AxiosError } from "axios";
import { useLocation, useNavigate } from "react-router";
import { CliniquerensignementProps } from "../OperationPagesUpdated/Cliniquerensignement";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckAction from "../../components/CheckAction";

interface DataSend {
  patient_id: number;
  title?: string;
  date: string;
  note?: string;
}
const AppointmentStepPage: React.FC<CliniquerensignementProps> = ({
  onNext,
  onBack,
}: any) => {
  const [appointments, setAppointments] = useState([
    { date: moment(), note: "" },
  ]);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const patient_id = queryParams.get("id");
  const operation_id = queryParams.get("operation_id");
  const { data: previousAppointments, isLoading: isLoading2 } = getGlobalById(
    {} as any,
    [CACHE_KEY_opappointment, operation_id],
    operationAppointmentStep,
    undefined,
    parseInt(operation_id)
  );
  console.log(previousAppointments);

  const { showSnackbar } = useSnackbarStore();
  const noteRef = useRef<HTMLInputElement>(null);
  const dateTimePickerRef = useRef(null);
  if (!patient_id) {
    throw new Error("Patient ID is required and must not be null");
  }
  const { data, isLoading } = getGlobalById(
    {} as OnlyPatientData,
    [CACHE_KEY_PATIENTS[0], patient_id],
    patientAPIClient,
    undefined,
    parseInt(patient_id)
  );
  console.log(data, 20000);

  const Addmutation = addGlobal(
    {} as AppointmentPayload,
    StoreOpappointmentAPIClient
  );

  const onsubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    for (const appt of appointments) {
      if (!appt.date) {
        showSnackbar("Veuillez remplir toutes les dates.", "error");
        return;
      }
    }

    const formData = {
      patient_id: parseInt(patient_id),
      operation_id: parseInt(operation_id),
      appointments: appointments.map((appointment) => ({
        date: appointment.date.format("YYYY-MM-DDTHH:mm:ss"),
        note: appointment.note,
      })),
    };

    await Addmutation.mutateAsync(formData, {
      onSuccess: () => {
        const currentParams = new URLSearchParams(location.search);
        currentParams.set("isdone", "0");
        navigate(`${location.pathname}?${currentParams.toString()}`, {
          replace: true,
        });

        onNext();
      },
      onError: (error: any) => {
        const message =
          error instanceof AxiosError
            ? error.response?.data?.message
            : error.message;
        showSnackbar(message, "error");
      },
    });
  };
  CheckAction(() => {
    setAppointments(
      previousAppointments.map((rendez) => ({
        date: moment(rendez.date),
        note: rendez.note ?? "",
      }))
    );
  }, previousAppointments);
  if (isLoading || isLoading2) return <LoadingSpinner />;
  return (
    <div>
      <Paper className="!p-6 w-full flex flex-col gap-6">
        <Box className="flex justify-center relative">
          <Tooltip title="Retour">
            <IconButton className="!absolute -top-1 left-0" onClick={onBack}>
              <KeyboardBackspaceOutlinedIcon
                color="primary"
                className="pointer-events-none"
                fill="currentColor"
              />
            </IconButton>
          </Tooltip>
          <Typography
            id="modal-modal-title"
            component="h2"
            className="text-center !text-2xl font-bold"
          >
            Ajouter un rendez-vous ?
          </Typography>
        </Box>
        <TextField
          fullWidth
          id="name"
          value={`${data.nom} ${data.prenom}`}
          disabled
        />
        <Box className="flex gap-5 flex-col">
          <Box className=" flex flex-col w-full gap-3">
            {appointments.map((appointment, index) => (
              <Box key={index} className="flex flex-col gap-2  border p-4">
                <Box className="flex justify-between">
                  <h2>Rendez-vous {index + 2}</h2>
                  <IconButton
                    onClick={() => {
                      const updated = [...appointments];
                      updated.splice(index, 1);
                      setAppointments(updated);
                    }}
                    size="small"
                    color="error"
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Box>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DateTimePicker
                    value={appointment.date}
                    ampm={false}
                    onChange={(value) => {
                      const updated = [...appointments];
                      updated[index].date = value!;
                      setAppointments(updated);
                    }}
                  />
                </LocalizationProvider>
                <TextField
                  label="Note"
                  multiline
                  rows={3}
                  fullWidth
                  value={appointment.note}
                  onChange={(e) => {
                    const updated = [...appointments];
                    updated[index].note = e.target.value;
                    setAppointments(updated);
                  }}
                />
              </Box>
            ))}
            <Box className="flex justify-end">
              <Button
                className="w-max "
                sx={{ borderRadius: 16 }}
                variant="outlined"
                endIcon={<AddIcon />}
                onClick={() =>
                  setAppointments([
                    ...appointments,
                    { date: moment(), note: "" },
                  ])
                }
              >
                Ajouter
              </Button>
            </Box>
          </Box>
        </Box>

        <Box className="flex justify-between flex-row content-center">
          <Button
            className="w-full md:w-max !px-10 !py-3 rounded-lg "
            variant="outlined"
            onClick={() => {
              onNext();
            }}
          >
            <p className="text-sm ">Passer</p>
          </Button>
          <Button
            onClick={onsubmit}
            variant="contained"
            className="w-full md:w-max !px-10 !py-3 rounded-lg !ms-auto"
          >
            Confirmer
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default AppointmentStepPage;
