<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ApiController extends Controller
{
    public function index()
    {
        $products = Product::orderBy('id', 'desc')->get();

        return response()->json([
            'status' => true,
            'data' => $products
        ]);
    }

    // single product (optional – detail page ke liye)
    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'status' => false,
                'message' => 'Product not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data' => $product
        ]);
    }

}
