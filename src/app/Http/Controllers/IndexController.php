<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class indexController extends Controller
{


    public function index()
    {
        $users = User::all();
        // usersテーブルの最初のレコードを取得
        $user = User::first();

        // usersテーブルの最初のレコードの名前を取得
        $name = User::first()->name;

//        dd(User::first()->email);

        return view('index', compact('users'));
    }


}

