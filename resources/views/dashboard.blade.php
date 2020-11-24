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
    
@endsection

@section('header_title')
    Dashboard
@endsection

@section('content')
    <div class="flex justify-center">
        <!-- class="w-full" - for div to fully cover screen width  -->
        <div id="canvas_container" class="relative w-8/12 bg-white p-6 rounded-lg">
            <div class="cursor-pointer absolute grid grid-flow-col grid-cols-3 items-center justify-center w-2/6 h-12 bg-gray-200 left-2/4 transform -translate-x-2/4">
                <div class="flex w-auto h-full justify-center items-center border border-t-0 border-r-0 border-black hover:bg-gray-100" id="door">
                    Door
                </div>
                <div class="flex w-auto h-full justify-center items-center border border-t-0 border-r-0 border-black hover:bg-gray-100" id="wall">
                    Wall
                </div>
                <div class="flex w-auto h-full justify-center items-center border border-t-0 border-black hover:bg-gray-100" id="window">
                    Window
                </div>
            </div>

            <div class="cursor-pointer absolute grid grid-flow-col grid-cols-5 items-center justify-center w-3/6 h-12 bg-gray-200 bottom-0 left-2/4 transform -translate-y-2/4 -translate-x-2/4">
                <div class="flex w-auto h-full justify-center items-center border border-b-0 border-r-0 border-black hover:bg-gray-100">
                    Door Lock
                </div>
                <div class="flex w-auto h-full justify-center items-center border border-b-0 border-r-0 border-black hover:bg-gray-100">
                    Temp
                </div>
                <div class="flex w-auto h-full justify-center items-center border border-b-0 border-r-0 border-black hover:bg-gray-100">
                    Light
                </div>
                <div class="flex w-auto h-full justify-center items-center border border-b-0 border-r-0 border-black hover:bg-gray-100">
                    Plug
                </div>
                <div class="flex w-auto h-full justify-center items-center border border-b-0 border-black hover:bg-gray-100">
                    Sensor
                </div>
            </div>

            <div class="cursor-pointer absolute flex justify-center items-center -translate-x-full right-0 w-12 h-12 bg-red-700 mr-6 hover:bg-red-600" id="delete">
                <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="lightgray" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </div>
        </div>
    </div>
@endsection