import React from "react";
import { NavLink } from "react-router-dom";

const ViewProfile = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-2">Profile</h2>
      <p className="text-gray-600 mb-6">View your account details</p>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto">
        {/* Avatar + Basic Info */}
        <div className="flex items-center gap-6 mb-6">
          <img
            src="/images/zaid.png"
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500">Student ID: 2025-1234</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <p className="text-base text-gray-900">john.doe@school.edu</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <p className="text-base text-gray-900">(555) 123-4567</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Grade</label>
            <p className="text-base text-gray-900">Grade 12</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Class</label>
            <p className="text-base text-gray-900">Biology Lab</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Status</label>
            <p className="text-base text-green-600 font-medium">Active</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">GPA</label>
            <p className="text-base text-gray-900">3.8</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 text-right">
          <NavLink
            to="/dashboard/admin-setting"
            className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Edit Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
