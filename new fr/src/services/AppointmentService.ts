import { APIClient } from "./Http";

export interface Appointments {
  id: number;
  patient_id?: number;
  title: string;
  note: string;
  date: Date;
  patient_name?: string;
  phone_number?: string;
}
export interface AppointmentPayload {
  patient_id: number;
  operation_id: number;
  appointments: {
    date: string;
    note?: string;
  }[];
}
const appointmentAPIClient = new APIClient<Appointments>("/Appointment");
export const StoreOpappointmentAPIClient = new APIClient<Appointments>(
  "/storeMultipleForOperation"
);
export const paginatedAppointmentApiClient = new APIClient<Appointments>(
  "/GetAppointmentPagated"
);
export const operationAppointmentStep = new APIClient<any>(
  "/getOpertionAppointment"
);
export default appointmentAPIClient;
