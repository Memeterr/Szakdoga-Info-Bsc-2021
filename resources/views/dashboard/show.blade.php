@extends('layouts.app')

@section('header_title')
    {{ $dashboard->name }}
@endsection

<script type="text/javascript">
	const windows = @json($windows);
    const doors = @json($doors);
	const walls = @json($walls);

	const lights = @json($lights);
</script>

@section('scripts')

    <script type="text/javascript" src="{{ asset('js/mqtt/paho-mqtt-min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/mqtt/connection.js') }}"></script>
    <x-canvas-scripts />
    
@endsection

@section('header_menus')
	<div class="ml-10 flex flex-row">
		

        <a href="{{ route('charts') }}" class="select-none font-semibold px-3 py-2 rounded-md text-base font-medium text-black-300 hover:text-white hover:bg-gray-700">
            Charts for this dashboard</a>

        <form id="form" class="flex mb-0" action="{{ route('dashboard.update', $dashboard) }}" method="post">
            @csrf
            @method('PUT')
            <!-- onclick="blueprint.saveBlueprintCanvas()" -->
            <!-- onclick = addDashValues() -->
            <button onclick="updateDashValues()" type="submit" id="savebutton" class="select-none font-semibold px-3 py-2 rounded-md text-base font-medium text-black-300 hover:text-white hover:bg-gray-700">
            Save changes</button>
        </form>

        <form action="{{ route('dashboard.destroyInView', $dashboard) }}" method="post" class="flex px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 mb-0">
            @csrf
            @method('DELETE')
            <button type="submit" class="select-none font-semibold text-base font-medium text-black-300 hover:text-white">Delete</button>
        </form>
        

    </div>
@endsection

@section('content')
    <div class="flex justify-center">
        
        <x-canvas />
        
    </div>
@endsection