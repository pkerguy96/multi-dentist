<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class operationsession extends Model
{
    use HasFactory;
    protected $guarded =[];
    public function patient()
    {
        return $this->belongsTo(Patient::class, 'patient_id')->withTrashed();
    }
    public function doctor()
    {
        return $this->belongsTo(User::class, 'doctor_id');
    }
    public function operation()
    {
        return $this->belongsTo(Operation::class, 'operation_id');
    }
}
