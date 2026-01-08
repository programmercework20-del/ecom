import React from 'react'

function Profile() {
  return (
    <>
    <div style={{height:"350px",width:"100%",backgroundColor:"#53393B",color:"white",fontSize:"50PX",display:"flex",justifyContent:"center",alignItems:"center"}}>



LOGINN TO YOUR DASHBOARD

    </div>
      <div className="min-h-screen flex items-center justify-center bg-[#d6c4a4] p-5">
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-8xl">
        
        {/* Login Box */}
        <div className="bg-[#e6d7b6] p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Username or email address
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none"
              placeholder="Enter username or email"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2 focus:outline-none"
              placeholder="Enter password"
            />
          </div>
          
          <div className="flex items-center mb-4">
            <button className="bg-gray-200 px-5 py-2 rounded font-semibold hover:bg-gray-300">
              Log in
            </button>
            <label className="ml-3 flex items-center space-x-2">
              <input type="checkbox" className="mr-1" />
              <span>Remember me</span>
            </label>
          </div>
          
          <a href="#" className="text-sm text-blue-600">
            Lost your password?
          </a>
        </div>
        
        {/* Register Box */}
        <div className="bg-[#e6d7b6] p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 focus:outline-none"
              placeholder="Enter email"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2 focus:outline-none"
              placeholder="Enter password"
            />
          </div>
          
          <p className="text-xs text-gray-700 mb-4">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account,
            and for other purposes described in our privacy policy.
          </p>
          
          <button className="bg-gray-200 px-5 py-2 rounded font-semibold hover:bg-gray-300">
            Register
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile