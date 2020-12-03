@extends('layouts.app')

@section('header_title')
    {{ $dashboard->name }}
@endsection

@section('scripts')
    
    <x-canvas-scripts />
    
@endsection

@section('content')
    <div class="flex justify-center">
        
        <x-canvas />
        
    </div>
@endsection