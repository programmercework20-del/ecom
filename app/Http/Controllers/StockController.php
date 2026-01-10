<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Stock;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class StockController extends Controller
{
    // Show stock page
    public function index()
    {
        $products = Product::all();
        $stocks = Stock::with('product')->get();

        return view('admin.stock.index', compact('products', 'stocks'));
    }

    // Add / Update stock
  
    public function store(Request $request)
{
    $request->validate([
        'product_id'       => 'required|integer',
        'product_size'     => 'required|in:S,M,L,XL,XXL,XXXL',
        'product_quantity' => 'required|integer|min:1',
    ]);

    DB::transaction(function () use ($request) {

        $stock = Stock::where('product_id', $request->product_id)
            ->where('product_size', $request->product_size)
            ->lockForUpdate()
            ->first();

        if ($stock) {
            // ✅ UPDATE quantity
            $stock->increment('product_quantity', $request->product_quantity);
        } else {
            // ✅ INSERT new stock
            Stock::create([
                'product_id'       => $request->product_id,
                'product_size'     => $request->product_size,
                'product_quantity' => $request->product_quantity,
            ]);
        }
    });

    return back()->with('success', 'Stock updated successfully');
}




   





    public function destroy($id)
    {
        $stock = Stock::findOrFail($id);
        $stock->delete();

        return redirect()->back()->with('success', 'Stock entry deleted successfully');
    }































}
