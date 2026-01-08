// // src/pages/AdminUsers.jsx
// import React, { useState, useEffect } from "react";
// import { 
//   FaPlusCircle, 
//   FaEdit, 
//   FaTrash, 
//   FaSearch, 
//   FaEye, 
//   FaTimes,
//   FaUsers,
//   FaUserShield,
//   FaUserCheck,
//   FaUserTimes,
//   FaCalendarAlt,
//   FaEnvelope,
//   FaFilter,
//   FaDownload,
//   FaSort
// } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminUsers = () => {
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "Jane Smith",
//       email: "jane@example.com",
//       role: "Admin",
//       status: "Active",
//       createdAt: "2024-01-15",
//       lastLogin: "2024-03-01",
//       phone: "+1 234-567-8901",
//       department: "Engineering"
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       email: "john@example.com",
//       role: "User",
//       status: "Active",
//       createdAt: "2024-02-10",
//       lastLogin: "2024-02-28",
//       phone: "+1 234-567-8902",
//       department: "Marketing"
//     },
//     {
//       id: 3,
//       name: "Alice Johnson",
//       email: "alice@example.com",
//       role: "Moderator",
//       status: "Inactive",
//       createdAt: "2024-01-20",
//       lastLogin: "2024-01-25",
//       phone: "+1 234-567-8903",
//       department: "Support"
//     },
//   ]);

//   const [filteredUsers, setFilteredUsers] = useState(users);
//   const [showModal, setShowModal] = useState(false);
//   const [showViewModal, setShowViewModal] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);
//   const [viewingUser, setViewingUser] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [roleFilter, setRoleFilter] = useState("All");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [sortBy, setSortBy] = useState("name");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "User",
//     status: "Active",
//     phone: "",
//     department: ""
//   });
//   const [formErrors, setFormErrors] = useState({});

//   // Filter and sort users
//   useEffect(() => {
//     let filtered = users.filter((user) => {
//       const matchesSearch = 
//         user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.department.toLowerCase().includes(searchTerm.toLowerCase());
      
//       const matchesRole = roleFilter === "All" || user.role === roleFilter;
//       const matchesStatus = statusFilter === "All" || user.status === statusFilter;
      
//       return matchesSearch && matchesRole && matchesStatus;
//     });

//     // Sort users
//     filtered.sort((a, b) => {
//       let aValue = a[sortBy];
//       let bValue = b[sortBy];
      
//       if (sortBy === "createdAt" || sortBy === "lastLogin") {
//         aValue = new Date(aValue === "Never" ? "1970-01-01" : aValue);
//         bValue = new Date(bValue === "Never" ? "1970-01-01" : bValue);
//       }
      
//       if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
//       if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
//       return 0;
//     });

//     setFilteredUsers(filtered);
//   }, [users, searchTerm, roleFilter, statusFilter, sortBy, sortOrder]);

//   // Form validation
//   const validateForm = () => {
//     const errors = {};
    
