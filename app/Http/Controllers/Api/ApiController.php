<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\Product;
use App\Models\Stock;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\AdminNotification;

class ApiController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | 1️⃣ PRODUCT LIST
    |--------------------------------------------------------------------------
    */
 public function index()
{
    $products = Product::with('stocks:id,product_id,product_size,product_quantity')
        ->orderBy('id', 'desc')
        ->get();

    return response()->json([
        'status' => true,
        'data' => $products
    ]);
}


    /*
    |--------------------------------------------------------------------------
    | 2️⃣ SINGLE PRODUCT (DETAIL PAGE)
    |--------------------------------------------------------------------------
    */
    public function show($id)
    {
        $product = Product::with('stocks')->find($id);

        if (!$product) {
            return response()->json([
                'status'  => false,
                'message' => 'Product not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'data'   => $product
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | 3️⃣ PRODUCT STOCK (SIZE + AVAILABLE QTY)
    |--------------------------------------------------------------------------
    */
    public function productStock($productId)
    {
        $stock = Stock::where('product_id', $productId)
            ->where('product_quantity', '>', 0)
            ->get();

        return response()->json([
            'status' => true,
            'data'   => $stock
        ]);
    }

    /*
    |--------------------------------------------------------------------------
    | 4️⃣ PLACE ORDER (STOCK MINUS)
    |--------------------------------------------------------------------------
    | Payload:
    | {
    |   "items": [
    |     { "product_id": 1, "size": "M", "quantity": 2 }
    |   ]
    |--------------------------------------------------------------------------
    */

public function placeOrder(Request $request)
{
    $request->validate([
        'items'              => 'required|array|min:1',
        'items.*.product_id' => 'required|integer',
        'items.*.size'       => 'required|in:S,M,L,XL,XXL,XXXL',
        'items.*.quantity'   => 'required|integer|min:1',
    ]);

    DB::beginTransaction();

    try {

        // 1️⃣ CREATE ORDER
        $order = Order::create([
            'status' => Order::CONFIRMED
        ]);

        foreach ($request->items as $item) {

            // 2️⃣ LOCK STOCK
            $stock = Stock::where('product_id', $item['product_id'])
                ->where('product_size', $item['size'])
                ->lockForUpdate()
                ->first();

            if (!$stock) {
                throw new \Exception('Stock not found');
            }

            if ($stock->product_quantity < $item['quantity']) {
                throw new \Exception('Insufficient stock');
            }

            // 3️⃣ CREATE ORDER ITEM
            OrderItem::create([
                'order_id'   => $order->id,
                'product_id' => $item['product_id'],
                'size'       => $item['size'],
                'quantity'   => $item['quantity'],
                'price'      => $item['price'] ?? 0,
            ]);

            // 4️⃣ MINUS STOCK
            $stock->decrement('product_quantity', $item['quantity']);
        }

        // 🔔 5️⃣ ADMIN NOTIFICATION (ADD THIS)
        AdminNotification::create([
            'type'     => 'order',
            'title'    => 'New Order Received',
            'message'  => 'New order #' . $order->id . ' has been placed',
            'order_id' => $order->id,
            'is_read'  => 0
        ]);

        DB::commit();

        return response()->json([
            'status'   => true,
            'message'  => 'Order placed successfully',
            'order_id' => $order->id
        ]);

    } catch (\Exception $e) {

        DB::rollBack();

        return response()->json([
            'status'  => false,
            'message' => $e->getMessage()
        ], 400);
    }
}





public function cancelOrder($id)
{
    DB::beginTransaction();

    try {

        $order = Order::with('items')->findOrFail($id);

        if ($order->status == Order::CANCELLED) {
            return response()->json([
                'status' => false,
                'message' => 'Order already cancelled'
            ], 400);
        }

        foreach ($order->items as $item) {
            Stock::where('product_id', $item->product_id)
                ->where('product_size', $item->size)
                ->increment('product_quantity', $item->quantity);
        }

        $order->update(['status' => Order::CANCELLED]);

        DB::commit();

        return response()->json([
            'status' => true,
            'message' => 'Order cancelled & stock restored'
        ]);

    } catch (\Exception $e) {

        DB::rollBack();

        return response()->json([
            'status' => false,
            'message' => $e->getMessage()
        ], 400);
    }
}


    /*
    |--------------------------------------------------------------------------
    | 6️⃣ ORDER LIST (ADMIN / FUTURE)
    |--------------------------------------------------------------------------
    */
    public function orders()
    {
        $orders = Order::with('items')
            ->orderBy('id', 'desc')
            ->get();

        return response()->json([
            'status' => true,
            'data'   => $orders
        ]);
    }
}
