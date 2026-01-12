<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class AdminProductController extends Controller
{
    // show product list
public function index()
{
    $products = Product::with([
        'categoryRel', // category name ke liye
        'stocks'       // stock (size + quantity) ke liye
    ])
    ->orderBy('id', 'desc')
    ->paginate(10);

    return view('admin.product.index', compact('products'));
}



    // add product form
    public function create()
    
    {
        $categories = Category::orderBy('name')->get();
        return view('admin.product.create', compact('categories'));
    }

//     // store product
//    public function store(Request $request)
// {
//     $request->validate([
//         'name'  => 'required',
//         'price' => 'required|numeric',
//         'desc'  => 'required',
//         'image' => 'required|image|mimes:jpg,jpeg,png,webp',
//     ]);

//     // image name
//     $imageName = time().'.'.$request->image->extension();

//     // destination folder
//     $destination = public_path('products');

//     if (!file_exists($destination)) {
//         mkdir($destination, 0755, true);
//     }

//     // move image
//     $request->image->move($destination, $imageName);

//     // 🔥 FULL IMAGE URL (dynamic)
//     $fullImagePath = url('products') . '/' . $imageName;
//     // example:
//     // http://localhost/ecom/public/products/1767773003.jpg
//     // http://192.168.1.7/ecom/public/products/1767773003.jpg

//     // save in DB
//     Product::create([
//         'name'  => $request->name,
//         'price' => $request->price,
//         'desc'  => $request->desc,
//         'image' => $fullImagePath, // 👈 FULL URL
//     ]);

//     return redirect('/admin/products')->with('success', 'Product Added');
// }
public function store(Request $request)
{
    $request->validate([
        'name'     => 'required|string|max:255',
        'price'    => 'required|numeric|min:0',
        'desc'     => 'required|string',
        'category' => 'required|exists:category,id',
        'image'    => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
    ]);

    // ✅ Image Upload
    $imagePath = $request->file('image')->store('products', 'public');

    // ✅ Product Save
    $product = Product::create([
        'name'     => $request->name,
        'price'    => $request->price,
        'desc'     => $request->desc,
        'category' => $request->category, // category_id
        'image'    => $imagePath,
    ]);

    return redirect()
        ->route('admin.products.index')
        ->with('success', 'Product added successfully. Now add stock.');
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

    // edit product form
    public function edit($id)
    {
        $product = Product::findOrFail($id);
        $categories = Category::orderBy('name')->get();
        return view('admin.product.edit', compact('product', 'categories'));
    }

    // update product
public function update(Request $request, $id)
{
  $request->validate([
    'name' => 'required|string|max:255',
    'price' => 'required|numeric|min:0',
    'description' => 'required|string',
    'size' => 'required|in:S,M,L,XL,XXL,XXXL',
    'category' => 'required|exists:category,id',
    'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
]);


    $product = Product::findOrFail($id);

    $updateData = [
        'name' => $request->name,
        'price' => $request->price,
        'desc' => $request->description,
        'size' => $request->size,
        'category' => $request->category,
    ];

    if ($request->hasFile('image')) {

        if ($product->image && Storage::disk('public')->exists($product->image)) {
            Storage::disk('public')->delete($product->image);
        }

        $updateData['image'] = $request->file('image')->store('products', 'public');
    }

    $product->update($updateData);

    return redirect()->route('admin.products.index')
        ->with('success', 'Product Updated Successfully');
}


























}