import {
  Modal,
  Box,
  Typography,
  Button,
  Stack,
  Chip,
  Divider,
  LinearProgress,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useNavigate } from "react-router-dom";
import getGlobal from "../hooks/getGlobal";
import { CACHE_KEY_operationSessionDetails } from "../constants";
import { operationSessionDetails } from "../services/OperationDetailsService";
import LoadingSpinner from "./LoadingSpinner";
import getGlobalById from "../hooks/getGlobalById";
import React, { useMemo } from "react";
const OperationSessions = ({ onClose, open, operation }) => {
  const { operation_id, patient_id } = operation;

  const { data, isLoading } = getGlobalById(
    {} as any,
    [CACHE_KEY_operationSessionDetails, patient_id],
    operationSessionDetails,
    undefined,
    operation_id
  );
  const navigate = useNavigate();
  const sessionData = [
    {
      date: "12 Mars 2025",
      status: "Complété",
      statusColor: "success",
      description:
        "Préparation de la dent et prise d'empreinte. Patient légèrement anxieux mais la séance s'est bien déroulée.",
    },
    {
      date: "26 Mars 2025",
      status: "Complété",
      statusColor: "success",
      description:
        "Essayage de la couronne provisoire. Ajustements mineurs effectués pour l'occlusion.",
    },
    {
      date: "9 Avril 2025",
      status: "À venir",
      statusColor: "default",
      description: "Pose de la couronne définitive prévue.",
    },
    {
      date: "23 Avril 2025",
      status: "À venir",
      statusColor: "default",
      description: "Contrôle final et ajustements si nécessaire.",
    },
  ];
  const completedAppointments = useMemo(() => {
    return (
      data?.appointments?.filter((a) => new Date(a.date) < new Date()).length ??
      0
    );
  }, [data?.appointments]);

  const totalAppointments = useMemo(
    () => data?.appointments?.length ?? 0,
    [data?.appointments]
  );

  const progress = useMemo(() => {
    return totalAppointments > 0
      ? (completedAppointments / totalAppointments) * 100
      : 0;
  }, [totalAppointments, completedAppointments]);

  const progressRounded = useMemo(() => Math.round(progress), [progress]);
  const progressLabel = useMemo(
    () => `${completedAppointments}/${totalAppointments} séances`,
    [completedAppointments, totalAppointments]
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="flex justify-center items-center"
      disableAutoFocus
    >
      <Box className=" flex flex-col max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg max-h-[calc(100%-2rem)] min-w-[60%] overflow-auto gap-6">
        {isLoading ? (
          <Box className="flex justify-center items-center h-64">
            <LoadingSpinner />
          </Box>
        ) : (
          <>
            <Box className="flex justify-between w-full">
              <Box className="flex flex-col p-0 gap-0">
                <h1 className="text-xl sm:text-3xl font-bold ">
                  Résumé du traitement
                </h1>
                <p className="text-sm sm:text-sm font-light text-gray-500">
                  Suivi détaillé de traitement dentaire
                </p>
              </Box>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  className="!px-2 !py-1 sm:!px-6 sm:!py-2 rounded-lg "
                  onClick={() => {
                    if (operation?.operation_id && operation?.patient_id) {
                      navigate(
                        `/Patients/operations/?id=${operation.patient_id}&operation_id=${operation.operation_id}`
                      );
                    }
                  }}
                >
                  Continue le traitement
                </Button>
              </Box>
            </Box>
            <Box className=" border flex flex-col p-3 gap-2">
              <Box className="flex gap-2  justify-center sm:justify-start">
                <PersonOutlinedIcon className="text-gray-500" />
                <h2 className="font-bold">Information Patient</h2>
              </Box>
              <Box className="grid grid-cols-1 text-center sm:text-start sm:grid-cols-3 gap-4 text-sm">
                <Box>
                  <span className="text-gray-500">Nom</span>
                  <div className="font-medium">
                    {data?.patient
                      ? `${data.patient.nom ?? ""} ${
                          data.patient.prenom ?? ""
                        }`.trim()
                      : "N/A"}
                  </div>
                </Box>
                <Box>
                  <span className="text-gray-500">Âge</span>
                  <div className="font-medium">
                    {data?.patient?.age ?? "N/A"}
                  </div>
                </Box>
                <Box>
                  <span className="text-gray-500">Mutuelle</span>
                  <div className="font-medium">
                    {data?.patient?.mutuelle ?? "N/A"}
                  </div>
                </Box>
              </Box>
            </Box>

            <Box className=" border flex flex-col p-3 gap-2">
              <Box className="flex gap-2  justify-center sm:justify-start">
                <ArticleOutlinedIcon className="text-gray-500" />
                <h2 className="font-bold">Détails de l’Opération</h2>
              </Box>
              <Box className="grid grid-cols-1 text-center sm:text-start sm:grid-cols-2 gap-2 text-sm">
                {/* Flat map all teeths */}
                {Array.isArray(data?.session?.teeths) &&
                  data.session.teeths.map((session, sessionIndex) => (
                    <React.Fragment key={`session-${sessionIndex}`}>
                      <Box className="col-span-2 mt-0">
                        <h3 className="text-sm font-semibold text-blue-500">
                          Séance {sessionIndex + 1}
                        </h3>
                      </Box>

                      {session.map((item, itemIndex) => (
                        <React.Fragment
                          key={`teeth-${sessionIndex}-${itemIndex}`}
                        >
                          <Box>
                            <span className="text-gray-500">
                              Type de Traitement
                            </span>
                            <div className="font-medium">{item.type}</div>
                          </Box>
                          <Box>
                            <span className="text-gray-500">
                              Dents Concernées
                            </span>
                            <div className="font-medium">{item.tooth_id}</div>
                          </Box>
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
              </Box>
              <Divider className="my-4" />
              <Box className="grid grid-cols-1 text-center sm:text-start sm:grid-cols-2 gap-4 text-sm">
                {/* Bilan Grouped */}
                {data?.session?.bilans && (
                  <>
                    <Box>
                      <span className="text-gray-500">Bilans</span>
                      <div className="font-medium space-y-1">
                        {data.session.bilans.flat().map((item, i) => (
                          <div key={`bilan-title-${i}`}>- {item.title}</div>
                        ))}
                      </div>
                    </Box>
                    <Box>
                      <span className="text-gray-500">Codes</span>
                      <div className="font-medium space-y-1">
                        {data.session.bilans.flat().map((item, i) => (
                          <div key={`bilan-code-${i}`}>{item.code}</div>
                        ))}
                      </div>
                    </Box>
                  </>
                )}

                {/* Ordonnance Grouped */}
                {data?.session?.ordonnances && (
                  <>
                    <Box>
                      <span className="text-gray-500">Ordonnances</span>
                      <div className="font-medium space-y-1">
                        {data.session.ordonnances.flat().map((item, i) => (
                          <div key={`ordo-name-${i}`}>
                            - {item.medicine_name}
                          </div>
                        ))}
                      </div>
                    </Box>
                    <Box>
                      <span className="text-gray-500">Notes</span>
                      <div className="font-medium space-y-1">
                        {data.session.ordonnances.flat().map((item, i) => (
                          <div key={`ordo-note-${i}`}>{item.note ?? "N/A"}</div>
                        ))}
                      </div>
                    </Box>
                  </>
                )}
              </Box>
              <Divider className="my-4" />
              <Box className="flex flex-col gap-3">
                <Box className="flex w-full justify-between">
                  <Typography
                    variant="body2"
                    className="text-sm text-gray-600 mb-1"
                  >
                    Progression du traitement
                  </Typography>
                  <Typography variant="caption" className="text-sm mt-1">
                    {progressLabel}
                  </Typography>
                </Box>

                <Box className="flex items-center gap-2 w-full">
                  <LinearProgress
                    variant="determinate"
                    value={progressRounded}
                    sx={{ width: "100%", height: "0.5rem" }}
                    className="rounded-lg"
                  />
                </Box>
              </Box>
            </Box>
            <Box className=" border flex flex-col p-3 gap-2">
              <Box className="flex gap-2  justify-center sm:justify-start">
                <CalendarMonthOutlinedIcon className="text-gray-500" />
                <h2 className="font-bold">Historique des seances</h2>
              </Box>
              <Stack spacing={2}>
                {data?.appointments?.map((appointment, index) => {
                  const isPast = new Date(appointment.date) < new Date();

                  return (
                    <Box key={appointment.id} className="flex flex-col gap-2">
                      <Box
                        className="flex justify-center sm:justify-start"
                        gap={1}
                        mb={0.5}
                      >
                        <Chip
                          label={isPast ? "Complété" : "À venir"}
                          size="small"
                          color={isPast ? "success" : "default"}
                          variant={isPast ? "filled" : "outlined"}
                        />
                        <Typography variant="subtitle2" fontWeight="bold">
                          {appointment.date}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {appointment.note ?? "Aucune note"}
                      </Typography>
                      {index < data.appointments.length - 1 && (
                        <Divider sx={{ mt: 2 }} />
                      )}
                    </Box>
                  );
                })}
              </Stack>
            </Box>
            <Box className="border flex flex-col p-3 gap-2">
              <Box className="flex gap-2 justify-center sm:justify-start">
                <ArticleOutlinedIcon className="text-gray-500" />
                <h2 className="font-bold">Informations De paiement</h2>
              </Box>

              <Box className="grid grid-cols-1 text-center sm:text-start sm:grid-cols-3 gap-4 text-sm">
                <Box>
                  <span className="text-gray-500">Prix total</span>
                  <div className="font-bold tracking-wider">
                    {data?.payments?.total_cost ?? "N/A"} MAD
                  </div>
                </Box>
                <Box>
                  <span className="text-gray-500">Montant Payé</span>
                  <div className="font-bold tracking-wider text-green-500">
                    {data?.payments?.total_paid ?? "N/A"} MAD
                  </div>
                </Box>
                <Box>
                  <span className="text-gray-500">Reste à payer</span>
                  <div className="font-bold tracking-wider text-orange-500">
                    {data?.payments?.remaining ?? "N/A"} MAD
                  </div>
                </Box>
              </Box>

              <Divider className="my-4" />

              {/* Progress bar */}
              {typeof data?.payments?.total_cost === "number" &&
                typeof data?.payments?.total_paid === "number" &&
                data.payments.total_cost > 0 && (
                  <Box className="flex flex-col gap-1 w-full">
                    <Typography
                      variant="body2"
                      className="text-sm text-gray-600"
                    >
                      Progression du paiement
                    </Typography>
                    <Box className="flex items-center gap-2 w-full">
                      <LinearProgress
                        variant="determinate"
                        value={Math.round(
                          (data.payments.total_paid /
                            data.payments.total_cost) *
                            100
                        )}
                        sx={{ width: "100%", height: "0.5rem" }}
                        className="rounded-lg"
                      />
                      <Typography
                        variant="caption"
                        className="text-gray-700 text-sm"
                      >
                        {Math.round(
                          (data.payments.total_paid /
                            data.payments.total_cost) *
                            100
                        )}
                        %
                      </Typography>
                    </Box>
                  </Box>
                )}
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default OperationSessions;
