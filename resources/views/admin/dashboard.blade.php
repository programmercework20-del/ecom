@extends('admin.layouts.app')

@section('title', 'Admin Dashboard')

@section('content')

{{-- Page Header --}}
<div class="app-content-header">
    <div class="container-fluid">
        <h3 class="mb-3">Admin Dashboard</h3>
    </div>
</div>

<div class="app-content">
    <div class="container-fluid">

        {{-- SUMMARY BOXES --}}
        <div class="row">

            <div class="col-lg-3 col-6">
                <div class="small-box text-bg-primary">
                    <div class="inner">
                        <h3>{{ $totalProducts }}</h3>
                        <p>Total Products</p>
                    </div>
                    <div class="icon">
                        <i class="bi bi-box"></i>
                    </div>
                    <a href="/admin/products" class="small-box-footer">
                        View Products <i class="bi bi-arrow-right-circle"></i>
                    </a>
                </div>
            </div>

        </div>

        {{-- ACTION BUTTONS --}}
        <div class="mb-4">
            <a href="/admin/products" class="btn btn-outline-primary me-2">
                <i class="bi bi-list"></i> View All Products
            </a>

            <a href="/admin/products/create" class="btn btn-primary">
                <i class="bi bi-plus-circle"></i> Add New Product
            </a>
        </div>

        {{-- LATEST PRODUCTS TABLE --}}
        <!--  -->

    </div>
</div>

@endsection
