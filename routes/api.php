<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;


use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\Api\ProductImageController;

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
Route::get('/products', [ApiController::class, 'index']);
Route::get('/products/{id}', [ApiController::class, 'show']);



Route::post('/product-images', [ProductImageController::class, 'store']);
Route::get('/product-images/{productId}', [ProductImageController::class, 'show']);
Route::delete('/product-images/{id}', [ProductImageController::class, 'destroy']);


Route::get('/product/{id}/stock', [ApiController::class, 'productStock']);

Route::post('/order/place', [ApiController::class, 'placeOrder']);
Route::post('/order/cancel/{id}', [ApiController::class, 'cancelOrder']);

Route::get('/orders', [ApiController::class, 'orders']);