<?php

namespace App\Traits;

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

trait UserRoleCheck
{
    /**
     * Check the user's role and optionally validate their permissions.
     *
     * @param string|array|null $permissions Permission(s) to check (optional).
     * @return int|JsonResponse|null
     */
    protected function checkUserRole(string|array|null $permissions = null)
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }


        // Optional permission check: Allow access if the user has at least one required permission
        if ($permissions) {
            if (!$this->hasAnyPermission($user, (array) $permissions)) {

                return response()->json(['error' => 'Forbidden: Missing Required Permissions'], Response::HTTP_FORBIDDEN);
            }
        }

        // Determine doctor ID based on role
        return $user->role === 'nurse' ? $user->doctor_id : $user->id;
    }

    /**
     * Check if the user has at least one of the given permissions.
     *
     * @param object $user Authenticated user instance.
     * @param array $permissions List of required permissions.
     * @return bool
     */
    protected function hasAnyPermission($user, array $permissions): bool
    {
        $teamId = $user->doctor_id ?? $user->id;
        setPermissionsTeamId($teamId);



        // ✅ Allow access if the user has at least one required permission
        foreach ($permissions as $permission) {
            if ($user->can($permission)) {

                return true;
            }
        }

        return false;
    }
}
