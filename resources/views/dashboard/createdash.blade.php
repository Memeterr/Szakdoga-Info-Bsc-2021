@extends('layouts.app')

<script type="text/javascript">
    const windows = [];
</script>

@section('scripts')
    <x-canvas-scripts />
@endsection

@section('header_title')
    Create Dashboard
@endsection

@section('header_menus')
    <div class="ml-10">
        <form id="form" class="flex" action="{{ route('dashboard_create') }}" method="post">
            @csrf
            <!-- onclick="blueprint.saveBlueprintCanvas()" -->
            <button onclick="addDashValues()" type="submit" id="savebutton" class="select-none font-semibold px-3 py-2 rounded-md text-base font-medium text-black-300 hover:text-white hover:bg-gray-700">
            Save dashboard</button>

            <div class="content-center max-h-4 pt-1 ml-2">
                <label for="dashname" class="sr-only">Dashboard name</label>
                <input type="dashname" name="dashname" id="dashname" placeholder="Dashboard Name" class="h-full bg-gray-100 border-2 w-full p-4 rounded-lg @error('dashname') border-red-500 @enderror" value="{{ old('dashname') }}">
                @error('dashname')
                    <div class="text-red-500 text-sm">
                        {{ 'Please set a name.' }}
                    </div>
                @enderror
            </div>
        </form>
    </div>
    <div class="ml-2">
        <div class="select-none font-semibold px-3 py-2 rounded-md text-base font-medium text-black-300">
        Upload image:</div>
    </div>
@endsection

@section('content')
    <x-device-modal />

    <div class="flex justify-center">
        <x-canvas />
    </div>
@endsection