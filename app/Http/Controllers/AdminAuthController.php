<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;


class AdminAuthController extends Controller
{
    public function loginForm()
    {
        return view('admin.login');
    }

    // login check
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::guard('admin')->attempt($credentials)) {
            return redirect('/admin/dashboard');
        }

        return back()->with('error', 'Invalid login details');
    }

    // dashboard
public function dashboard()
{
    $totalProducts = Product::count();

    // Latest products without timestamps
    $latestProducts = Product::orderBy('id', 'desc')
        ->limit(5)
        ->get();

    return view('admin.dashboard', compact(
        'totalProducts',
        'latestProducts'
    ));
}

    // logout
    public function logout()
    {
        Auth::guard('admin')->logout();
        return redirect('/admin/login');
    }







}