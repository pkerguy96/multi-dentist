import {
  Modal,
  Box,
  Typography,
  Button,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useNavigate } from "react-router-dom";
const OperationSessions = ({ onClose, open, operation }) => {
  console.log(operation);
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
              <div className="font-medium">Sophie Martin</div>
            </Box>
            <Box>
              <span className="text-gray-500">Âge</span>
              <div className="font-medium">34 ans</div>
            </Box>
            <Box>
              <span className="text-gray-500">Numéro de dossier</span>
              <div className="font-medium">DT-2023-0458</div>
            </Box>
          </Box>
        </Box>
        <Box className=" border flex flex-col p-3 gap-2">
          <Box className="flex gap-2  justify-center sm:justify-start">
            <ArticleOutlinedIcon className="text-gray-500" />
            <h2 className="font-bold">Detaill de operation</h2>
          </Box>
          <Box className="grid grid-cols-1 text-center sm:text-start sm:grid-cols-2 gap-4 text-sm">
            <Box>
              <span className="text-gray-500">Traitement</span>
              <div className="font-medium">Sophie Martin</div>
            </Box>
            <Box>
              <span className="text-gray-500">Dents Concernee</span>
              <div className="font-medium">34 ans</div>
            </Box>
          </Box>
        </Box>
        <Box className=" border flex flex-col p-3 gap-2">
          <Box className="flex gap-2  justify-center sm:justify-start">
            <CalendarMonthOutlinedIcon className="text-gray-500" />
            <h2 className="font-bold">Historique des seances</h2>
          </Box>
          <Stack spacing={2}>
            {sessionData.map((session, index) => (
              <Box key={index}>
                <Box
                  className="flex justify-center sm:justify-start"
                  gap={1}
                  mb={0.5}
                >
                  <Chip
                    label={session.status}
                    size="small"
                    color={
                      session.statusColor === "success" ? "success" : "default"
                    }
                    variant={
                      session.statusColor === "default" ? "outlined" : "filled"
                    }
                  />
                  <Typography variant="subtitle2" fontWeight="bold">
                    {session.date}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {session.description}
                </Typography>
                {index < sessionData.length - 1 && <Divider sx={{ mt: 2 }} />}
              </Box>
            ))}
          </Stack>
        </Box>
        <Box className=" border flex flex-col p-3 gap-2">
          <Box className="flex gap-2  justify-center sm:justify-start">
            <ArticleOutlinedIcon className="text-gray-500" />
            <h2 className="font-bold">Informations De paiement</h2>
          </Box>
          <Box className="grid grid-cols-1 text-center sm:text-start sm:grid-cols-3 gap-4 text-sm">
            <Box>
              <span className="text-gray-500">Prix total</span>
              <div className="font-bold tracking-wider">850 MAD</div>
            </Box>
            <Box>
              <span className="text-gray-500">Montant Paye</span>
              <div className="font-bold tracking-wider text-green-500">
                400 Mad
              </div>
            </Box>
            <Box>
              <span className="text-gray-500">Reste a Paye</span>
              <div className="font-bold tracking-wider text-orange-500">
                400 Mad
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default OperationSessions;
