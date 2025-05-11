<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TeethOperationPrefs extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    use HasFactory;

    public function operationUserpref()
    {
        return $this->belongsTo(User::class, 'doctor_id');
    }
    public function details()
    {
        return $this->hasMany(operation_detail::class, 'operation_type', 'operation_type');
    }
}
