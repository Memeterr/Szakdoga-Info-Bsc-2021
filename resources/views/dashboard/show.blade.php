@extends('layouts.app')

@section('header_title')
    {{ $dashboard->name }}
@endsection

<script type="text/javascript">
	const windows = @json($windows);
</script>

@section('scripts')
    
    <x-canvas-scripts />
    
@endsection

@section('content')
    <div class="flex justify-center">
        
        <x-canvas />
        
    </div>
@endsection