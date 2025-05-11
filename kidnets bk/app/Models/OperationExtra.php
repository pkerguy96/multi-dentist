<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OperationExtra extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    use HasFactory;
    public function Operation()
    {
        return $this->belongsTo(Operation::class, 'operation_id');
    }
    public function operationUserpref()
    {
        return $this->belongsTo(User::class, 'doctor_id');
    }
}
