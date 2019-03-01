<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/produtos', 'ProdutoController@index');

Route::get('/produtos/modal', 'ProdutoController@listaComboCategoria');

Route::post('/produtos', 'ProdutoController@store');

Route::get('/produtos/excluir/{id}', 'ProdutoController@destroy');

Route::post('/produtos/edit/{id}', 'ProdutoController@update');

Route::get('/categorias', 'CategoriaController@index');

Route::post('/categorias', 'CategoriaController@store');

Route::get('/categorias/excluir/{id}', 'CategoriaController@destroy');

Route::post('/categorias/edit/{id}', 'CategoriaController@update');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');