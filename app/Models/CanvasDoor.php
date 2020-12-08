<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CanvasDoor extends Model
{
    use HasFactory;

    protected $fillable = [
        'dashboard_id',
    	'x',
    	'y',
    	'isRotated'
    ];

    public function dashboard() {
    	return $this->belongsTo(Dashboard::class);
    }
}
