<?php

namespace App\Http\Controllers;

use App\Models\Dashboard;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index()
    {
        //$dashboards = Dashboard::where('user_id', '=', auth()->user()->id)->get();
        $dashboards = Dashboard::latest()->with('user')->where('user_id', '=', auth()->user()->id)->paginate(5);
        
        return view('dashboard.indexdash', [
            'dashboards' => $dashboards
        ]);
    }

    public function index_newdash()
    {
        return view('dashboard.createdash');
    }

    public function show(Dashboard $dashboard) {
        return view('dashboard.show', [
            'dashboard' => $dashboard
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'dashname' => 'nullable|max:50',
        ]);

        if( $request->dashname == null || $request->dashname == "" ) {
            $dashname = "Default-" . now()->toDateTimeString();
        } else {
            $dashname = $request->dashname;
        }

        $request->user()->dashboards()->create([
            'name' => $dashname
        ]);

        return redirect()->route('dashboard');
    }

    public function destroy(Dashboard $dashboard) {
        $dashboard->delete();

        return back();
    }
}
