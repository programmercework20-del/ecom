<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AdminProductController;
use App\Models\Product;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
| Admin Panel Only
|--------------------------------------------------------------------------
*/

// Root → Admin Login
Route::redirect('/', '/admin/login');

// =======================
// Admin Authentication
// =======================

// Login form
Route::get('/admin/login', [AdminAuthController::class, 'loginForm'])
    ->name('admin.login');

// Login submit
Route::post('/admin/login', [AdminAuthController::class, 'login'])
    ->name('admin.login.submit');

// =======================
// Admin Protected Routes
// =======================
Route::middleware('auth:admin')->prefix('admin')->group(function () {

    // Logout
    Route::post('/logout', [AdminAuthController::class, 'logout'])
        ->name('admin.logout');

    // Dashboard
   Route::get('/dashboard', [AdminAuthController::class, 'dashboard'])
    ->name('admin.dashboard');

// product routes
 Route::get('/products', [AdminProductController::class, 'index'])
            ->name('admin.products.index');

        Route::get('/products/create', [AdminProductController::class, 'create'])
            ->name('admin.products.create');

        Route::post('/products/store', [AdminProductController::class, 'store'])
            ->name('admin.products.store');
        Route::delete('/products/{id}', [AdminProductController::class, 'destroy'])
            ->name('admin.products.destroy');
    
});
