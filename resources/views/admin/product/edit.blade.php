@extends('admin.layouts.app')

@section('title', 'Edit Product')

@section('content')
<div class="container-fluid">

    <!-- Page Header -->
    <div class="row mb-3">
        <div class="col-sm-6">
            <h3 class="mb-0">Edit Product</h3>
        </div>

          @if(session('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @endif

        <div class="col-sm-6">
            <ol class="breadcrumb
    float-sm-end">
                    <li class="breadcrumb-item"><a href="{{ route('admin.dashboard') }}">Dashboard</a></li>
                    <li class="breadcrumb
-item active">Edit Product</li>
            </ol>
        </div>
    </div>
    <!-- Card -->
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Edit Product Information</h3>
        </div>

      <form method="POST" action="{{ route('admin.products.update', $product->id) }}" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" name="name" value="{{ $product->name }}" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" class="form-control" id="price" name="price" value="{{ $product->price }}" required>
                        </div>
                    </div>
                </div>
              <div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label for="category">Category</label>

            <select class="form-control" id="category" name="category" required>
                <option value="">Select Category</option>

                @foreach($categories as $cat)
                    <option value="{{ $cat->id }}"
                        {{ (old('category', $product->category) == $cat->id) ? 'selected' : '' }}>
                        {{ $cat->name }}
                    </option>
                @endforeach
            </select>

        </div>
    </div>
</div>

                    <div class="col-md-6">
                        <div class="form-group">
    <label>Size</label>
    <select name="size" class="form-control" required>
        <option value="">Select Size</option>
        @foreach(['S', 'M', 'L', 'XL', 'XXL', 'XXXL'] as $size)
            <option value="{{ $size }}" @if(old('size', $product->size) == $size) selected @endif>
                {{ $size }}
            </option>
        @endforeach
    </select>
</div>
                    </div>
                </div>
               
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" id="description" name="description" rows="3" required>{{ $product->desc }}</textarea>
                        </div>
                    </div>
                   <div class="col-md-6">
    <div class="form-group">
        <label for="image">Current Image</label>
        
        <!-- Show current image -->
        @php
            $imageUrl = $product->image ? asset('storage/' . $product->image) : asset('images/placeholder.jpg');
        @endphp
        
        <div class="mb-3 text-center">
            <img src="{{ $imageUrl }}" 
                 width="150" 
                 height="150"
                 style="object-fit: cover; border: 1px solid #ddd; padding: 5px; border-radius: 5px;"
                 alt="Product Image"
                 data-fallback="{{ asset('images/placeholder.jpg') }}"
             onerror="this.src = this.dataset.fallback;">
            <div class="mt-1">
                <small class="text-muted">
                    @if($product->image && Storage::disk('public')->exists($product->image))
                        Current product image
                    @else
                        No image uploaded
                    @endif
                </small>
            </div>
        </div>
        
        <!-- Image upload field -->
        <label for="image" class="mt-2">Change Image (Optional)</label>
        <input type="file" 
               class="form-control" 
               id="image" 
               name="image"
               accept="image/*">
        
        <small class="text-muted">
            Leave empty to keep current image. Allowed: JPG, JPEG, PNG, WEBP (Max: 2MB)
        </small>
    </div>
</div>
                </div>
            </div>
            <div class="card-footer text-end">
                <button type="submit" class="btn btn-primary">Update Product</button>
            </div>
        </form>
    </div>
</div>


@endsection