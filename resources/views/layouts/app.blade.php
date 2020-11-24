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
                                    <a href="/" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                        Home</a>
                                @endguest
                
                                @auth
                                    <a href="{{ route('dashboard') }}" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                        Dashboard</a>
                    
                                    <a href="{{ route('charts') }}" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                        Charts</a>
                                @endauth
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            @auth
                                <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                    {{ auth()->user()->name }}</a>
                            
                                <form action="{{ route('logout') }}" method="post" class="inline px-3 py-2 rounded-md hover:text-white hover:bg-gray-700">
                                    @csrf
                                    <button type="submit" class="text-sm font-medium text-gray-300">Logout</button>
                                </form>
                            @endauth

                            @guest
                                <a href="{{ route('login') }}" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                    Login</a>
                                
                                <a href="{{ route('register') }}" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                                    Register</a>
                            @endguest
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <header class="bg-white shadow  mb-6">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold leading-tight text-gray-900">
                    @yield('header_title')
                </h1>
            </div>
        </header>

        @yield('content')

    </body>
</html>