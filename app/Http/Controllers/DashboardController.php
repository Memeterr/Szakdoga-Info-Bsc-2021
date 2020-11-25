<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index()
    {
        
        return view('dashboard.indexdash');
    }

    public function create()
    {
        
        return view('dashboard.createdash');
    }
}
