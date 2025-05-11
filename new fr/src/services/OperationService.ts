import { APIClient } from "./Http";
export interface Operation {
  id?: any;
  date?: any;
  patient_id: number;
  tooth_id: number[];
  operation_type: Array<{
    operation_type: string;
    tooth_id: string;
    price: number;
  }>;
  note?: number;
  total_cost: number;
  amount_paid: number;
  is_paid: boolean;
}

export interface ReoccurringOperation {
  id: number;
  name: string;
  date: string;
  cost: string;
  treatment_nbr: number;
  operation_names: string; // Updated to a single string
  xray_types: string; // Updated to a single string
}

export interface IncompletedOperations {
  data: ReoccurringOperation[];
}

const operationApiClient = new APIClient<Operation>("/Operation");
export const operationNoteApiClient = new APIClient<Operation>(
  "/getOperationNote"
);
export const noteoperationApiClient = new APIClient<Operation>("/storeOpNote");
export const incompletedOperationsApiClient =
  new APIClient<IncompletedOperations>("/recurringOperation");
export const finishtreatmentApiClient = new APIClient<any>("/finishtreatment");
export const modifytreatmentApiClient = new APIClient<any>(
  "/modifyoperationtreatment"
);
export const PayementVerificationApiClient = new APIClient<any>(
  "PayementVerificationCheckout"
);
export const teethOperationApiClient = new APIClient<any>("getTeeths");
export const updateStoreTeethApiClient = new APIClient<any>("updateStore");
export default operationApiClient;
export const OperationSpecificDetails = new APIClient<any>("getOperationData");
