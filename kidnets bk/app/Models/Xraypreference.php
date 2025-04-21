<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Xraypreference extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    use HasFactory;
    public function xrays()
    {
        return $this->hasMany(Xray::class, 'xray_preference_id');
    }

    public function xray_category()
    {
        return $this->belongsTo(XrayCategory::class, 'xray_category_id');
    }
}
