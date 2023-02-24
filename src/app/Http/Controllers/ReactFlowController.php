<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReactFlowController extends Controller
{
    public function index()
    {
        return view('reactflow.index');
    }

    public function edit()
    {
        return view('reactflow.edit');
    }
}
