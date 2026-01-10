
@extends('admin.layouts.app')
@section('title', 'Manage Product Images')
@section('content')
<div class="container">

    <h4>Manage Images : {{ $product->name }}</h4>

    {{-- Upload form --}}
   <form method="POST"
      action="{{ route('admin.products.images.store', $product->id) }}"
      enctype="multipart/form-data">
    @csrf

    <input type="file" name="images[]" multiple required>

    <button type="submit" class="btn btn-primary mt-2">
        Upload Images
    </button>
</form>

    <hr>

    {{-- Existing images --}}
    <div class="row">
        @foreach($product->images as $img)
            <div class="col-md-3 text-center">
                <img src="{{ Str::startsWith($img->image, 'http') ? $img->image : asset('products/gallery/'.$img->image) }}"
     class="img-thumbnail"
     style="height:150px">


              <form method="POST"
      action="{{ route('admin.products.images.destroy', $img->id) }}"
      onsubmit="return confirm('Delete this image?')">
    @csrf
    @method('DELETE')

    <button type="submit" class="btn btn-danger btn-sm mt-2">
        Delete
    </button>
</form>

            </div>
        @endforeach
    </div>

</div>
@endsection
