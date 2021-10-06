@extends('layouts.app')

@section('header_title')
    Welcome page
@endsection

@section('content')
    <div class="flex justify-center">
        <!-- class="w-full" - for div to fully cover screen width  -->
        <div class="w-8/12 bg-white p-6 rounded-lg">
            @auth
                We hope you're satisfied with the website.
            @else
                This is a Laravel application for creating smart homes. <br>
                To use the website and it's features, you need to register.
            @endauth
        </div>
    </div>
@endsection