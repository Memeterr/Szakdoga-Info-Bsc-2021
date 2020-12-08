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

    <x-canvas-scripts />
    
@endsection

@section('header_menus')
	<div class="ml-10">
		

        <a href="{{ route('charts') }}" class="select-none font-semibold px-3 py-2 rounded-md text-base font-medium text-black-300 hover:text-white hover:bg-gray-700">
            Charts for this dashboard</a>
    </div>
@endsection

@section('content')
    <div class="flex justify-center">
        
        <x-canvas />
        
    </div>
@endsection