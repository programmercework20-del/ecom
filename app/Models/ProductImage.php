<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    // table name (kyunki singular hai)
    protected $table = 'product_image';

    protected $fillable = [
        'product_id',
        'image'
    ];

    // relation with product
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
