<?php

namespace App\Http\Controllers;

use Illuminate\Http\File;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

use App\Models\CanvasWindow;
use App\Models\CanvasDoor;
use App\Models\CanvasWall;
use App\Models\Dashboard;
use App\Models\User;
use App\Models\Light;
use App\Models\Thermometer;

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

    //needs new controller /this maybe not/
    public function index_newdash()
    {
        return view('dashboard.createdash');
    }

    //needs new controller
    public function show(Dashboard $dashboard) {
        //dd($dashboard);
        $windows = CanvasWindow::with('dashboard')->where('dashboard_id', $dashboard->id)->get();
        $doors = CanvasDoor::with('dashboard')->where('dashboard_id', $dashboard->id)->get();
        $walls = CanvasWall::with('dashboard')->where('dashboard_id', $dashboard->id)->get();

        $lights = Light::with('user')->where('dashboard_id', $dashboard->id)->get();
        $thermos = Thermometer::with('user')->where('dashboard_id', $dashboard->id)->get();

        $url = Storage::url($dashboard->imagePath);

        //$devices = DB::connection('mongodb')->collection('devices')->where('name', "=" ,'test')->get();

        return view('dashboard.show', [
            'url' => $url,
            'dashboard' => $dashboard,
            'windows' => $windows,
            'doors' => $doors,
            'walls' => $walls,
            'lights' => $lights,
            'thermos' => $thermos
        ]);
    }

    public function store(Request $request)
    {
        //dd($request);
        $path = null;

        // Validate field
        $this->validate($request, [
            'dashname' => 'nullable|max:50',
            'imageInput' => 'nullable|image|mimetypes:image/jpeg,image/jpg,image/png',
        ]);

        if ($request->file('imageInput') != null) {
            $path = Storage::putFile('public/dashimages', $request->file('imageInput'), 'public');
        }
        
        if( $request->dashname == null || $request->dashname == "" ) {
            $dashname = "Default-" . now()->toDateTimeString();
        } else {
            $dashname = $request->dashname;
        }

        $request->user()->dashboards()->create([
            'name' => $dashname,
            'imageSet' => $request->imageSet,
            'imagePath' => $path,
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
                /*
                $devices = DB::connection('mongodb')->collection('devices')->insert([
                    'name' => $value['name'] . '-' . $dash_id,
                    'type' => 'light',
                    'password' => $pwd,
                    'topics' => [
                        $topic1[0] => $topic1[1],
                        $topic2[0] => $topic2[1],
                    ],
                    'superuser' => false,
                ]);
                */
            }
            if( Str::contains($key , 'thermo') ) {
                $topics = explode(",", $request->light_0['topics']);
                $topic1 = explode(":", $topics[0]);
                $topic2 = explode(":", $topics[1]);
                $pwd = Hash::make($value['pwd']);

                // pgsql
                Thermometer::create([
                    'user_id' => $request->user()->id,
                    'dashboard_id' => $dash_id,
                    'x' => $value['x'],
                    'y' => $value['y'],
                    'name' => $value['name'],
                    'password' => $pwd,
                    'topics' => $value['topics'],
                ]);
            }
        }

        return redirect()->route('dashboard');
    }

    public function update(Dashboard $dashboard, Request $request) {
        //dd($request->deleted['door_0']['id']);
        $dash_id = Dashboard::latest()->first()->id;
        
        if($request->deleted != null) {
            foreach ($request->deleted as $key => $value) {
                if( Str::contains($key , 'window') ) {
                    CanvasWindow::where('id', $value['id'])
                        ->delete();
                }
                if( Str::contains($key , 'door') ) {
                    CanvasDoor::where('id', $value['id'])
                        ->delete();
                }
                if( Str::contains($key , 'wall') ) {
                    CanvasWall::where('id', $value['id'])
                        ->delete();
                }
                if( Str::contains($key , 'light') ) {
                    Light::where('id', $value['id'])
                        ->delete();
                    
                        $name = $value['name'] . '-' . $dash_id;
                    /*
                    DB::connection('mongodb')->collection('devices')
                        ->where('name', "=", $name)
                        ->delete();
                    */
                }
                if( Str::contains($key , 'thermo') ) {
                    Thermometer::where('id', $value['id'])
                        ->delete();
                }
            }
        }

        if($request->new != null) {
            foreach ($request->new as $key => $value) {
                
                if( Str::contains($key , 'window') ) {
                    CanvasWindow::create([
                        'dashboard_id' => $dashboard->id,
                        'x' => $value['x'],
                        'y' => $value['y'],
                        'isPlaced' => $value['isPlaced'],
                        'isRotated' => $value['isRotated'],
                        'firstPlacedown' => $value['firstPlacedown'],
                    ]);
                }
                if( Str::contains($key , 'door') ) {
                    CanvasDoor::create([
                        'dashboard_id' => $dashboard->id,
                        'x' => $value['x'],
                        'y' => $value['y'],
                        'isRotated' => $value['isRotated'],
                    ]);
                }
                if( Str::contains($key , 'wall') ) {
                    CanvasWall::create([
                        'dashboard_id' => $dashboard->id,
                        'x1' => $value['x1'],
                        'y1' => $value['y1'],
                        'x2' => $value['x2'],
                        'y2' => $value['y2'],
                        'isPlaced' => $value['isPlaced'],
                    ]);
                }
                if( Str::contains($key , 'light') ) {
                    
                    $topics = explode(",", $value['topics']);
                    $topic1 = explode(":", $topics[0]);
                    $topic2 = explode(":", $topics[1]);
                    $pwd = Hash::make($value['pwd']);

                    // pgsql
                    Light::create([
                        'user_id' => $request->user()->id,
                        'dashboard_id' => $dashboard->id,
                        'x' => $value['x'],
                        'y' => $value['y'],
                        'name' => $value['name'],
                        'password' => $pwd,
                        'topics' => $value['topics'],
                        'on' => $value['isOn'],
                    ]);
                    // mongodb
                    /*
                    $devices = DB::connection('mongodb')->collection('devices')->insert([
                        'name' => $value['name'] . '-' . $dash_id,
                        'type' => 'light',
                        'password' => $pwd,
                        'topics' => [
                            $topic1[0] => $topic1[1],
                            $topic2[0] => $topic2[1],
                        ],
                        'superuser' => false,
                    ]);
                    */
                }
                if( Str::contains($key , 'thermo') ) {
                    
                    $topics = explode(",", $value['topics']);
                    $topic1 = explode(":", $topics[0]);
                    $topic2 = explode(":", $topics[1]);
                    $pwd = Hash::make($value['pwd']);

                    // pgsql
                    Thermometer::create([
                        'user_id' => $request->user()->id,
                        'dashboard_id' => $dashboard->id,
                        'x' => $value['x'],
                        'y' => $value['y'],
                        'name' => $value['name'],
                        'password' => $pwd,
                        'topics' => $value['topics'],
                    ]);
                }
            }
        }

        return back();
    }

    public function destroy(Dashboard $dashboard) {
        //dd($dashboard->lights);
        $lights = $dashboard->lights;

        //Delete mongoDB devices
        /*
        foreach ($lights as $light) {
            DB::connection('mongodb')->collection('devices')
                    ->where('name', '=', $light->name . '-' . $dashboard->id)
                    ->delete();
        }
        */

        $dashboard->delete();
        
        return back();
    }

    //need new controller
    public function destroyInView(Dashboard $dashboard) {
        $lights = $dashboard->lights;

        //Delete mongoDB devices
        /*
        foreach ($lights as $light) {
            DB::connection('mongodb')->collection('devices')
                    ->where('name', '=', $light->name . '-' . $dashboard->id)
                    ->delete();
        }
        */

        $dashboard->delete();

        $dashboards = Dashboard::latest()
            ->with('user')
            ->where('user_id', '=', auth()->user()->id)
            ->paginate(4);
        
        return view('dashboard.indexdash', [
            'dashboards' => $dashboards
        ]);
    }
}
