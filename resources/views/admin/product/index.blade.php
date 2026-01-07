@extends('admin.layouts.app')

@section('title', 'Products')

@section('content')
<div class="container-fluid">

    <!-- Page Header -->
    <div class="row mb-3">
        <div class="col-sm-6">
            <h3 class="mb-0">Products</h3>
        </div>
        <div class="col-sm-6">
            <ol class="breadcrumb float-sm-end">
                <li class="breadcrumb-item">
                    <a href="{{ route('admin.dashboard') }}">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Products</li>
            </ol>
        </div>
    </div>

    <!-- Success Message -->
    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <!-- Card -->
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h3 class="card-title">Product List</h3>

            <a href="{{ route('admin.products.create') }}" class="btn btn-primary btn-sm">
                <i class="bi bi-plus-lg"></i> Add Product
            </a>
        </div>

        <div class="card-body table-responsive">
            <table class="table table-bordered table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th width="60">Sr.no</th>
                        <th>Name</th>
                        <th width="120">Price</th>
                        <th>Description</th>
                        <th width="120">Image</th>
                        <th width="180">Action</th>
                    </tr>
                </thead>

                <tbody>
                    @forelse($products as $p)
                        <tr>
                            <td>{{ $products->firstItem() + $loop->index }}</td>

                            <td>{{ $p->name }}</td>
                            <td>₹ {{ number_format($p->price, 2) }}</td>
                            <td>{{ $p->desc }}</td>

                            <td>
                              <img src="{{ Str::startsWith($p->image, 'http') ? $p->image : asset('products/'.$p->image) }}"
     width="80">

                            </td>

                            <td>
                                <!-- ✅ MANAGE IMAGES BUTTON (FIXED) -->
                        <a href="{{ route('admin.products.images', $p->id) }}"
                class="btn btn-sm btn-primary">
                Manage Images
                </a>



                                <!-- DELETE -->
                                <form action="{{ route('admin.products.destroy', $p->id) }}"
                                      method="POST"
                                      style="display:inline;">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit"
                                            class="btn btn-sm btn-danger"
                                            onclick="return confirm('Are you sure you want to delete this product?')">
                                        Delete
                                    </button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="6" class="text-center text-muted">
                                No products found
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>

            <!-- Pagination -->
            <div class="mt-3">
                {{ $products->links() }}
            </div>
        </div>
    </div>

</div>
@endsection
