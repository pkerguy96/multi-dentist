<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Appointment;
use App\Http\Resources\AppointmentCollection;
use App\Http\Requests\AppointmentRequest;
use Illuminate\Support\Carbon;
use App\Http\Resources\AppointmentResource;
use App\Traits\HttpResponses;
use App\Traits\UserRoleCheck;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class AppointmentController extends Controller
{
    use HttpResponses;
    use UserRoleCheck;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $doctorId = $this->checkUserRole();

        return new AppointmentCollection(
            Appointment::where('doctor_id', $doctorId)->with('patient')->orderBy('id', 'desc')
                ->get()
        );
    }
    public function GetAppointmentPagated(Request $request)
    {
        $doctorId = $this->checkUserRole();
        $searchQuery = $request->input('searchQuery'); // Retrieve search query from request
        $appointments = Appointment::where('doctor_id', $doctorId)->with('patient') // Include 'patient' relationship
            ->orderBy('id', 'desc') // Order appointments by descending ID
            ->paginate($request->get('per_page', 20)); // Paginate with a default of 20 items per page

        if (!empty($searchQuery)) {
            // Apply search filters if there's a search query
            $appointments = Appointment::where('doctor_id', $doctorId)->with('patient')
                ->whereHas('patient', function ($query) use ($searchQuery) {
                    $query->where('nom', 'like', "%{$searchQuery}%")
                        ->orWhere('prenom', 'like', "%{$searchQuery}%");
                    // Add more fields to search in the 'patient' table if needed
                })
                ->orderBy('id', 'desc')
                ->paginate($request->get('per_page', 20));
        }

        return new AppointmentCollection($appointments);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */


    public function store(AppointmentRequest $request)
    {
        Log::info('Appointment Store Called', ['request_data' => $request->all()]);

        $doctorId = $this->checkUserRole();
        Log::info('Doctor ID Retrieved', ['doctor_id' => $doctorId]);

        // Check if it's a phone appointment
        $isPhoneAppointment = $request->input('type') === 'phone';

        if ($isPhoneAppointment) {
            Log::info('Processing Phone Appointment', ['phone' => $request->input('phone')]);

            // Validate phone appointment
            $validatedData = $request->validate([
                'phone' => 'required|string|max:20',
                'date' => 'required|date_format:Y-m-d\TH:i:s',
                'note' => 'nullable|string',
            ]);

            Log::info('Validated Data', ['validated_data' => $validatedData]);

            $appointment_date = Carbon::parse($request->input('date'));

            if ($appointment_date->isPast()) {
                Log::warning('Attempted to book a past appointment', ['date' => $appointment_date]);
                return response()->json([
                    'message' => 'Impossible de prendre un rendez-vous dans le passé.',
                ], 422);
            }

            // Save phone appointment
            $appointment = Appointment::create([
                'doctor_id' => $doctorId,
                'phone_number' => $request->filled('phone') ? $request->input('phone') : null,
                'date' => $appointment_date,
                'note' => $request->input('note'),
            ]);

            Log::info('Phone Appointment Created', ['appointment' => $appointment]);

            return response()->json([
                'message' => 'Rendez-vous téléphonique créé avec succès.',
                'data' => new AppointmentResource($appointment)
            ], 201);
        }

        // Handle normal patient appointment
        Log::info('Processing Normal Appointment');

        $validatedData = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'date' => 'required|date_format:Y-m-d\TH:i:s',
            'note' => 'nullable|string',
        ]);

        Log::info('Validated Data', ['validated_data' => $validatedData]);

        $appointment_date = Carbon::parse($request->input('date'));

        if ($appointment_date->isPast()) {
            Log::warning('Attempted to book a past appointment', ['date' => $appointment_date]);
            return response()->json([
                'message' => 'Impossible de prendre un rendez-vous dans le passé.',
            ], 422);
        }

        // Save normal appointment
        $appointment = Appointment::create([
            'doctor_id' => $doctorId,
            'patient_id' => $request->input('patient_id'),
            'date' => $appointment_date,
            'note' => $request->input('note'),
        ]);

        Log::info('Normal Appointment Created', ['appointment' => $appointment]);

        return response()->json([
            'message' => 'Rendez-vous créé avec succès.',
            'data' => new AppointmentResource($appointment)
        ], 201);
    }





    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    /*    public function edit(Request $request, int $id)
    {
        Log::info('Edit method called', ['request_data' => $request->all(), 'appointment_id' => $id]);

        $doctorId = $this->checkUserRole();
        Log::info('Doctor ID retrieved', ['doctor_id' => $doctorId]);

        $appointment = Appointment::find($id);
        if (!$appointment) {
            Log::warning('Appointment not found', ['id' => $id]);
            return response()->json(['message' => 'Rendez-vous introuvable'], 404);
        }

        Log::info('Appointment found', ['appointment' => $appointment]);

        $newAppointmentDate = Carbon::parse($request->input('data.date'));
        Log::info('Parsed new date', ['new_date' => $newAppointmentDate]);

        if ($newAppointmentDate->isPast()) {
            Log::warning('Attempt to update past appointment', ['date' => $newAppointmentDate]);
            return response()->json(['message' => 'Impossible de modifier un rendez-vous pour une date passée.'], 422);
        }

        // Check for conflicting appointments
        $existingAppointment = Appointment::where('date', $newAppointmentDate)
            ->where('doctor_id', $doctorId)
            ->where('id', '!=', $id)
            ->first();

        if ($existingAppointment) {
            Log::warning('Conflict detected', ['conflict_appointment' => $existingAppointment]);
            return response()->json(['message' => 'Un autre rendez-vous existe déjà à cette date et heure.'], 422);
        }

        // Update appointment
        $appointment->update(['date' => $newAppointmentDate]);

        Log::info('Appointment updated successfully', ['updated_appointment' => $appointment]);

        return response()->json([
            'message' => 'Rendez-vous modifié avec succès.',
            'data' => new AppointmentResource($appointment)
        ], 200);
    } */



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $doctorId = $this->checkUserRole();
        $appointment = Appointment::findOrFail($id);
        $rawDate = $request->input('date');
        try {
            $newAppointmentDate = Carbon::parse($rawDate, 'UTC')->setTimezone(config('app.timezone'));
        } catch (\Exception $e) {
            return response()->json(['message' => 'Invalid date format'], 400);
        }
        // Check if the new date is in the past
        if ($newAppointmentDate->isPast()) {
            return response()->json(['message' => 'Impossible de modifier un rendez-vous pour une date passée.'], 422);
        }
        // Check for conflicting appointments
        $existingAppointment = Appointment::where('date', $newAppointmentDate)
            ->where('doctor_id', $doctorId)
            ->where('id', '!=', $id)
            ->first();

        if ($existingAppointment) {
            return response()->json(['message' => 'Un autre rendez-vous existe déjà à cette date et heure.'], 422);
        }
        $appointment->update(['date' => $newAppointmentDate]);
        return response()->json([
            'message' => 'Rendez-vous modifié avec succès.',
            'data' => new AppointmentResource($appointment)
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $appointment = Appointment::find($id);
        if (!$appointment) {
            return response()->json(['message' => 'Appointment not found'], 404);
        }
        // Delete the appointment
        $appointment->delete();
        return $this->success(null, 'deleted', 200);
    }

    public function GetOpAppointments($operation_id, Request $request)
    {
        $doctorId = $this->checkUserRole();


        if (!\App\Models\Operation::where('id', $operation_id)->exists()) {
            return response()->json([
                'message' => 'Opération introuvable.',
            ], 404);
        }

        $appointments = Appointment::where('doctor_id', $doctorId)
            ->where('operation_id', $operation_id)
            ->get(['id', 'date', 'note']);

        return response()->json([
            'message' => 'Liste des rendez-vous de cette opération.',
            'operation_id' => $operation_id,
            'appointments' => $appointments->map(function ($appt) {
                return [
                    'id' => $appt->id,
                    'date' => \Carbon\Carbon::parse($appt->date)->format('Y-m-d\TH:i:s'),
                    'note' => $appt->note,
                ];
            }),
        ]);
    }


    public function storeMultipleForOperation(Request $request)
    {
        $doctorId = $this->checkUserRole();
        $validated = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'operation_id' => 'required|exists:operations,id',
            'appointments' => 'required|array|min:1',
            'appointments.*.date' => 'required|date_format:Y-m-d\TH:i:s',
            'appointments.*.note' => 'nullable|string',
        ]);
        DB::beginTransaction();
        try {
            $savedAppointments = [];
            foreach ($validated['appointments'] as $index => $appt) {
                $parsedDate = Carbon::parse($appt['date']);

                if ($parsedDate->isPast()) {
                    throw new \Exception("L'heure du rendez-vous {$parsedDate} est déjà passée (index $index).");
                }

                $created = Appointment::create([
                    'doctor_id' => $doctorId,
                    'patient_id' => $validated['patient_id'],
                    'operation_id' => $validated['operation_id'],
                    'date' => $parsedDate,
                    'note' => $appt['note'] ?? null,
                ]);
                $savedAppointments[] = new AppointmentResource($created);
            }
            DB::commit();
            return response()->json([
                'message' => 'Tous les rendez-vous ont été créés avec succès.',
                'data' => $savedAppointments,
            ], 201);
        } catch (\Throwable $e) {
            DB::rollBack();
            return response()->json([
                'message' => $e->getMessage(),
                'error' => $e->getMessage(),
            ], 422);
        }
    }
}
