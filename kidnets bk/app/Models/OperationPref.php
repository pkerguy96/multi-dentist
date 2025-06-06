<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OperationPref extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    use HasFactory;

    public function operationUserpref()
    {
        return $this->belongsTo(User::class, 'doctor_id');
    }
}
