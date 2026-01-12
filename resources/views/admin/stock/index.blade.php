@extends('admin.layouts.app')

@section('title', 'Stock Management')

@section('content')

<div class="container-fluid">

    <h3 class="mb-3">Stock Management</h3>

    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <!-- ADD / UPDATE STOCK -->
    <div class="card mb-4">
        <div class="card-header">Add / Update Stock</div>

        <form method="POST" action="{{ route('admin.stock.store') }}">
            @csrf

            <div class="card-body row">

                <div class="col-md-4">
                    <label>Product</label>
                    <select name="product_id" class="form-control" required>
                        <option value="">Select Product</option>
                        @foreach($products as $p)
                            <option value="{{ $p->id }}">{{ $p->name }}</option>
                        @endforeach
                    </select>
                </div>

                <div class="col-md-3">
                    <label>Size</label>
                    <select name="product_size" class="form-control" required>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>XXXL</option>
                    </select>
                    


                </div>

                <div class="col-md-3">
                    <label>Quantity</label>
                    <input type="number" name="product_quantity" min="1" class="form-control" required>
                </div>

                <div class="col-md-2 d-flex align-items-end">
                    <button class="btn btn-primary w-100">
                        Save
                    </button>
                </div>

            </div>
        </form>
    </div>

    <!-- STOCK LIST -->
    <div class="card">
        <div class="card-header">Current Stock</div>

        <div class="card-body p-0">
            <table class="table table-bordered mb-0">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($stocks as $stock)
                        <tr>
                            <td>{{ $stock->product->name ?? 'Deleted Product' }}</td>
                            <td>{{ $stock->product_size }}</td>
                            <td>{{ $stock->product_quantity }}</td>
                            <td>
                                <form action="{{ route('admin.stock.destroy', $stock->id) }}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

    </div>

</div>

@endsection
