@extends('layouts.app')

@section('scripts')
    <!-- P5.js libraries -->
    <script type="text/javascript" src="{{ asset('js/sketchLibrary/js-libraries/p5.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/sketchLibrary/js-libraries/jquery-3.5.1.min.js') }}"></script>

    <!-- Classes -->
    <script type="text/javascript" src="{{ asset('js/sketchLibrary/classes/window.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/sketchLibrary/classes/wall.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/sketchLibrary/classes/door.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/sketchLibrary/classes/light.js') }}"></script>

    <!-- Sketches -->
    <script type="text/javascript" src="{{ asset('js/sketchLibrary/sketches/blueprint.js') }}"></script>
    
    <!-- Other .js files -->
    <script type="text/javascript" src="{{ asset('js/dashboard/canvas-icon-control.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/dashboard/add-dashvalues.js') }}"></script>
    
@endsection

@section('header_title')
    Create Dashboard
@endsection

@section('header_menus')
    <div class="ml-10">
        <form id="form" action="{{ route('dashboard_create') }}" method="post">
            @csrf
            <!-- onclick="blueprint.saveBlueprintCanvas()" -->
            <button onclick="addDashValues()" type="submit" id="savebutton" class="select-none font-semibold px-3 py-2 rounded-md text-base font-medium text-black-300 hover:text-white hover:bg-gray-700">
            Save dashboard</button>
        </form>
    </div>
    <div class="ml-2">
        <div class="select-none font-semibold px-3 py-2 rounded-md text-base font-medium text-black-300">
        Upload image:</div>
    </div>
@endsection

@section('content')
    <div class="flex justify-center">
        <!-- class="w-full" - for div to fully cover screen width  -->
        <div id="canvas_container" class="relative w-8/12 bg-white p-6 rounded-lg">
            <div class="cursor-pointer absolute grid grid-flow-col grid-cols-3 items-center justify-center w-2/6 h-12 bg-gray-200 left-2/4 transform -translate-x-2/4">
                <div class="select-none flex w-auto h-full justify-center items-center border border-t-0 border-r-0 border-black hover:bg-gray-100" id="door">
                    Door
                </div>
                <div class="select-none flex w-auto h-full justify-center items-center border border-t-0 border-r-0 border-black hover:bg-gray-100" id="wall">
                    Wall
                </div>
                <div class="select-none flex w-auto h-full justify-center items-center border border-t-0 border-black hover:bg-gray-100" id="window">
                    Window
                </div>
            </div>

            <div class="cursor-pointer absolute grid grid-flow-col grid-cols-5 items-center justify-center w-3/6 h-12 bg-gray-200 bottom-0 left-2/4 transform -translate-y-2/4 -translate-x-2/4">
                <div class="select-none flex flex-col w-auto h-full justify-center items-center border border-b-0 border-r-0 border-black hover:bg-gray-100">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Door Lock
                </div>
                <div class="select-none flex flex-col w-auto h-full justify-center items-center border border-b-0 border-r-0 border-black hover:bg-gray-100">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    Temp
                </div>
                <div class="select-none flex flex-col w-auto h-full justify-center items-center border border-b-0 border-r-0 border-black hover:bg-gray-100">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Light
                </div>
                <div class="select-none flex flex-col w-auto h-full justify-center items-center border border-b-0 border-r-0 border-black hover:bg-gray-100">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 7H7v6h6V7z" />
                        <path fill-rule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clip-rule="evenodd" />
                    </svg>
                    Plug
                </div>
                <div class="select-none flex flex-col w-auto h-full justify-center items-center border border-b-0 border-black hover:bg-gray-100">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                    Sensor
                </div>
            </div>

            <div class="cursor-pointer absolute grid grid-flow-col grid-cols-2 items-center justify-center w-56 h-12 bg-gray-200">
                <div class="select-none flex flex-col w-auto h-full justify-center items-center border border-t-0 border-l-0 border-black hover:bg-gray-100" id="edit">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit mode
                </div>
                <div class="select-none flex flex-col w-auto h-full justify-center items-center border border-t-0 border-l-0 border-black hover:bg-gray-100" id="rotate">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Rotate Object
                </div>
            </div>

            <div class="cursor-pointer absolute flex justify-center items-center border border-r-0 border-t-0 border-black -translate-x-full right-0 w-12 h-12 bg-red-700 mr-6 hover:bg-red-600" id="delete">
                <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="lightgray" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
        </div>
    </div>
@endsection