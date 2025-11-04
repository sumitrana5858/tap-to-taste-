import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-95 max-w-md ">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-full mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="green"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7l9-4 9 4m-9 4v10m0-10L3 7m9 4l9-4m-9 14V11"
              />
            </svg>
          </div>
          <h2 className="text-1.5xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-500 text-sm text-center mt-3">
            Start managing your restaurant today
          </p>
        </div>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-xs text-gray-700 mb-1">
              Full Name
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <User className="text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-2 py-1 outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <Mail className="text-gray-400 w-4 h-4" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-2 py-1 outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <Lock className="text-gray-400 w-4 h-4" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full px-2 py-1 outline-none text-gray-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="flex items-center border rounded-lg px-3">
              <Lock className="text-gray-400 w-4 h-4" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full px-2 py-1 outline-none text-gray-700  "
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="text-gray-500"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-81 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-medium transition h-11 mb-2"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-xs text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
