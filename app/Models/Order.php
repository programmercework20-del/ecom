<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
  

     const PENDING   = 'pending';
    const CONFIRMED = 'confirmed';
    const CANCELLED = 'cancelled';

    protected $fillable = [
        'status'
    ];

    public function items()
    {
        return $this->hasMany(OrderItem::class, 'order_id');
    }

}
