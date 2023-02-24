<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ReactFlowController extends Controller
{
    public function index()
    {
        return view('reactflow.index');
    }

    public function edit()
    {
        $users = User::all();

        return view('reactflow.edit', compact('users'));
    }
}
