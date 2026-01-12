
@extends('admin.layouts.app')

@section('title', 'Add Category')

@section('content')
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow-lg border-0">

                   @if(session('success'))
                        <div class="alert alert-success">
                            {{ session('success') }}
                        </div>
                    @endif


                    <div class="card-header bg-gradient bg-primary text-white">
                        <h4 class="mb-0"><i class="fas fa-folder-plus"></i> Add New Category</h4>
                    </div>
                    <div class="card-body p-4">
                        <form action="{{ route('admin.category.store') }}" method="POST">
                            @csrf
                            <div class="form-group mb-4">
                                <label for="name" class="form-label fw-bold">Category Name</label>
                                <input type="text" class="form-control form-control-lg" id="name" name="name" placeholder="Enter category name" required>
                            </div>
                            <div class="d-flex gap-2">
                                <button type="submit" class="btn btn-primary btn-lg flex-grow-1">
                                    <i class="fas fa-save"></i> Save Category
                                </button>
                                <a href="#" class="btn btn-secondary btn-lg">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center mt-5">
            <div class="col-md-8">
                <div class="card shadow-lg border-0">
                    <div class="card-header bg-gradient bg-info text-white">
                        <h4 class="mb-0"><i class="fas fa-list"></i> Categories List</h4>
                    </div>
                    <div class="card-body p-4">
                        <table class="table table-striped table-hover">
                            <thead class="table-dark">
                                <tr>
                                    <th>Sr No</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse($categories as $key => $category)
                                    <tr>
                                        <td>{{ $key + 1 }}</td>
                                        <td>{{ $category->name }}</td>
                                        <td>
                                            <form action="{{ route('admin.category.destroy', $category->id) }}" method="POST" style="display:inline;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure?')">
                                                    <i class="fas fa-trash"></i> Delete
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="3" class="text-center">No categories found</td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection