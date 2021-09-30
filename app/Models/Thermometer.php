<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thermometer extends Model
{
    use HasFactory;

    protected $fillable = [
    	'user_id',
    	'dashboard_id',
        'x',
        'y',
    	'name',
        'password',
        'topics'
    ];

    public function user() {
    	return $this->belongsTo(User::class);
    }
}