//     if (!formData.name.trim()) {
//       errors.name = "Name is required";
//     } else if (formData.name.trim().length < 2) {
//       errors.name = "Name must be at least 2 characters";
//     }
    
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!emailRegex.test(formData.email)) {
//       errors.email = "Please enter a valid email";
//     }
    
//     if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[-\s]/g, ""))) {
//       errors.phone = "Please enter a valid phone number";
//     }
    
//     // Check for duplicate email
//     const existingUser = users.find(u => u.email === formData.email && u.id !== editingUser?.id);
//     if (existingUser) {
//       errors.email = "Email already exists";
//     }
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
    
//     // Clear error for this field
//     if (formErrors[name]) {
//       setFormErrors({ ...formErrors, [name]: "" });
//     }
//   };

//   // Open modal for add or update
//   const openModal = (user = null) => {
//     if (user) {
//       setEditingUser(user);
//       setFormData({
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         status: user.status,
//         phone: user.phone || "",
//         department: user.department || ""
//       });
//     } else {
//       setEditingUser(null);
//       setFormData({ 
//         name: "", 
//         email: "", 
//         role: "User", 
//         status: "Active", 
//         phone: "",
//         department: ""
//       });
//     }
//     setFormErrors({});
//     setShowModal(true);
//   };

//   // Save user (add or update)
//   const handleSave = () => {
//     if (!validateForm()) {
//       toast.error("Please fix the form errors");
//       return;
//     }

//     if (editingUser) {
//       // Update user
//       setUsers(
//         users.map((u) =>
//           u.id === editingUser.id ? { ...u, ...formData } : u
//         )
//       );
//       toast.info("User updated successfully!");
//     } else {
//       // Add user
//       const newUser = {
//         id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
//         ...formData,
//         createdAt: new Date().toISOString().split("T")[0],
//         lastLogin: "Never",
//       };
//       setUsers([...users, newUser]);
//       toast.success("User added successfully!");
//     }

//     setShowModal(false);
//     setEditingUser(null);
//   };

//   const handleDelete = (id, name) => {
//     if (window.confirm(`Are you sure you want to delete user "${name}"?`)) {
//       setUsers(users.filter((u) => u.id !== id));
//       toast.warn("User deleted successfully!");
//     }
//   };

//   const handleView = (user) => {
//     setViewingUser(user);
//     setShowViewModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setEditingUser(null);
//     setFormErrors({});
//   };

//   const handleSort = (field) => {
//     if (sortBy === field) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortBy(field);
//       setSortOrder("asc");
//     }
//   };

//   // Export to CSV
//   const exportToCSV = () => {
//     const headers = ["ID", "Name", "Email", "Role", "Status", "Department", "Phone", "Created At", "Last Login"];
//     const csvContent = [
//       headers.join(","),
//       ...filteredUsers.map(user => [
//         user.id,
//         `"${user.name}"`,
//         user.email,
//         user.role,
//         user.status,
//         `"${user.department}"`,
//         user.phone || "",
//         user.createdAt,
//         user.lastLogin
//       ].join(","))
//     ].join("\n");
    
//     const blob = new Blob([csvContent], { type: "text/csv" });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "users.csv";
//     a.click();
//     window.URL.revokeObjectURL(url);
//     toast.success("Users exported to CSV!");
//   };

//   // Statistics
//   const stats = {
//     total: users.length,
//     active: users.filter(u => u.status === "Active").length,
//     inactive: users.filter(u => u.status === "Inactive").length,
//     admins: users.filter(u => u.role === "Admin").length
//   };

//   // Status Badge Component
//   const StatusBadge = ({ status }) => {
//     const colors = {
//       Active: "bg-green-100 text-green-800 border-green-200",
//       Inactive: "bg-gray-100 text-gray-800 border-gray-200",
//       Suspended: "bg-red-100 text-red-800 border-red-200"
//     };
//     return (
//       <span className={`px-2 py-1 rounded-full text-xs font-medium border ${colors[status] || colors.Inactive}`}>
//         {status}
//       </span>
//     );
//   };

//   // Role Badge Component
//   const RoleBadge = ({ role }) => {
//     const colors = {
//       Admin: "bg-purple-100 text-purple-800 border-purple-200",
//       Moderator: "bg-blue-100 text-blue-800 border-blue-200",
//       User: "bg-gray-100 text-gray-800 border-gray-200"
//     };
//     return (
//       <span className={`px-2 py-1 rounded-full text-xs font-medium border ${colors[role] || colors.User}`}>
//         {role}
//       </span>
//     );
//   };

//   return (
//     <div className="p-6 bg-white min-h-screen">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Header */}
//       <div className="mb-8">
//         <h2 className="text-3xl font-bold text-black mb-2 border-b-2 border-pink-500 inline-block">
//           User Management
//         </h2>
//         <p className="text-gray-600 mt-2">Manage user accounts, roles, and permissions</p>
//       </div>

//       {/* Statistics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//         <div className="bg-white border border-pink-200 rounded-lg p-4 shadow-sm">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Total Users</p>
//               <p className="text-2xl font-bold text-black">{stats.total}</p>
//             </div>
//             <FaUsers className="text-pink-500" size={24} />
//           </div>
//         </div>
//         <div className="bg-white border border-green-200 rounded-lg p-4 shadow-sm">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Active Users</p>
//               <p className="text-2xl font-bold text-green-600">{stats.active}</p>
//             </div>
//             <FaUserCheck className="text-green-500" size={24} />
//           </div>
//         </div>
//         <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Inactive Users</p>
//               <p className="text-2xl font-bold text-gray-600">{stats.inactive}</p>
//             </div>
//             <FaUserTimes className="text-gray-500" size={24} />
//           </div>
//         </div>
//         <div className="bg-white border border-purple-200 rounded-lg p-4 shadow-sm">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Administrators</p>
//               <p className="text-2xl font-bold text-purple-600">{stats.admins}</p>
//             </div>
//             <FaUserShield className="text-purple-500" size={24} />
//           </div>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="bg-white border border-pink-200 rounded-lg p-6 shadow-sm mb-6">
//         <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
//           {/* Search */}
//           <div className="relative flex-1 max-w-md">
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
//             <input
//               type="text"
//               placeholder="Search users by name, email, or department..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
//             />
//           </div>

//           {/* Filters */}
//           <div className="flex gap-3 items-center">
//             <div className="flex items-center gap-2">
//               <FaFilter className="text-gray-500" size={14} />
//               <select
//                 value={roleFilter}
//                 onChange={(e) => setRoleFilter(e.target.value)}
//                 className="px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//               >
//                 <option value="All">All Roles</option>
//                 <option value="Admin">Admin</option>
//                 <option value="Moderator">Moderator</option>
//                 <option value="User">User</option>
//               </select>
//             </div>

//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//             >
//               <option value="All">All Status</option>
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//               <option value="Suspended">Suspended</option>
//             </select>

//             <button
//               onClick={exportToCSV}
//               className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
//             >
//               <FaDownload size={14} /> Export
//             </button>

//             <button
//               onClick={() => openModal()}
//               className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
//             >
//               <FaPlusCircle size={16} /> Add User
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Users Table */}
//       <div className="bg-white border border-pink-200 rounded-lg shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-pink-500 text-white">
//               <tr>
//                 <th 
//                   className="p-3 text-left cursor-pointer hover:bg-pink-600 transition-colors"
//                   onClick={() => handleSort("name")}
//                 >
//                   <div className="flex items-center gap-2">
//                     User
//                     <FaSort size={12} />
//                   </div>
//                 </th>
//                 <th 
//                   className="p-3 text-left cursor-pointer hover:bg-pink-600 transition-colors"
//                   onClick={() => handleSort("role")}
//                 >
//                   <div className="flex items-center gap-2">
//                     Role
//                     <FaSort size={12} />
//                   </div>
//                 </th>
//                 <th 
//                   className="p-3 text-left cursor-pointer hover:bg-pink-600 transition-colors"
//                   onClick={() => handleSort("status")}
//                 >
//                   <div className="flex items-center gap-2">
//                     Status
//                     <FaSort size={12} />
//                   </div>
//                 </th>
//                 <th 
//                   className="p-3 text-left cursor-pointer hover:bg-pink-600 transition-colors"
//                   onClick={() => handleSort("department")}
//                 >
//                   <div className="flex items-center gap-2">
//                     Department
//                     <FaSort size={12} />
//                   </div>
//                 </th>
//                 <th 
//                   className="p-3 text-left cursor-pointer hover:bg-pink-600 transition-colors"
//                   onClick={() => handleSort("createdAt")}
//                 >
//                   <div className="flex items-center gap-2">
//                     Created At
//                     <FaSort size={12} />
//                   </div>
//                 </th>
//                 <th 
//                   className="p-3 text-left cursor-pointer hover:bg-pink-600 transition-colors"
//                   onClick={() => handleSort("lastLogin")}
//                 >
//                   <div className="flex items-center gap-2">
//                     Last Login
//                     <FaSort size={12} />
//                   </div>
//                 </th>
//                 <th className="p-3 text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredUsers.length > 0 ? (
//                 filteredUsers.map((user) => (
//                   <tr key={user.id} className="hover:bg-pink-50 transition-colors">
//                     <td className="p-3">
//                       <div className="flex items-center">
//                         <div className="h-10 w-10 rounded-full bg-pink-600 flex items-center justify-center text-white font-semibold">
//                           {user.name.charAt(0).toUpperCase()}
//                         </div>
//                         <div className="ml-3">
//                           <div className="text-sm font-medium text-black">{user.name}</div>
//                           <div className="text-sm text-gray-500 flex items-center gap-1">
//                             <FaEnvelope size={10} /> {user.email}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="p-3">
//                       <RoleBadge role={user.role} />
//                     </td>
//                     <td className="p-3">
//                       <StatusBadge status={user.status} />
//                     </td>
//                     <td className="p-3 text-sm text-black">{user.department}</td>
//                     <td className="p-3 text-sm text-black">
//                       <div className="flex items-center gap-1">
//                         <FaCalendarAlt size={10} /> {user.createdAt}
//                       </div>
//                     </td>
//                     <td className="p-3 text-sm text-gray-600">{user.lastLogin}</td>
//                     <td className="p-3">
//                       <div className="flex items-center gap-2 justify-center">
//                         <button
//                           onClick={() => handleView(user)}
//                           className="text-pink-600 hover:text-pink-800 p-1 rounded transition-colors"
//                           title="View Details"
//                         >
//                           <FaEye size={16} />
//                         </button>
//                         <button
//                           onClick={() => openModal(user)}
//                           className="text-blue-600 hover:text-blue-800 p-1 rounded transition-colors"
//                           title="Edit User"
//                         >
//                           <FaEdit size={16} />
//                         </button>
//                         <button
//                           onClick={() => handleDelete(user.id, user.name)}
//                           className="text-red-600 hover:text-red-800 p-1 rounded transition-colors"
//                           title="Delete User"
//                         >
//                           <FaTrash size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
//                     <FaUsers size={48} className="mx-auto mb-4 opacity-50" />
//                     <p className="text-lg font-medium">No users found</p>
//                     <p className="text-sm">Try adjusting your search or filters</p>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Add/Edit Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-black">
//                 {editingUser ? "Update User" : "Add New User"}
//               </h3>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-500 hover:text-pink-600 transition-colors"
//               >
//                 <FaTimes size={20} />
//               </button>
//             </div>

