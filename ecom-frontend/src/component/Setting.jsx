// Settings.jsx (Tailwind Version)
import { useState } from "react";
import {
  FaUser,
  FaBell,
  FaShieldAlt,
  FaPalette,
  FaQuestionCircle,
  FaBug,
  FaVideo,
  FaHeadset,
  FaBook,
} from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

export default function Settings() {
  const [key, setKey] = useState("profile");

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.currentPassword || !formData.newPassword) {
      toast.error("Please fill out all fields!", { theme: "colored" });
      return;
    }

    if (formData.newPassword === formData.currentPassword) {
      toast.error("New password must be different from current password!", {
        theme: "colored",
      });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New password and confirmation do not match!", {
        theme: "colored",
      });
      return;
    }

    toast.success("Password updated successfully!", { theme: "colored" });
    console.log(formData);
  };

  const helpItems = [
    {
      title: "Documentation",
      desc: "Browse our comprehensive guides",
      icon: <FaBook className="text-blue-500 mr-2" />,
      onClick: () => window.open("/docs", "_blank"),
    },
    {
      title: "Contact Support",
      desc: "Get help from our support team",
      icon: <FaHeadset className="text-green-500 mr-2" />,
      onClick: () => window.open("/contact", "_blank"),
    },
    {
      title: "Video Tutorials",
      desc: "Watch step-by-step tutorials",
      icon: <FaVideo className="text-red-500 mr-2" />,
      onClick: () => window.open("/videos", "_blank"),
    },
    {
      title: "Report a Bug",
      desc: "Help us improve the platform",
      icon: <FaBug className="text-yellow-500 mr-2" />,
      onClick: () => window.open("/report-bug", "_blank"),
    },
  ];

  const tabs = [
    { key: "profile", label: <><FaUser /> Profile</> },
    { key: "notifications", label: <><FaBell /> Notifications</> },
    { key: "security", label: <><FaShieldAlt /> Security</> },
    { key: "appearance", label: <><FaPalette /> Appearance</> },
    { key: "help", label: <><FaQuestionCircle /> Help</> },
  ];

  return (
    <div className="px-6 py-6">
      <h1 className="mb-2 font-bold text-3xl text-left">Setting</h1>
      <p className="text-gray-500">Manage your account settings and preferences</p>

      {/* Tabs */}
      <div className="flex border-b mt-6 space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`pb-2 flex items-center gap-2 border-b-2 transition ${
              key === tab.key
                ? "border-blue-500 text-blue-600 font-semibold"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setKey(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6">
        {/* Profile */}
        {key === "profile" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h5 className="flex items-center gap-2 font-semibold">
              <FaUser /> Profile Information
            </h5>

            <form className="mt-4 space-y-4">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src=""
                  alt="avatar"
                  className="w-20 h-20 rounded-full bg-gray-200"
                />
                <div>
                  <button
                    type="button"
                    className="px-4 py-2 border rounded text-blue-600 border-blue-600 hover:bg-blue-50"
                  >
                    Change Photo
                  </button>
                  <p className="text-gray-400 text-sm">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full border rounded px-3 py-2 mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  defaultValue="john.doe@school.edu"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Bio</label>
                <textarea
                  defaultValue="Experienced mathematics teacher with 10+ years in education."
                  className="w-full border rounded px-3 py-2 mt-1"
                />
              </div>

              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Save Changes
              </button>
            </form>
          </div>
        )}

        {/* Notifications */}
        {key === "notifications" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h5 className="flex items-center gap-2 font-semibold text-lg">
              <FaBell className="text-yellow-500" /> Notification Preferences
            </h5>
            <p className="text-gray-500 text-sm mb-4">
              Customize how you'd like to receive updates
            </p>
            <form className="space-y-3">
              {[
                "Email Notifications",
                "Assignment Reminders",
                "Student Submissions",
                "Grade Updates",
                "System Updates",
              ].map((label, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked={idx < 3}
                    className="w-4 h-4"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </form>
          </div>
        )}

        {/* Security */}
        {key === "security" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h5 className="flex items-center gap-2 font-semibold text-lg">
              <FaShieldAlt className="text-blue-500" /> Security Settings
            </h5>
            <p className="text-gray-500 text-sm mb-4">
              Manage your account security and password
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {["currentPassword", "newPassword", "confirmPassword"].map(
                (field, idx) => (
                  <div key={field} className="relative">
                    <label className="block text-sm font-medium mb-1">
                      {field === "currentPassword"
                        ? "Current Password"
                        : field === "newPassword"
                        ? "New Password"
                        : "Confirm New Password"}
                    </label>
                    <input
                      type={
                        showPassword[
                          field === "currentPassword"
                            ? "current"
                            : field === "newPassword"
                            ? "new"
                            : "confirm"
                        ]
                          ? "text"
                          : "password"
                      }
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={
                        field === "confirmPassword"
                          ? "Re-enter new password"
                          : `Enter ${
                              field === "currentPassword" ? "current" : "new"
                            } password`
                      }
                      className="w-full border rounded px-3 py-2 pr-10"
                    />
                    <span
                      onClick={() =>
                        togglePassword(
                          field === "currentPassword"
                            ? "current"
                            : field === "newPassword"
                            ? "new"
                            : "confirm"
                        )
                      }
                      className="absolute right-3 top-9 cursor-pointer"
                    >
                      {showPassword[
                        field === "currentPassword"
                          ? "current"
                          : field === "newPassword"
                          ? "new"
                          : "confirm"
                      ] ? (
                        <AiOutlineEyeInvisible size={20} />
                      ) : (
                        <AiOutlineEye size={20} />
                      )}
                    </span>
                  </div>
                )
              )}

              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Update Password
              </button>

              <hr />

              <div className="flex justify-between items-start">
                <div>
                  <h6 className="font-semibold">Two-Factor Authentication</h6>
                  <p className="text-gray-500 text-sm">
                    Add an extra layer of security to your account by enabling 2FA.
                  </p>
                </div>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                  Enable
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Appearance */}
        {key === "appearance" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h5 className="flex items-center gap-2 font-semibold text-lg">
              <FaPalette className="text-green-500" /> Appearance Settings
            </h5>
            <p className="text-gray-500 text-sm mb-4">
              Personalize how the app looks and feels for you
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Theme</label>
                <select
                  defaultValue="light"
                  className="w-full border rounded px-3 py-2 mt-1"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System Default</option>
                </select>
                <p className="text-gray-400 text-sm">
                  Choose between light, dark, or system default.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium">Language</label>
                <select
                  defaultValue="en"
                  className="w-full border rounded px-3 py-2 mt-1"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
                <p className="text-gray-400 text-sm">
                  Select your preferred language.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium">Timezone</label>
                <select
                  defaultValue="est"
                  className="w-full border rounded px-3 py-2 mt-1"
                >
                  <option value="est">Eastern Time (EST)</option>
                  <option value="pst">Pacific Time (PST)</option>
                  <option value="mst">Mountain Time (MST)</option>
                </select>
                <p className="text-gray-400 text-sm">
                  Used for time-sensitive content and reminders.
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Help */}
        {key === "help" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h5 className="flex items-center gap-2 font-semibold text-lg mb-4">
              <FaQuestionCircle className="text-blue-400" /> Help & Support
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {helpItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.onClick}
                  className="flex items-start p-4 rounded-lg border bg-white shadow hover:shadow-md transition transform hover:-translate-y-1 text-left"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <strong className="block">{item.title}</strong>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
