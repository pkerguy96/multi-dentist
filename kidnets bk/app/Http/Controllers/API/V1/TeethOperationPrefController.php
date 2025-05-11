<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\OperationprefResource;
use App\Models\TeethOperationPrefs;
use App\Traits\HttpResponses;
use App\Traits\UserRoleCheck;
use Illuminate\Http\Request;

class TeethOperationPrefController extends Controller
{
    use HttpResponses;
    use UserRoleCheck;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $doctorId = $this->checkUserRole();
            $operations = TeethOperationPrefs::where('doctor_id', $doctorId)->get();
            return OperationprefResource::collection($operations);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch teeth operation preferences',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $doctorId = $this->checkUserRole();

        try {
            $validated = $request->validate([
                'operation_type' => 'required|string|max:191',
                'price' => 'required|numeric|min:0',
                'code' => 'nullable|string|max:50',
            ]);

            $validated['doctor_id'] = $doctorId;

            $operation = TeethOperationPrefs::create($validated);

            return response()->json([
                'status' => 'success',
                'message' => 'Teeth operation preference created successfully',
                'data' => $operation,
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create teeth operation preference',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $doctorId = $this->checkUserRole();

        try {
            $operation = TeethOperationPrefs::where('doctor_id', $doctorId)->where('id', $id)->firstOrFail();
            $operation->delete();

            return $this->success(null, 'Teeth operation preference deleted successfully', 200);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Teeth operation preference not found',
            ], 404);
        } catch (\Exception $e) {
            return $this->error($e->getMessage(), 'Failed to delete teeth operation preference', 500);
        }
    }
}
