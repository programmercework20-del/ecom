<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductImage;

class AdminProductImageController extends Controller
{
    // show gallery page
    public function index($id)
    {
        $product = Product::with('images')->findOrFail($id);
        return view('admin.product.images', compact('product'));
    }

    // upload gallery images
   public function store(Request $request, $id)
{
    $request->validate([
        'images'   => 'required',
        'images.*' => 'image|mimes:jpg,jpeg,png,webp'
    ]);

    // 🔥 base url for gallery
    $baseUrl = url('products/gallery');
    // example:
    // http://localhost/ecom/public/products/gallery
    // http://192.168.1.7/ecom/public/products/gallery

    foreach ($request->images as $img) {

        $imageName = time().'_'.$img->getClientOriginalName();

        // move image
        $img->move(public_path('products/gallery'), $imageName);

        // 🔥 FULL IMAGE URL
        $fullImagePath = $baseUrl . '/' . $imageName;

        ProductImage::create([
            'product_id' => $id,
            'image' => $fullImagePath   // 👈 FULL URL stored
        ]);
    }

    return back()->with('success', 'Images uploaded successfully');
}


    // delete single image
    public function destroy($id)
    {
        $image = ProductImage::findOrFail($id);

        $path = public_path('products/gallery/'.$image->image);
        if (file_exists($path)) {
            unlink($path);
        }

        $image->delete();

        return back()->with('success', 'Image deleted');
    }
}
