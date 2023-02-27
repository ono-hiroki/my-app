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


        .dndflow {
            flex-direction: column;
            display: flex;
            flex-grow: 1;
            height: 100%;
        }

        .dndflow aside {
            border-right: 1px solid #eee;
            padding: 15px 10px;
            font-size: 12px;
            background: #fcfcfc;
        }

        .dndflow aside .description {
            margin-bottom: 10px;
        }

        .dndflow .dndnode {
            height: 20px;
            padding: 4px;
            border: 1px solid #1a192b;
            border-radius: 2px;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: grab;
        }

        .dndflow .dndnode.input {
            border-color: #0041d0;
        }

        .dndflow .dndnode.output {
            border-color: #ff0072;
        }

        .dndflow .reactflow-wrapper {
            flex-grow: 1;
            height: 100%;
        }

        .dndflow .selectall {
            margin-top: 10px;
        }

        @media screen and (min-width: 768px) {
            .dndflow {
                flex-direction: row;
            }

            .dndflow aside {
                width: 20%;
                max-width: 250px;
            }
        }


        .edgebutton {
            width: 20px;
            height: 20px;
            background: #eee;
            border: 1px solid #fff;
            cursor: pointer;
            border-radius: 50%;
            font-size: 12px;
            line-height: 1;
        }

        .edgebutton:hover {
            box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.08);
        }

        .edgebutton-foreignobject div {
            background: transparent;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 40px;
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
