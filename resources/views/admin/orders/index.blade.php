@extends('admin.layouts.app')

@section('title', 'Orders')

@section('content')
<div class="container-fluid">

    <h3 class="mb-3">Orders Dashboard</h3>

    <!-- 📊 STATS -->
    <div class="row mb-4">
        <div class="col-md-3">
            <div class="card text-center">
                <div class="card-body">
                    <h6>Total Orders</h6>
                    <h3>{{ $stats['total'] }}</h3>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card text-center text-warning">
                <div class="card-body">
                    <h6>Pending</h6>
                    <h3>{{ $stats['pending'] }}</h3>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card text-center text-success">
                <div class="card-body">
                    <h6>Confirmed</h6>
                    <h3>{{ $stats['confirmed'] }}</h3>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="card text-center text-danger">
                <div class="card-body">
                    <h6>Cancelled</h6>
                    <h3>{{ $stats['cancelled'] }}</h3>
                </div>
            </div>
        </div>
    </div>
<form method="GET" class="row g-2 mb-3">

    <div class="col-md-3">
        <input type="date"
               name="from_date"
               value="{{ request('from_date') }}"
               class="form-control"
               placeholder="From date">
    </div>

    <div class="col-md-3">
        <input type="date"
               name="to_date"
               value="{{ request('to_date') }}"
               class="form-control"
               placeholder="To date">
    </div>

    <div class="col-md-3">
        <select name="status" class="form-control">
            <option value="">All Status</option>
            <option value="pending" {{ request('status')=='pending' ? 'selected' : '' }}>Pending</option>
            <option value="confirmed" {{ request('status')=='confirmed' ? 'selected' : '' }}>Confirmed</option>
            <option value="cancelled" {{ request('status')=='cancelled' ? 'selected' : '' }}>Cancelled</option>
        </select>
    </div>

    <div class="col-md-3">
        <button class="btn btn-primary w-100">
            Filter
        </button>
    </div>

</form>

    <!-- 📦 ORDERS TABLE -->
    <div class="card">
        <div class="card-header">
            <h5 class="mb-0">Orders List</h5>
        </div>

        <div class="card-body table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    @forelse($orders as $order)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>#{{ $order->id }}</td>
                            <td>
                                <span class="badge 
                                    {{ $order->status == 'confirmed' ? 'bg-success' : 
                                       ($order->status == 'pending' ? 'bg-warning' : 'bg-danger') }}">
                                    {{ ucfirst($order->status) }}
                                </span>
                            </td>
                            <td>{{ $order->created_at->format('d M Y, h:i A') }}</td>
                    <td>
    <div class="d-flex gap-2">
        <a href="{{ route('admin.orders.show', $order->id) }}"
           class="btn btn-sm btn-primary">
            View
        </a>

        @if($order->status !== 'cancelled')
            <form action="{{ route('admin.orders.cancel', $order->id) }}"
                  method="POST"
                  onsubmit="return confirm('Are you sure to cancel this order?')">
                @csrf
                <button type="submit" class="btn btn-sm btn-danger">
                    Cancel
                </button>
            </form>
        @endif
    </div>
</td>



                        </tr>
                    @empty
                        <tr>
                            <td colspan="4" class="text-center">No orders found</td>
                        </tr>
                    @endforelse
                    
                </tbody>
            </table>

            {{ $orders->links() }}
        </div>
    </div>

</div>
@endsection
