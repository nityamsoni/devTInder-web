import React from 'react'

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="w-full max-w-4xl bg-base-200 shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 items-stretch h-[70vh] md:h-[75vh]">
        {/* Left: image panel */}
  <div className="hidden md:block bg-cover bg-center h-full w-full" style={{backgroundImage: "url('/chat.png')"}} aria-hidden="true" />

        {/* Right: form panel */}
        <div className="p-8 flex items-center justify-center">
          <form className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-6">Welcome back to DevTinder</h2>

            <label className="label text-base text-white m-3">Email</label>
            <input type="email" className="input input-bordered w-full mb-4" placeholder="you@example.com" />

            <label className="label text-base text-white m-3">Password</label>
            <input type="password" className="input input-bordered w-full mb-4" placeholder="Password" />

            <button type="submit" className="btn btn-primary w-full mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
