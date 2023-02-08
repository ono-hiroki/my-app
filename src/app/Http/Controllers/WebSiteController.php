<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebSiteController extends Controller
{
    public function index()
    {
        return view('web-site.index');
    }

    public function webSite()
    {
        return view('web-site.web-site1');
    }
}
