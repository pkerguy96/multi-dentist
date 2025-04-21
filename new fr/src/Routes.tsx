import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import App from "./pages/LoginPage";
import PrivateRoute from "./pages/PrivateRoute";

import AddPatient from "./pages/AddPatientForm";

import AdminProfile from "./components/AdminProfile";
import Errorpage from "./pages/Errorpage";
import DashboardKpiPage from "./pages/DashboardKpiPage";

import PatientsPage from "./pages/PatientsPage";
import AddNurseForm from "./pages/AddNurseForm";
import NursePage from "./pages/NursePage";
import PatientDetails from "./pages/PatientDetails";
import AppointmentPage from "./pages/AppointmentPage";
import StockPage from "./pages/StockPage";
import OrdonnancePage from "./pages/OrdonnancePage";
import PrintableComponant from "./components/PrintableComponant";
import AddOrdonance from "./pages/AddOrdonance";
import DicomPageViewer from "./pages/DicomPageViewer";
import ReglementPage from "./pages/ReglementPage";

import DicomPage from "./pages/DicomPage";
import AddFile from "./pages/AddFile";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import SettingsPage from "./pages/SettingsPage";
import KpiSettings from "./components/Settings/KpiSettings";
import OperationPayementStatus from "./components/OperationPayementStatus";

import DebtPage from "./pages/DebtPage";
import OperationsListSettings from "./components/Settings/OperationsListSettings";
import PermissionsSettings from "./components/Settings/PermissionsSettings";
import RolesSettings from "./components/Settings/RolesSettings";

import AddStockForm from "./pages/AddForms/AddStockForm";
import SupplierPage from "./pages/SupplierPage";
import AddSupplier from "./pages/AddForms/AddSupplier";
import IncompletedOperations from "./components/Tables/IncompletedOperations";
import NursePaymentpage from "./pages/NursePaymentpage";
import CalenderTable from "./components/Tables/CalenderTable";
import AppointmentsTableKpi from "./components/Kpis/AppointmentsTableKpi";
import XraySettings from "./components/Settings/XraySettings";
import NursePatientXrays from "./pages/NursePatientXrays";
import AddStockToProduct from "./pages/AddForms/AddStockToProduct";
import StockEntryTable from "./components/Tables/StockEntryTable";
import StockExitTable from "./components/Tables/StockExitTable";
import HospitalsSettings from "./components/Settings/HospitalsSettings";
import ClinicOperationsTable from "./components/Tables/ClinicOperationsTable";
import AddOutsourceOperation from "./pages/AddForms/AddOutsourceOperation";
import OutsourceOperation from "./pages/OutsourceOperation";
import BloodtestTable from "./components/Tables/BloodtestTable";
import BloodTestAdd from "./pages/AddForms/BloodTestAdd";
import BloodTestPage from "./pages/BloodTestPage";
import BloodTestPrintableComponent from "./components/BloodTestPrintableComponent";
import Lobby from "./components/Lobby";
import Lobby2new from "./components/Lobby2new";
import ParentOperationPage from "./pages/OperationPagesUpdated/ParentOperationPage";
import ExamenDemanderSettings from "./components/Settings/ExamenDemanderSettings";
import ChangeUserPassword from "./components/ChangeUserPassword";
import BloodTestSettings from "./components/Settings/BloodTestSettings";
import CompteRendu from "./pages/CompteRendu";
import AddCompteRendu from "./pages/AddForms/AddCompteRendu";

