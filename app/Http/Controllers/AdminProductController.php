<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class AdminProductController extends Controller
{
    // show product list
  public function index()
{
    $products = Product::orderBy('id', 'desc')->paginate(10);

    return view('admin.product.index', compact('products'));
}


    // add product form
    public function create()
    {
        return view('admin.product.create');
    }

    // store product
   public function store(Request $request)
{
    $request->validate([
        'name'  => 'required',
        'price' => 'required|numeric',
        'desc'  => 'required',
        'image' => 'required|image|mimes:jpg,jpeg,png,webp',
    ]);

    // image name
    $imageName = time().'.'.$request->image->extension();

    // destination folder (public/products)
    $destination = public_path('products');

    // create folder if not exists
    if (!file_exists($destination)) {
        mkdir($destination, 0755, true);
    }

    // move image
    $request->image->move($destination, $imageName);

    // save in DB
    Product::create([
        'name'  => $request->name,
        'price' => $request->price,
        'desc'  => $request->desc,
        'image' => $imageName,
    ]);

    return redirect('/admin/products')->with('success', 'Product Added');
}

public function destroy($id)
{
    $product = Product::findOrFail($id);

    // delete image file
    $imagePath = public_path('products/' . $product->image);
    if (file_exists($imagePath)) {
        unlink($imagePath);
    }

    // delete product from DB
    $product->delete();

    return redirect('/admin/products')->with('success', 'Product Deleted'); 

}



}