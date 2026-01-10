@extends('admin.layouts.app')

@section('title', 'Add Product')

@section('content')
<div class="container-fluid">

    <!-- Header -->
    <div class="row mb-3">
        <div class="col-sm-6">
            <h3>Add Product</h3>
        </div>
        <div class="col-sm-6">
            <ol class="breadcrumb float-sm-end">
                <li class="breadcrumb-item">
                    <a href="{{ route('admin.dashboard') }}">Dashboard</a>
                </li>
                <li class="breadcrumb-item active">Add Product</li>
            </ol>
        </div>
    </div>

    <!-- Card -->
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Product Information</h3>
        </div>

        <form method="POST"
              action="{{ route('admin.products.store') }}"
              enctype="multipart/form-data">
            @csrf

            <div class="card-body">

                <!-- Errors -->
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul class="mb-0">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                <!-- Name -->
                <div class="mb-3">
                    <label class="form-label">Product Name *</label>
                    <input type="text"
                           name="name"
                           value="{{ old('name') }}"
                           class="form-control"
                           required>
                </div>

                <!-- Price -->
                <div class="mb-3">
                    <label class="form-label">Price *</label>
                    <input type="number"
                           step="0.01"
                           name="price"
                           value="{{ old('price') }}"
                           class="form-control"
                           required>
                </div>

                <!-- Description -->
                <div class="mb-3">
                    <label class="form-label">Description *</label>
                    <textarea name="desc"
                              rows="3"
                              class="form-control"
                              required>{{ old('desc') }}</textarea>
                </div>

                <!-- Category -->
                <div class="mb-3">
                    <label class="form-label">Category *</label>
                    <select name="category" class="form-control" required>
                        <option value="">Select Category</option>
                        @foreach($categories as $category)
                            <option value="{{ $category->id }}"
                                {{ old('category') == $category->id ? 'selected' : '' }}>
                                {{ $category->name }}
                            </option>
                        @endforeach
                    </select>
                </div>

                <!-- Image -->
                <div class="mb-3">
                    <label class="form-label">Product Image *</label>
                    <input type="file"
                           name="image"
                           class="form-control"
                           required>
                    <small class="text-muted">
                        JPG, JPEG, PNG, WEBP allowed
                    </small>
                </div>

            </div>

            <div class="card-footer">
                <button class="btn btn-primary">
                    Save Product
                </button>
                <a href="{{ route('admin.products.index') }}"
                   class="btn btn-secondary">
                    Cancel
                </a>
            </div>
        </form>
    </div>

</div>
@endsection
