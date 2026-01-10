<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
   protected $table = 'stock';
    public $timestamps = false;

    protected $fillable = [
        'product_id',
        'product_quantity',
        'product_size',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

}
