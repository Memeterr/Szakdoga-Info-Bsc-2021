<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Smarthome</title>

        <link rel="stylesheet" href=" {{ asset('css/app.css') }} ">

        @yield('scripts')
    </head>
    <body class="bg-gray-200">
        <nav class="bg-gray-800">
            <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                @guest
                                    <a href="/" class="select-none px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                        Home</a>
                                @endguest
                
                                @auth
                                    <a href="{{ route('dashboard') }}" class="select-none px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                        My Dashboards</a>

                                    @if (Route::currentRouteName() != 'dashboard_create')
                                        <a href="{{ route('dashboard_create') }}" class="select-none px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                        Create Dashboard</a>
                                    @endif
                                @endauth
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                    <div class="hidden md:block">
                        <div class="ml-8 flex items-baseline space-x-4">
                            @auth
                                <a href="#" class="select-none flex px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                    {{ auth()->user()->name }}
                                
                                    <svg class="ml-2" width=20 height=20 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </a>
                            
                                <form action="{{ route('logout') }}" method="post" class="flex px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 mb-0">
                                    @csrf
                                    <button type="submit" class="select-none text-sm font-medium text-gray-300">
                                        Logout</button>

                                    <svg class="ml-2" width=20 height=20 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </form>
                            @endauth

                            @guest
                                <a href="{{ route('login') }}" class="select-none px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                    Login</a>
                                
                                <a href="{{ route('register') }}" class="select-none px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                    Register</a>
                            @endguest
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </nav>

        <header class="bg-white shadow  mb-6">
            <div id="header" class="flex items-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold leading-tight text-gray-900">
                    @yield('header_title')
                </h1>
                @yield('header_menus')
            </div>
        </header>

        @yield('content')

    </body>
</html>