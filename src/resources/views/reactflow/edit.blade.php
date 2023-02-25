<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <style>
        .text-updater-node {
            height: 50px;
            border: 1px solid #eee;
            padding: 5px;
            border-radius: 5px;
            background: white;
        }

        .text-updater-node label {
            display: block;
            color: #777;
            font-size: 12px;
        }

    </style>
    @viteReactRefresh
    @vite(['resources/js/reactflow/edit.jsx'])
</head>
<body class="antialiased">
<div style="background-color: #eaeaea;">
    @if (Route::has('login'))
        <div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            @auth
                <a href="{{ url('/home') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Home</a>
            @else
                <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                @endif
            @endauth
        </div>
    @endif
</div>

<div id="react" data-blade="{{ $users }}"></div>
<div id="react2" data-blade="{{ $users }}"></div>
<div id="root-container"></div>





</div>
</body>
</html>
