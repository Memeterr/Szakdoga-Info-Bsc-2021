<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CanvasWall extends Model
{
    use HasFactory;

    protected $fillable = [
        'dashboard_id',
    	'x1',
    	'y1',
    	'x2',
    	'y2',
    	'isPlaced'
    ];

    public function dashboard() {
    	return $this->belongsTo(Dashboard::class);
    }
}