//             {/* Form */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">Name *</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter full name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-colors ${
//                     formErrors.name ? "border-red-500" : "border-pink-300"
//                   }`}
//                 />
//                 {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">Email *</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter email address"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-colors ${
//                     formErrors.email ? "border-red-500" : "border-pink-300"
//                   }`}
//                 />
//                 {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">Phone</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Enter phone number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-colors ${
//                     formErrors.phone ? "border-red-500" : "border-pink-300"
//                   }`}
//                 />
//                 {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">Department</label>
//                 <input
//                   type="text"
//                   name="department"
//                   placeholder="Enter department"
//                   value={formData.department}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-colors"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">Role</label>
//                 <select
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-colors"
//                 >
//                   <option value="User">User</option>
//                   <option value="Moderator">Moderator</option>
//                   <option value="Admin">Admin</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-black mb-1">Status</label>
//                 <select
//                   name="status"
//                   value={formData.status}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none transition-colors"
//                 >
//                   <option value="Active">Active</option>
//                   <option value="Inactive">Inactive</option>
//                   <option value="Suspended">Suspended</option>
//                 </select>
//               </div>
//             </div>

//             {/* Modal Actions */}
//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 rounded-lg border border-gray-400 text-black hover:bg-gray-100 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSave}
//                 className="px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors"
//               >
//                 {editingUser ? "Update User" : "Add User"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* View Modal */}
//       {showViewModal && viewingUser && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-xl font-bold text-black">User Details</h3>
//               <button
//                 onClick={() => setShowViewModal(false)}
//                 className="text-gray-500 hover:text-pink-600 transition-colors"
//               >
//                 <FaTimes size={20} />
//               </button>
//             </div>

