<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AdminNotificationController;
use App\Http\Controllers\AdminProductController;
use App\Http\Controllers\AdminProductImageController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\OrderController;
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
            Route::get('/products/{id}/edit', [AdminProductController::class, 'edit'])
            ->name('admin.products.edit');
        Route::put('/products/{id}', [AdminProductController::class, 'update'])
            ->name('admin.products.update');

            // manage product images
    Route::prefix('admin')->group(function () {

    Route::get('/products/{id}/images', [AdminProductImageController::class, 'index'])
        ->name('admin.products.images');

    Route::post('/products/{id}/images', [AdminProductImageController::class, 'store'])
        ->name('admin.products.images.store');

    Route::delete('/product-image/{id}', [AdminProductImageController::class, 'destroy'])
        ->name('admin.products.images.destroy');

// category routes
Route::get('/category/create', [CategoryController::class, 'create'])
    ->name('admin.category.create');

Route::post('/category/store', [CategoryController::class, 'store'])
    ->name('admin.category.store');
Route::delete('/category/{id}', [CategoryController::class, 'destroy'])
    ->name('admin.category.destroy');

// stock routes
Route::get('/stock', [StockController::class, 'index'])
    ->name('admin.stock.index');
Route::post('/stock/store', [StockController::class, 'store'])
    ->name('admin.stock.store');
Route::delete('/stock/{id}', [StockController::class, 'destroy'])
    ->name('admin.stock.destroy');
    
    
// order routes
Route::get('/orders', [OrderController::class, 'index'])
    ->name('admin.orders.index');
    Route::get('/admin/orders/{id}', [OrderController::class, 'show'])
    ->name('admin.orders.show');
    Route::post('/admin/orders/{id}/cancel',
    [OrderController::class, 'cancel'])
    ->name('admin.orders.cancel');
Route::post('/orders/{id}/update-status', [OrderController::class, 'updateStatus'])
    ->name('admin.orders.updateStatus');

// admin notification routes
Route::get(
    '/admin/notifications/{id}',
    [AdminNotificationController::class, 'read']
)->name('admin.notifications.read');

});
});