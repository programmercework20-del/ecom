import React, { useState, useMemo } from "react";
import {
  FaEye,
  FaEdit,
  FaCheckCircle,
  FaTimesCircle,
  FaBox,
  FaClock,
  FaShoppingCart,
  FaSort,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

const AdminOrders = () => {
  // Dummy data (replace with API later)
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: "ORD1234",
      date: "2025-08-20",
      customer: { name: "John Doe", email: "john@example.com", phone: "1234567890" },
      shippingAddress: "123 Main St, New York",
      items: [
        { name: "Laptop", quantity: 1, price: 800 },
        { name: "Mouse", quantity: 2, price: 20 },
      ],
      subtotal: 840,
      tax: 20,
      shipping: 10,
      total: 870,
      status: "pending",
    },
    {
      id: 2,
      orderNumber: "ORD5678",
      date: "2025-08-22",
      customer: { name: "Jane Smith", email: "jane@example.com", phone: "9876543210" },
      shippingAddress: "456 Park Ave, California",
      items: [{ name: "Phone", quantity: 1, price: 500 }],
      subtotal: 500,
      tax: 25,
      shipping: 15,
      total: 540,
      status: "completed",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  // Status options
  const statusOptions = [
    { value: "pending", label: "Pending", icon: FaClock, color: "text-yellow-600" },
    { value: "completed", label: "Completed", icon: FaCheckCircle, color: "text-green-600" },
    { value: "cancelled", label: "Cancelled", icon: FaTimesCircle, color: "text-red-600" },
    { value: "shipped", label: "Shipped", icon: FaBox, color: "text-blue-600" },
  ];

  // Filter + Search + Sort
  const filteredAndSortedOrders = useMemo(() => {
    let data = [...orders];

    if (searchTerm) {
      data = data.filter(
        (order) =>
          order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.customer.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus !== "all") {
      data = data.filter((order) => order.status === filterStatus);
    }

    if (sortOrder === "latest") {
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return data;
  }, [orders, searchTerm, filterStatus, sortOrder]);

  // Status update handler
  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order))
    );
    setShowStatusModal(false);
  };

  return (
    <div className="p-6  min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Orders Management</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <div className="relative flex-1">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by order number or customer..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring focus:ring-blue-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter by status */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300"
        >
          <option value="all">All Statuses</option>
          {statusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {/* Sort */}
        <button
          onClick={() => setSortOrder(sortOrder === "latest" ? "oldest" : "latest")}
          className="px-4 py-2 flex items-center gap-2 rounded-lg border border-gray-300"
        >
          <FaSort /> {sortOrder === "latest" ? "Latest First" : "Oldest First"}
        </button>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="px-4 py-2 text-left">Order</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Total</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedOrders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="px-4 py-2 font-medium">{order.orderNumber}</td>
                <td className="px-4 py-2">{order.customer.name}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">${order.total}</td>
                <td className="px-4 py-2 capitalize">{order.status}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setShowOrderModal(true);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setShowStatusModal(true);
                    }}
                    className="text-green-600 hover:text-green-800"
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {filteredAndSortedOrders.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <FaShoppingCart className="mx-auto mb-3 w-10 h-10 opacity-50" />
            <p>No orders found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* ================= ORDER DETAILS MODAL ================= */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 relative">
            <button
              onClick={() => setShowOrderModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold mb-4">Order {selectedOrder.orderNumber}</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Customer Info</h3>
                <p>{selectedOrder.customer.name}</p>
                <p className="text-sm text-gray-500">{selectedOrder.customer.email}</p>
                <p className="text-sm text-gray-500">{selectedOrder.customer.phone}</p>
              </div>

              <div>
                <h3 className="font-semibold">Shipping Address</h3>
                <p className="text-sm">{selectedOrder.shippingAddress}</p>
              </div>

              <div>
                <h3 className="font-semibold">Items</h3>
                <ul className="divide-y divide-gray-200">
                  {selectedOrder.items.map((item, i) => (
                    <li key={i} className="flex justify-between py-2">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>${item.price * item.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>${selectedOrder.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax:</span>
                  <span>${selectedOrder.tax}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping:</span>
                  <span>${selectedOrder.shipping}</span>
                </div>
                <div className="flex justify-between font-bold mt-2">
                  <span>Total:</span>
                  <span>${selectedOrder.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= STATUS UPDATE MODAL ================= */}
      {showStatusModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowStatusModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>

            <h2 className="text-xl font-bold mb-4">Update Status</h2>
            <div className="space-y-3">
              {statusOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleStatusUpdate(selectedOrder.id, option.value)}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50 ${
                      selectedOrder.status === option.value
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${option.color}`} />
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
