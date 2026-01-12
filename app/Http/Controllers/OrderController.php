<?php

namespace App\Http\Controllers;

use App\Models\AdminNotification;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Stock;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function index(Request $request)
{
    $query = Order::query();

    // 📅 From date
    if ($request->filled('from_date')) {
        $query->whereDate('created_at', '>=', $request->from_date);
    }

    // 📅 To date
    if ($request->filled('to_date')) {
        $query->whereDate('created_at', '<=', $request->to_date);
    }

    // 🔄 Status filter
    if ($request->filled('status')) {
        $query->where('status', $request->status);
    }

    // 📦 Orders
    $orders = $query->latest()->paginate(10)->withQueryString();

    // 📊 Stats (filtered nahi, overall)
    $stats = [
        'total'     => Order::count(),
        'pending'   => Order::where('status', Order::PENDING)->count(),
        'confirmed' => Order::where('status', Order::CONFIRMED)->count(),
        'cancelled' => Order::where('status', Order::CANCELLED)->count(),
    ];

    return view('admin.orders.index', compact('orders', 'stats'));
}


    public function show($id)
{
    $order = Order::with(['items.product'])->findOrFail($id);

    return view('admin.orders.show', compact('order'));
}

// Cancel order
public function cancel($id)
{
    DB::beginTransaction();

    try {
        $order = Order::with('items')->findOrFail($id);

        if ($order->status === Order::CANCELLED) {
            return back()->with('error', 'Order already cancelled');
        }

        foreach ($order->items as $item) {
            Stock::where('product_id', $item->product_id)
                ->where('product_size', $item->size)
                ->increment('product_quantity', $item->quantity);
        }

        $order->update([
            'status' => Order::CANCELLED
        ]);

        DB::commit();

        return back()->with('success', 'Order cancelled & stock restored');

    } catch (\Exception $e) {
        DB::rollBack();
        return back()->with('error', $e->getMessage());
    }
}

public function updateStatus(Request $request, $id)
{
    $request->validate([
        'status' => 'required|in:pending,confirmed,cancelled'
    ]);

    DB::beginTransaction();

    try {
        $order = Order::with('items')->findOrFail($id);

        // ❌ Already cancelled → stop
        if ($order->status == 'cancelled') {
            return back()->with('error', 'Order already cancelled');
        }

        // 🔁 If cancelling → RESTORE STOCK
        if ($request->status == 'cancelled') {

            foreach ($order->items as $item) {
                Stock::where('product_id', $item->product_id)
                    ->where('product_size', $item->size)
                    ->increment('product_quantity', $item->quantity);
            }
        }

        $order->status = $request->status;
        $order->save();

        DB::commit();

        return back()->with('success', 'Order status updated successfully');

    } catch (\Exception $e) {
        DB::rollBack();

        return back()->with('error', $e->getMessage());
    }
}




















































}
