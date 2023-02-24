
<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\ReactFlowController;
use App\Http\Controllers\WebSiteController;
use App\Http\Controllers\HnononoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//
//Route::get('/', function () {
//    return view('index');
//});



Auth::routes();

Route::get('/', [IndexController::class, 'index'])->name('index');
Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::get('/web-site', [WebSiteController::class, 'index'])->name('web-site');
Route::get('/web-site/1', [WebSiteController::class, 'webSite'])->name('beautiful-day');
Route::get('/nonono',[HnononoController::class, 'index'])->name('nonono');

Route::get('/reactflow', [ReactFlowController::class, 'index'])->name('react-flow');
Route::get('/reactflow/edit', [ReactFlowController::class, 'edit'])->name('react-flow.edit');
