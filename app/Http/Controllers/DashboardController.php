<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

use App\Models\CanvasWindow;
use App\Models\Dashboard;
use App\Models\User;
use App\Models\Light;
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
        $dashboards = Dashboard::latest()
            ->with('user')
            ->where('user_id', '=', auth()->user()->id)
            ->paginate(4);
        
        return view('dashboard.indexdash', [
            'dashboards' => $dashboards
        ]);
    }

    public function index_newdash()
    {
        return view('dashboard.createdash');
    }

    public function show(Dashboard $dashboard) {
        $windows = CanvasWindow::with('dashboard')->where('dashboard_id', $dashboard->id)->get();

        $lights = Light::with('user')->where('dashboard_id', $dashboard->id)->get();

        return view('dashboard.show', [
            'dashboard' => $dashboard,
            'windows' => $windows,
            'lights' => $lights
        ]);
    }

    public function store(Request $request)
    {
        //dd($request);

        $this->validate($request, [
            'dashname' => 'nullable|max:50',
        ]);

        if( $request->dashname == null || $request->dashname == "" ) {
            $dashname = "Default-" . now()->toDateTimeString();
        } else {
            $dashname = $request->dashname;
        }

        $request->user()->dashboards()->create([
            'name' => $dashname,
            'imageSet' => $request->imageSet
        ]);
        $dash_id = Dashboard::latest()->first()->id;

        foreach ($request->all() as $key => $value) {
            if( Str::contains($key , 'window') ) {
                CanvasWindow::create([
                    'dashboard_id' => $dash_id,
                    'x' => $value['x'],
                    'y' => $value['y'],
                    'isPlaced' => $value['isPlaced'],
                    'isRotated' => $value['isRotated'],
                    'firstPlacedown' => $value['firstPlacedown'],
                ]);
            }
            if( Str::contains($key , 'light') ) {
                Light::create([
                    'user_id' => $request->user()->id,
                    'dashboard_id' => $dash_id,
                    'x' => $value['x'],
                    'y' => $value['y'],
                    'name' => $value['name'],
                    'password' => Hash::make($value['pwd']),
                    'topics' => $value['topics'],
                    'on' => $value['isOn'],
                ]);
            }
        }

        return redirect()->route('dashboard');
    }

    public function destroy(Dashboard $dashboard) {
        $dashboard->delete();

        return back();
    }
}
