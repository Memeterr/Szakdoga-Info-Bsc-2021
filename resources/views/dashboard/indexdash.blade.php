@extends('layouts.app')

@section('header_title')
    My Dashboards
@endsection

@section('content')
    <div class="flex justify-center">
        <!-- class="w-full" - for div to fully cover screen width  -->
        <div class="w-8/12 bg-white p-6 rounded-lg">
            @if ($dashboards->count())
            	@foreach ($dashboards as $dashboard)
            		<div class="mb-4">
            			<a href="{{ route('dashboard.show', $dashboard) }}" class="font-bold mr-1">{{ $dashboard->name }}</a> <span class="text-gry-600 text-sm">{{ $dashboard->created_at }}</span>

            			<p>Template: From image / Custom</p>
            			<p>Devices:</p>

            			<div>
            				<form action="{{ route('dashboard.destroy', $dashboard) }}" method="post">
            					@csrf
            					@method('DELETE')
            					<button type="submit" class="text-blue-500">Delete</button>
            				</form>
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