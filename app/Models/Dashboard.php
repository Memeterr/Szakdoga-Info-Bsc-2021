<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dashboard extends Model
{
    use HasFactory;

    protected $fillable = [
    	'name',
        'imageSet'
    ];

    public function user() {
    	return $this->belongsTo(User::class);
    }

    public function windows() {
        return $this->hasMany(CanvasWindow::class);
    }

    public function doors() {
        return $this->hasMany(CanvasDoor::class);
    }

    public function walls() {
        return $this->hasMany(CanvasWall::class);
    }

    public function lights() {
        return $this->hasMany(Light::class);
    }

}
