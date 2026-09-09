function Register() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <div className="text-center">
          <div className="text-5xl">🌾</div>

          <h1 className="mt-4 text-3xl font-bold text-green-800">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join KrishiMitra
          </p>
        </div>

        <div className="mt-6">

          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
          />

        </div>

        <div className="mt-5">

          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
          />

        </div>

        <div className="mt-5">

          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
          />

        </div>

        <div className="mt-5">

          <label className="block text-sm font-medium text-gray-700">
            Account Type
          </label>

          <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600">
            <option>Farmer</option>
            <option>Agricultural Expert</option>
          </select>

        </div>

        <button className="mt-7 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800">
          Create Account
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?
          <span className="ml-1 cursor-pointer font-semibold text-green-700">
            Login
          </span>
        </p>

      </div>

    </div>
  )
}

export default Register