//             <div className="space-y-6">
//               {/* User Avatar and Basic Info */}
//               <div className="text-center">
//                 <div className="h-20 w-20 rounded-full bg-pink-600 flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-4">
//                   {viewingUser.name.charAt(0).toUpperCase()}
//                 </div>
//                 <h4 className="text-xl font-semibold text-black">{viewingUser.name}</h4>
//                 <p className="text-gray-600 flex items-center justify-center gap-1 mt-1">
//                   <FaEnvelope size={12} /> {viewingUser.email}
//                 </p>
//               </div>

//               {/* User Details */}
//               <div className="space-y-3">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="flex flex-col">
//                     <span className="text-sm font-medium text-gray-600">User ID</span>
//                     <span className="text-black">#{viewingUser.id}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-sm font-medium text-gray-600">Phone</span>
//                     <span className="text-black">{viewingUser.phone || "Not provided"}</span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="flex flex-col">
//                     <span className="text-sm font-medium text-gray-600">Role</span>
//                     <div className="mt-1">
//                       <RoleBadge role={viewingUser.role} />
//                     </div>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-sm font-medium text-gray-600">Status</span>
//                     <div className="mt-1">
//                       <StatusBadge status={viewingUser.status} />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col">
//                   <span className="text-sm font-medium text-gray-600">Department</span>
//                   <span className="text-black">{viewingUser.department}</span>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="flex flex-col">
//                     <span className="text-sm font-medium text-gray-600">Created At</span>
//                     <span className="text-black flex items-center gap-1">
//                       <FaCalendarAlt size={10} /> {viewingUser.createdAt}
//                     </span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-sm font-medium text-gray-600">Last Login</span>
//                     <span className="text-black">{viewingUser.lastLogin}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminUsers;







