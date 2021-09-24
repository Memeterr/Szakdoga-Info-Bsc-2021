@extends('layouts.app')

@section('header_title')
    My Dashboards
@endsection

@section('content')
    <div class="flex justify-center">
        <!-- class="w-full" - for div to fully cover screen width  -->
        <div class="w-8/12 bg-white p-6 rounded-lg mb-4">
            @if ($dashboards->count())
            	@foreach ($dashboards as $dashboard)
            		<div class="mb-4 overflow-hidden h-34">
						<div class="float-left mr-3 h-full justify-center items-center">
							<a href="{{ route('dashboard.show', $dashboard) }}">
							@if ( $dashboard->imageSet )
								<img class="" src="{{ Storage::url($dashboard->imagePath) }}" alt="Dashboard preview" width="135px">
							@else
								<img class="" src="/storage/images/no-img.jpg" alt="Dashboard preview" width="135px">
							@endif
							</a>
						</div>

						<div class="float-left">
							<a href="{{ route('dashboard.show', $dashboard) }}" class="font-bold mr-1">{{ $dashboard->name }}</a> <span class="text-gry-600 text-sm">{{ $dashboard->created_at }}</span>
							
							@if ( $dashboard->imageSet )
								<p>Template: From image</p>
							@else
								<p>Template: Custom</p>
							@endif
	
							<p>Drawables: {{ $dashboard->windows->count()+$dashboard->walls->count()+$dashboard->doors->count() }}</p>

							<p>Devices: {{ $dashboard->lights->count() }}</p>

							<div class="float-left">
								<form action="{{ route('dashboard.destroy', $dashboard) }}" method="post">
									@csrf
									@method('DELETE')
									<button type="submit" class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-4 border border-red-500 hover:border-transparent rounded">
										Delete
									</button>
								</form>
							</div>
						</div>
            		</div>
            	@endforeach

            	{{ $dashboards->links() }}
			@else
				<p>You haven't created any dashboards yet.</p>
			@endif
        </div>
    </div>
@endsection