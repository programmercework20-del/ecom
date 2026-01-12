<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    // add category 
    public function create()
    {
        // return view('admin.category.create');
        $categories = Category::all();
        return view('admin.category.create', compact('categories'));
    
    }
    public function store(Request $request)
    {
        $request->validate([
            'name'  => 'required',
        ]);

        // save in DB
        Category::create([
            'name'  => $request->name,
        ]);

        return redirect()->back()->with('success', 'Category added successfully.');
    }

    // delete category
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return redirect()->back()->with('success', 'Category deleted successfully.');   
    }
    


}
