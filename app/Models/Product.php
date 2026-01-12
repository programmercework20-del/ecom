<?php

namespace App\Models;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'product';
    public $timestamps = false;

    protected $fillable = [
        'name',
        'price',
        'desc',
        'image',
        'category',
        'size',
    ];

  // Product.php
public function categoryRel()
{
    return $this->belongsTo(
       Category::class,
        'category',   // product table column
        'id'          // category table PK
    );
}

public function stocks()
{
    return $this->hasMany(Stock::class, 'product_id');
}

   public function images()
    {
        return $this->hasMany(ProductImage::class, 'product_id');
    }
}


