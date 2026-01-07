<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductImage;

class ProductImageController extends Controller
{
    // 🔹 Store multiple images for a product
   public function store(Request $request)
{
    $request->validate([
        'product_id' => 'required|exists:products,id',
        'images'     => 'required',
        'images.*'   => 'image|mimes:jpg,jpeg,png,webp'
    ]);

    // 🔹 base url (dynamic)
    $baseUrl = url('products/gallery'); 
    // example: http://localhost/ecom/public/products/gallery

    foreach ($request->images as $img) {

        $imageName = time().'_'.$img->getClientOriginalName();

        // move image
        $img->move(public_path('products/gallery'), $imageName);

        // 🔥 FULL IMAGE PATH
        $fullImagePath = $baseUrl . '/' . $imageName;

        ProductImage::create([
            'product_id' => $request->product_id,
            'image' => $fullImagePath   // 👈 FULL URL saved
        ]);
    }

    return response()->json([
        'status' => true,
        'message' => 'Product images uploaded successfully'
    ]);
}


    // 🔹 Get images of a product (for detail page)
   // 🔹 Get product images with MAIN product id
public function show($productId)
{
    $images = ProductImage::where('product_id', $productId)
        ->get()
        ->map(function ($img) {
            return [
                'id' => $img->id,
                'image' => $img->image, // already full URL
            ];
        });

    return response()->json([
        'status' => true,
        'product_id' => (int) $productId,
        'images' => $images
    ]);
}



    // 🔹 Delete single image
    public function destroy($id)
    {
        $image = ProductImage::findOrFail($id);

        $path = public_path('products/gallery/' . $image->image);
        if (file_exists($path)) {
            unlink($path);
        }

        $image->delete();

        return response()->json([
            'status' => true,
            'message' => 'Image deleted'
        ]);
    }
    public function index($id)
{
    $product = Product::with('images')->findOrFail($id);
    return view('admin.product.images', compact('product'));
}

}
