@extends('layouts.app')

@section('header_title')
    {{ $dashboard->name }}
@endsection

<script type="text/javascript">
	const windows = @json($windows);
    const doors = @json($doors);
	const walls = @json($walls);

	const lights = @json($lights);
    const thermos = @json($thermos);

    const imgurl = @json($url);
</script>

@section('scripts')

    <script type="text/javascript" src="{{ asset('js/mqtt/paho-mqtt-min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/mqtt/connection.js') }}"></script>
    <x-canvas-scripts />
    
@endsection

@section('header_menus')
	<div class="ml-10 flex flex-row">
        @if ($url != '/storage/')
		<img src="{{ $url }}" style="display: none;">
        @endif

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

        <form action="{{ route('dashboard.destroyInView', $dashboard) }}" method="post" class="flex mb-0">
            @csrf
            @method('DELETE')
            <button type="submit" class="px-3 py-2 select-none font-semibold text-base font-medium text-red-700 hover:text-white rounded-md hover:bg-red-700 ">Delete</button>
        </form>
        

    </div>
@endsection

@section('content')
    <x-device-modal />

    <div class="flex justify-center mb-6">
        <x-canvas />
    </div>
@endsection