import ObservationTable from "./components/Tables/ObservationTable";
import AddObservationClinique from "./pages/AddForms/addObservationClinique";
import ObservationPageView from "./pages/PrintablesPageView/ObservationPageView";
import CompteRenduPageView from "./pages/PrintablesPageView/CompteRenduPageView";
import Printsettings from "./components/Settings/Printsettings";
import FileUploadSettings from "./components/Settings/FileUploadSettings";
import DoctorFiles from "./pages/DoctorFiles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "réinitialisation-mot-de-passe",
        element: <ForgotPassword />,
      },
      {
        path: "reset/:token?/:email?",
        element: <ChangePassword />,
      },
      {
        path: "lobby",
        element: <Lobby />,
      },
      {
        path: "newlobby",
        element: <Lobby2new />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "dashboard",
        element: <DashboardKpiPage />,
      },
      {
        path: "Appointments",
        element: <AppointmentPage />,
      },
      {
        path: "Patients",
        element: <PatientsPage />,
        children: [
          {
            path: "operations",
            element: <ParentOperationPage />,
          },
          {
            path: "Details/:id",
            element: <PatientDetails />,
          },
        ],
      },

      {
        path: "Ordonnance",
        element: <OrdonnancePage />,
      },
      {
        path: "bloodtest",
        element: <BloodTestPage />,
        children: [
          {
            path: "add",
            element: <BloodTestAdd />,
          },
        ],
      },
      {
        path: "Opérations-inachevées",
        element: <IncompletedOperations />,
      },
      {
        path: "AddOrdonance/:id?/:ordonanceID?/:operation_id?",
        element: <AddOrdonance />,
      },
      /*   {
        path: "AddOrdonance/:id?/:operation_id?",
        element: <AddOrdonance />,
      }, */
      {
        path: "PatientCheckout/:operationid?",
        element: <OperationPayementStatus />,
      },
      {
        path: "OrdonanceDetails/:id",
        element: <PrintableComponant />,
      },
      {
        path: "bloodtestdetails/:id",
        element: <BloodTestPrintableComponent />,
      },
      {
        path: "AddPatient/:id?",
        element: <AddPatient />,
      },
      {
        path: "profile",
        element: <AdminProfile />,
      },
      {
        path: "profile/password",
        element: <ChangeUserPassword />,
      },
      {
        path: "Nurses",
        element: <NursePage />,
      },
      {
        path: "AddNurse",
        element: <AddNurseForm />,
      },
      {
        path: "Files",
        element: <DicomPage />,
      },
      {
        path: "Dicom/:id?",
        element: <DicomPageViewer />,
      },
      {
        path: "Stock",
        element: <StockPage />,
        children: [
          {
            path: "ajouter",
            element: <AddStockForm />,
          },
          {
            path: "product",
            element: <AddStockToProduct />,
          },
          {
            path: "entry",
            element: <StockEntryTable />,
          },
          {
            path: "exit",
            element: <StockExitTable />,
          },
        ],
      },
      {
        path: "Supplier",
        element: <SupplierPage />,
        children: [
          {
            path: "ajouter",
            element: <AddSupplier />,
          },
        ],
      },
      {
        path: "Reglement",
        element: <ReglementPage />,
      },
      {
        path: "Addfile",
        element: <AddFile />,
      },
      {
        path: "Compte-rendu",
        element: <CompteRendu />,
      },
      {
        path: "Ajouter-rendu",
        element: <AddCompteRendu />,
      },
      {
        path: "Compte-rendu-details",
        element: <CompteRenduPageView />,
      },
      {
        path: "observation",
        element: <ObservationTable />,
      },
      {
        path: "Ajouter-observation",
        element: <AddObservationClinique />,
      },
      {
        path: "observation-details",
        element: <ObservationPageView />,
      },
      {
        path: "Creance",
        element: <DebtPage />,
      },
      //TODO: translate this to french
      {
        path: "/InvoicePage",
        element: <NursePaymentpage />,
      },
      {
        path: "/Xraydemand",
        element: <NursePatientXrays />,
      },
      {
        path: "/Appointmens/table",
        element: <CalenderTable />,
      },
      {
        path: "Fichiers",
        element: <DoctorFiles />,
      },
      {
        path: "/External",
        element: <OutsourceOperation />,
        children: [
          {
            path: "ajouter",
            element: <AddOutsourceOperation />,
          },
        ],
      },
      {
        path: "Settings",
        element: <SettingsPage />,
        children: [
          {
            path: "Kpis",
            element: <KpiSettings />,
          },
          {
            path: "Operations",
            element: <OperationsListSettings />,
          },
          {
            path: "Roles",
            element: <RolesSettings />,
          },
          {
            path: "Autorisations",
            element: <PermissionsSettings />,
          },
          {
            path: "Xrays",
            element: <XraySettings />,
          },
          {
            path: "Examen",
            element: <ExamenDemanderSettings />,
          },
          {
            path: "Clinic",
            element: <HospitalsSettings />,
          },
          {
            path: "Blood",
            element: <BloodTestSettings />,
          },
          {
            path: "impression",
            element: <Printsettings />,
          },
          {
            path: "fichiers",
            element: <FileUploadSettings />,
          },
        ],
      },
    ],
  },
]);
export default router;