// src/pages/AdminUsers.jsx
import React, { useState, useEffect } from "react";
import { 
  FaPlusCircle, 
  FaEdit, 
  FaTrash, 
  FaSearch, 
  FaEye, 
  FaTimes,
  FaEnvelope,
  FaDownload,
  FaSort,
  FaUsers,
  FaCalendarAlt
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Admin",
      status: "Active",
      createdAt: "2024-01-15",
      lastLogin: "2024-03-01",
      phone: "+1 234-567-8901",
      department: "Engineering"
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      role: "User",
      status: "Active",
      createdAt: "2024-02-10",
      lastLogin: "2024-02-28",
      phone: "+1 234-567-8902",
      department: "Marketing"
    },
  ]);

  const [filteredUsers, setFilteredUsers] = useState(users);
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [viewingUser, setViewingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
    phone: "",
    department: ""
  });

  // filter
  useEffect(() => {
    let filtered = users.filter(
      (u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [users, searchTerm]);

  // input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // open add/edit modal
  const openModal = (user = null) => {
    if (user) {
      setEditingUser(user);
      setFormData({ ...user });
    } else {
      setEditingUser(null);
      setFormData({
        name: "",
        email: "",
        role: "User",
        status: "Active",
        phone: "",
        department: ""
      });
    }
    setShowModal(true);
  };

  // save (add/update)
  const handleSave = () => {
    if (!formData.name || !formData.email) {
      toast.error("Name and Email are required");
      return;
    }

    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? { ...u, ...formData } : u)));
      toast.info("User updated!");
    } else {
      const newUser = {
        id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
        ...formData,
        createdAt: new Date().toISOString().split("T")[0],
        lastLogin: "Never",
      };
      setUsers([...users, newUser]);
      toast.success("User added!");
    }
    setShowModal(false);
  };

  // delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      setUsers(users.filter((u) => u.id !== id));
      toast.warn("User deleted!");
    }
  };

  // export csv
  const exportToCSV = () => {
    const headers = ["ID", "Name", "Email", "Role", "Status", "Department"];
    const rows = filteredUsers.map((u) =>
      [u.id, u.name, u.email, u.role, u.status, u.department].join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported!");
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <ToastContainer />

      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">User Management</h2>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
        >
          <FaPlusCircle /> Add User
        </button>
      </div>

      {/* Search + Export */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <div className="relative flex-1 w-full max-w-md">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          <FaDownload /> Export
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-pink-500 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3">Department</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length ? (
              filteredUsers.map((u) => (
                <tr key={u.id} className="border-t hover:bg-pink-50">
                  <td className="p-3 flex items-center gap-2">
                    <div className="h-8 w-8 bg-pink-600 rounded-full flex items-center justify-center text-white">
                      {u.name[0]}
                    </div>
                    {u.name}
                  </td>
                  {/* <td className="p-3 text-sm text-gray-600 flex items-center gap-1">
                    <FaEnvelope size={12} /> {u.email}
                  </td> */}
                  <td className="p-3"><FaEnvelope size={12} /> {u.email}</td>
                  <td className="p-3">{u.role}</td>
                  <td className="p-3">{u.status}</td>
                  <td className="p-3">{u.department}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => { setViewingUser(u); setShowViewModal(true); }}
                      className="text-pink-600 hover:text-pink-800"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => openModal(u)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(u.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  <FaUsers size={40} className="mx-auto mb-2" />
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">{editingUser ? "Edit User" : "Add User"}</h3>
              <button onClick={() => setShowModal(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option>User</option>
                <option>Admin</option>
              </select>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button onClick={() => setShowModal(false)} className="px-3 py-1 border rounded">
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-pink-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {showViewModal && viewingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between mb-4">
              <h3 className="font-bold">User Details</h3>
              <button onClick={() => setShowViewModal(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="text-center mb-4">
              <div className="h-16 w-16 bg-pink-600 text-white flex items-center justify-center rounded-full mx-auto text-xl font-bold">
                {viewingUser.name[0]}
              </div>
              <p className="mt-2 font-semibold">{viewingUser.name}</p>
              <p className="text-sm text-gray-600">{viewingUser.email}</p>
            </div>
            <p><b>Role:</b> {viewingUser.role}</p>
            <p><b>Status:</b> {viewingUser.status}</p>
            <p><b>Department:</b> {viewingUser.department}</p>
            <p><b>Created At:</b> {viewingUser.createdAt}</p>
            <p><b>Last Login:</b> {viewingUser.lastLogin}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
