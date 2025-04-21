<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Models\WaitingRoomLogs;

class WaitingRoom extends Model
{


    use HasFactory;
    protected $guarded = [];
    public function patient()
    {
        return $this->belongsTo(Patient::class, "patient_id");
    }

    protected static function booted()
    {
        static::updated(function ($waitingRoom) {
            $doctorId = Auth::user()->doctor_id ?? Auth::id();
            Log::info('Updated event triggered', [
                'original_status' => $waitingRoom->getOriginal('status'),
                'new_status' => $waitingRoom->status,
            ]);

            if ($waitingRoom->isDirty('status') && $waitingRoom->status === 'current') {
                waitingroomlogs::create([
                    'doctor_id' => $doctorId,
                    'patient_id' => $waitingRoom->patient_id,
                    'waiting_room_id' => $waitingRoom->id,
                    'status' => 'current',
                    'status_changed_at' => now(),
                ]);
            }

            if ($waitingRoom->getOriginal('status') === 'current' && $waitingRoom->status !== 'current') {
                waitingroomlogs::create([
                    'doctor_id' => $doctorId,
                    'patient_id' => $waitingRoom->patient_id,
                    'waiting_room_id' => $waitingRoom->id,
                    'status' => 'exit_current',
                    'status_changed_at' => now(),
                ]);
            }
            Cache::forget('average_time_in_current');
        });
    }
}
