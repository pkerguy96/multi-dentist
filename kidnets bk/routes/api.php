<?php

use App\Http\Controllers\API\V1\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\AuthController;
use App\Http\Controllers\API\V1\PatientController;
use App\Http\Controllers\API\V1\AppointmentController;
use App\Http\Controllers\API\V1\BloodTestController;
use App\Http\Controllers\API\V1\BloodTestPreference;
use App\Http\Controllers\API\V1\CompteRenduController;
use App\Http\Controllers\API\V1\DashboardKpisController;
use App\Http\Controllers\API\V1\ExamenController;
use App\Http\Controllers\API\V1\NurseController;
use App\Http\Controllers\API\V1\fileuploadController;
use App\Http\Controllers\API\V1\FinancialController;
use App\Http\Controllers\API\V1\HospitalController;
use App\Http\Controllers\API\V1\HospitalOperationsController;
use App\Http\Controllers\API\V1\OperationController;
use App\Http\Controllers\API\V1\OrdonanceController;
use App\Http\Controllers\API\V1\StockController;
use App\Http\Controllers\API\V1\WaitingRoomController;
use App\Http\Controllers\API\V1\XrayController;
use App\Http\Controllers\API\V1\NotificationAlertController;
use App\Http\Controllers\API\V1\ObservationController;
use App\Http\Controllers\API\V1\OperationPrefsController;
use App\Http\Controllers\API\V1\OperationStepsController;
use App\Http\Controllers\API\V1\PermissionController;
use App\Http\Controllers\API\V1\ProductConsumableController;
use App\Http\Controllers\API\V1\ProductSupplierController;
use App\Http\Controllers\API\V1\SupplierController;
use App\Http\Controllers\API\V1\TeethOperationPrefController;
use App\Http\Controllers\API\V1\UserPreferenceController;
use App\Http\Controllers\API\V1\Xraypreferences;
use App\Models\OperationPref;
use App\Models\Ordonance;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\API\V1'], function () {

    route::post('/login', [AuthController::class, 'login']);
    Route::post('testpatientstore', [PatientController::class, 'testpatientstore']);
    route::get('tvwaitinglist', [WaitingRoomController::class, 'tvwaitinglist']);
});


Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\API\V1', 'middleware' => ['auth:sanctum']], function () {
    Route::get('Admin/logout', [AuthController::class, 'Logout']);
    /*     Route::get('getpicture', [AdminController::class, 'getpicture']); */
    Route::post('Admin/update/profile', [AdminController::class, 'ModifyProfile']);
    Route::post('changePassword', [AuthController::class, 'changePassword']);

    Route::get('patientDetails/{id}', [PatientController::class, 'patientDetails']);
    Route::get('patientTinyData/{id}', [PatientController::class, 'patientTinyData']);


    route::apiResource('Patient', PatientController::class);
    Route::apiResource('Nurse', NurseController::class);
    Route::get('uploadsInfo', [fileuploadController::class, 'uploadsInfo']);
    Route::apiResource('Appointment', AppointmentController::class);
    Route::apiResource('Filesupload', fileuploadController::class);
    Route::get('downloadZip/{clusterId}', [fileuploadController::class, 'downloadZip']);



    route::post('DashboardKpiUserPref', [UserPreferenceController::class, 'DashboardKpiUserPref']);

    /* waiting room */
    route::apiResource('Waitingroom', WaitingRoomController::class);

    route::post('incrementPatient', [WaitingRoomController::class, 'addPatient']);
    route::post('PatientsWaitingRoom', [WaitingRoomController::class, 'PatientsWaitingRoom']);
    route::delete('decrementPatient/{id}', [WaitingRoomController::class, 'decrementPatient']);
    route::get('resetPatientCounter', [WaitingRoomController::class, 'resetPatientCounter']);
    route::get('GetWaitingList', [WaitingRoomController::class, 'GetWaitingList']);

    /* Supplier routes */
    route::apiResource('Supplier', SupplierController::class);

    Route::get('showAllSuppliers', [SupplierController::class, 'showAllSuppliers']);
    /* product consumables */
    route::apiResource('consumables', ProductConsumableController::class);
    /* stock */
    route::apiResource('Stock', StockController::class);
    Route::get('getProductsForOperation', [StockController::class, 'getProductsForOperation']);

    /* supplierproduct */
    route::apiResource('Supplierproduct', ProductSupplierController::class);

    /* xray */
    route::apiResource('xray', XrayController::class);
    Route::get('showpatientxrays/{id}', [XrayController::class, 'showpatientxrays']);
    Route::get('getxrayCategorys', [Xraypreferences::class, 'getxrayCategorys']);
    Route::delete('deleteCategory/{id}', [Xraypreferences::class, 'deleteCategory']);
    Route::get('getXrayPreferencesWithCategories', [Xraypreferences::class, 'getXrayPreferencesWithCategories']);
    /* examens */

    Route::get('getexamenCategorys', [ExamenController::class, 'getexamenCategorys']);
    Route::get('getExamenPreferencesWithCategories', [ExamenController::class, 'getExamenPreferencesWithCategories']);
    route::apiResource('examen', ExamenController::class);
    Route::delete('deleteExamenCategory/{id}', [ExamenController::class, 'deleteExamenCategory']);


    /* operation */
    route::apiResource('Operation', OperationController::class);
    Route::get('getByOperationId/{id}', [OperationController::class, 'getByOperationId']);
    Route::get('recurringOperation', [OperationController::class, 'recurringOperation']);
    Route::get('getXraysByOperation/{id}', [OperationController::class, 'getXraysByOperation']);
    Route::get('getOperationData/{id}', [OperationController::class, 'getOperationData']);
    Route::get('getTeeths/{id}', [OperationController::class, 'getTeeths']);
    Route::post('updateStore', [OperationController::class, 'updateStore']);
    Route::get('anchof', [OperationController::class, 'anchof']);
    /* ordonance */
    route::apiResource('Ordonance', OrdonanceController::class);
    /* bloodtest */
    route::apiResource('bloodtest', BloodTestController::class);
    Route::post('insertWihtoutxray', [XrayController::class, 'insertWihtoutxray']);
    Route::get('GetAppointmentPagated', [AppointmentController::class, 'GetAppointmentPagated']);
    Route::get('GetOpAppointments/{id}', [AppointmentController::class, 'GetOpAppointments']);
    Route::post('storeMultipleForOperation', [AppointmentController::class, 'storeMultipleForOperation']);


    /* Payment and related routes */
    Route::post('PatientsDebt', [FinancialController::class, 'PatientsDebt']);
    Route::post('fetchPayments', [FinancialController::class, 'fetchPayments']);

    Route::delete('deletePaymentDetail/{id}', [OperationController::class, 'deletePaymentDetail']);

    /* Notification */
    route::apiResource('notification', NotificationAlertController::class);
    Route::get('/notifications/{id}', [NotificationAlertController::class, 'markAsRead']);

    /* preferences */
    route::apiResource('XrayPreferences', Xraypreferences::class);
    route::apiResource('TeethPreferences', TeethOperationPrefController::class);
    route::apiResource('OperationPreferences', OperationPrefsController::class);
    /* hospital */
    route::apiResource('Hospital', HospitalController::class);
    /* hospital actions */
    route::apiResource('Hospitaloperations', HospitalOperationsController::class);
    /* outsource operation */


    Route::get('/searchPatients', [HospitalOperationsController::class, 'searchPatients']);
    Route::post('/searchHospitals', [HospitalOperationsController::class, 'searchHospitals']);

    /* roles */

    Route::post('/createRole', [PermissionController::class, 'createRole']);
    route::get('getUsersViaRoles', [PermissionController::class, 'getUsersViaRoles']);
    route::post('createRole', [PermissionController::class, 'createRole']);
    route::get('RolesNursesList', [PermissionController::class, 'RolesNursesList']);
    route::get('getRoles', [PermissionController::class, 'getRoles']);
    route::post('userPermissions', [PermissionController::class, 'userPermissions']);
    route::post('grantAccess', [PermissionController::class, 'grantAccess']);
    Route::delete('deleteRole/{id}', [PermissionController::class, 'deleteRole']);


    /* blood pref */
    route::apiResource('bloodprefs', BloodTestPreference::class);
    Route::post('getAllPreferences', [BloodTestPreference::class, 'getAllPreferences']);







    /* KPIS */
    //Kpis
    Route::get('getTotalRevenue', [DashboardKpisController::class, 'getTotalRevenue']);
    Route::get('getAppointments', [DashboardKpisController::class, 'getAppointments']);
    Route::get('getCanceledAppointments', [DashboardKpisController::class, 'getCanceledAppointments']);
    Route::get('getAppointmentCancellationRate', [DashboardKpisController::class, 'getAppointmentCancellationRate']);
    Route::get('getAverageTimeInCurrent', [DashboardKpisController::class, 'getAverageTimeInCurrent']);
    Route::get('calculateAgePercentage', [DashboardKpisController::class, 'calculateAgePercentage']);
    Route::get('TotalPatients', [DashboardKpisController::class, 'TotalPatients']);
    Route::get('appointmentKpipeak', [DashboardKpisController::class, 'appointmentKpipeak']);
    Route::get('getMonthlyAppointments', [DashboardKpisController::class, 'getMonthlyAppointments']);
    Route::get('getMonthlyCanceledAppointments', [DashboardKpisController::class, 'getMonthlyCanceledAppointments']);
    Route::get('retrieveFromCashier', [DashboardKpisController::class, 'retrieveFromCashier']);
    Route::get('OnlyCashierNumber', [DashboardKpisController::class, 'OnlyCashierNumber']);
    Route::post('PatientsDebt', [DashboardKpisController::class, 'PatientsDebt']);
    Route::get('countPatientsByReferral', [DashboardKpisController::class, 'countPatientsByReferral']);
    Route::get('getPaymentKpi', [DashboardKpisController::class, 'getPaymentKpi']);

    /* file upload  */
    Route::post('storeDoctorFile', [fileuploadController::class, 'storeDoctorFile']);
    Route::get('getDoctorFiles', [fileuploadController::class, 'getDoctorFiles']);
    Route::get('downloadFile/{id}', [fileuploadController::class, 'downloadFile']);
    Route::delete('deleteDoctorFile/{id}', [fileuploadController::class, 'deleteDoctorFile']);

    /*  route::post('DashboardKpiUserPref', [UserPreferenceController::class, 'DashboardKpiUserPref']);
    route::post('OperationUserPref', [UserPreferenceController::class, 'OperationUserPref']);

    route::delete('deleteOperationPrefs/{id}', [UserPreferenceController::class, 'deleteOperationPrefs']); */
    Route::delete('deletePaymentDetail/{id}', [OperationController::class, 'deletePaymentDetail']);
    Route::get('PayementVerificationCheckout/{id}', [OperationController::class, 'PayementVerificationCheckout']);
    route::get('getOperationPrefs', [UserPreferenceController::class, 'getOperationPrefs']);
    route::get('getUserLocation', [UserPreferenceController::class, 'getUserLocation']);
    route::post('LocationPref', [UserPreferenceController::class, 'LocationPref']);

    /* Compte rendu */
    route::apiResource('compterendu', CompteRenduController::class);



    /* Observation */


    Route::get('GetObservationNote/{id}', [ObservationController::class, 'GetObservationNote']);

    Route::get('allobservation', [ObservationController::class, 'index']);
    Route::post('storeobservation', [ObservationController::class, 'store']);
    Route::patch('updateObservation/{id}', [ObservationController::class, 'updateObservation']);
    Route::get('showbservation/{id}', [ObservationController::class, 'show']);
    Route::delete('deleteObservation/{id}', [ObservationController::class, 'destroy']);
    /* Observation */

    /* Operation Steps Routes */
    Route::patch('storeOpNote/{id}', [OperationStepsController::class, 'storeOpNote']);
    Route::patch('EditOpNote/{id}', [OperationStepsController::class, 'EditOpNote']);
    Route::post('StoreParaclinique', [OperationStepsController::class, 'StoreParaclinique']);
    Route::post('updateParaclinique', [OperationStepsController::class, 'updateParaclinique']);
    Route::post('ValidationofSteps', [OperationStepsController::class, 'ValidationofSteps']);
    Route::get('fetchNote/{id}', [OperationStepsController::class, 'fetchNote']);
    Route::get('fetchXrays/{id}', [OperationStepsController::class, 'fetchXrays']);
    Route::get('getOperationNote/{id}', [OperationStepsController::class, 'getOperationNote']);
    Route::get('getOrdonanceId/{id}', [OperationStepsController::class, 'getOrdonanceId']);
    Route::get('fetchOperationBloodTests/{id}', [OperationStepsController::class, 'fetchOperationBloodTests']);
    Route::post('EditOperationBloodTest', [BloodTestController::class, 'EditOperationBloodTest']);
    Route::delete('deleteRadio/{id}', [OperationStepsController::class, 'deleteRadio']);
    Route::delete('deleteBloodTest/{id}', [OperationStepsController::class, 'deleteBloodTest']);
    Route::delete('deleteOrdonance/{id}', [OperationStepsController::class, 'deleteOrdonance']);
});
