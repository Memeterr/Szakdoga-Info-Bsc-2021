<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

use App\Models\CanvasWindow;
use App\Models\CanvasDoor;
use App\Models\CanvasWall;
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
        $doors = CanvasDoor::with('dashboard')->where('dashboard_id', $dashboard->id)->get();
        $walls = CanvasWall::with('dashboard')->where('dashboard_id', $dashboard->id)->get();

        $lights = Light::with('user')->where('dashboard_id', $dashboard->id)->get();

        //$devices = DB::connection('mongodb')->collection('devices')->where('name', "=" ,'test')->get();

        return view('dashboard.show', [
            'dashboard' => $dashboard,
            'windows' => $windows,
            'doors' => $doors,
            'walls' => $walls,
            'lights' => $lights
        ]);
    }

    public function store(Request $request)
    {
        //dd($request);

        // Validate field
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

        // Store devices to pgsql (default db)
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
            if( Str::contains($key , 'door') ) {
                CanvasDoor::create([
                    'dashboard_id' => $dash_id,
                    'x' => $value['x'],
                    'y' => $value['y'],
                    'isRotated' => $value['isRotated'],
                ]);
            }
            if( Str::contains($key , 'wall') ) {
                CanvasWall::create([
                    'dashboard_id' => $dash_id,
                    'x1' => $value['x1'],
                    'y1' => $value['y1'],
                    'x2' => $value['x2'],
                    'y2' => $value['y2'],
                    'isPlaced' => $value['isPlaced'],
                ]);
            }
            if( Str::contains($key , 'light') ) {
                // TODO insert into mongoDB
                $topics = explode(",", $request->light_0['topics']);
                $topic1 = explode(":", $topics[0]);
                $topic2 = explode(":", $topics[1]);
                $pwd = Hash::make($value['pwd']);

                // pgsql
                Light::create([
                    'user_id' => $request->user()->id,
                    'dashboard_id' => $dash_id,
                    'x' => $value['x'],
                    'y' => $value['y'],
                    'name' => $value['name'],
                    'password' => $pwd,
                    'topics' => $value['topics'],
                    'on' => $value['isOn'],
                ]);
                // mongodb
                $devices = DB::connection('mongodb')->collection('devices')->insert([
                    'name' => $value['name'],
                    'type' => 'light',
                    'password' => $pwd,
                    'topics' => [
                        $topic1[0] => $topic1[1],
                        $topic2[0] => $topic2[1],
                    ],
                    'superuser' => false,
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
