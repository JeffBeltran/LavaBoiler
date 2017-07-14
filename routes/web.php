<?php

use App\User;
use Illuminate\Http\Request;

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

Route::get('/', function () {
    return view('app');
});

Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    // Route::get('/users', function () {
    //   return response()->json([
    //     'data' => User::all()
    //   ], 200);
    // });
});
