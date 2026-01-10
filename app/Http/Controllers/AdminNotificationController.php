<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdminNotification;

class AdminNotificationController extends Controller
{
    public function read($id)
    {
        $notification = AdminNotification::findOrFail($id);

        // mark as read
        $notification->update([
            'is_read' => 1
        ]);

        // order detail page pe redirect
        return redirect()->route(
            'admin.orders.show',
            $notification->order_id
        );
    }

}
