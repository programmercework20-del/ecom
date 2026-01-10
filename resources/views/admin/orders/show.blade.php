@extends('admin.layouts.app')

@section('title', 'Order Details')

@section('content')
<div class="container-fluid">

    <h4 class="mb-3">Order #{{ $order->id }}</h4>

    <!-- ORDER INFO -->
    <div class="card mb-3">
        <div class="card-body d-flex justify-content-between align-items-center">

            <div>
                <p class="mb-1">
                    <b>Status:</b>
                    <span class="badge 
                        {{ $order->status == 'confirmed' ? 'bg-success' :
                           ($order->status == 'pending' ? 'bg-warning' : 'bg-danger') }}">
                        {{ ucfirst($order->status) }}
                    </span>
                </p>

                <p class="mb-0">
                    <b>Date:</b> {{ $order->created_at->format('d M Y h:i A') }}
                </p>
            </div>

            <!-- 🔥 STATUS UPDATE FORM -->
            @if($order->status !== 'cancelled')
                <form method="POST" action="{{ route('admin.orders.updateStatus', $order->id) }}">
                    @csrf

                    <div class="d-flex gap-2">
                        <select name="status" class="form-select form-select-sm">
                            <option value="pending" {{ $order->status=='pending'?'selected':'' }}>Pending</option>
                            <option value="confirmed" {{ $order->status=='confirmed'?'selected':'' }}>Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>

                        <button class="btn btn-sm btn-primary">
                            Update
                        </button>
                    </div>
                </form>
            @endif

        </div>
    </div>

    <!-- ORDER ITEMS -->
    <div class="card mb-3">
        <div class="card-header">
            <h5 class="mb-0">Order Items</h5>
        </div>

        <div class="card-body table-responsive">
            <table class="table table-bordered align-middle">
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Product</th>
                        <th>Size</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($order->items as $item)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $item->product->name ?? 'N/A' }}</td>
                            <td>{{ $item->size }}</td>
                            <td>{{ $item->quantity }}</td>
                            <td>₹{{ number_format($item->price, 2) }}</td>
                            <td>
                                ₹{{ number_format($item->quantity * $item->price, 2) }}
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>

    <a href="{{ route('admin.orders.index') }}" class="btn btn-secondary">
        Back to Orders
    </a>

</div>
@endsection
