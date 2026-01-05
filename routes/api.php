<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;



Route::get('/products', function () {
    return Product::orderBy('id', 'desc')->get();
});