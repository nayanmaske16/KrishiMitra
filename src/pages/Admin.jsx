function Admin() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-3xl font-bold text-green-800">
          ⚙️ Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Manage users, agricultural data and platform activity.
        </p>

        {/* Statistics */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">
              Registered Farmers
            </p>

            <p className="mt-2 text-3xl font-bold text-green-700">
              248
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">
              Agricultural Experts
            </p>

            <p className="mt-2 text-3xl font-bold text-green-700">
              24
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">
              AI Analyses
            </p>

            <p className="mt-2 text-3xl font-bold text-green-700">
              1,426
            </p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">
              Pending Requests
            </p>

            <p className="mt-2 text-3xl font-bold text-orange-600">
              12
            </p>
          </div>

        </div>

        {/* Pending Requests */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="text-xl font-bold text-gray-800">
            📋 Pending Requests
          </h2>

          <div className="mt-5 overflow-x-auto">

            <table className="w-full text-left">

              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">Request</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b">

                  <td className="px-4 py-4">
                    Rahul Sharma
                  </td>

                  <td className="px-4 py-4">
                    Soil Analysis Access
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm">
                      Pending
                    </span>
                  </td>

                  <td className="px-4 py-4">

                    <button className="mr-2 rounded-lg bg-green-700 px-4 py-2 text-sm text-white">
                      Approve
                    </button>

                    <button className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white">
                      Reject
                    </button>

                  </td>

                </tr>

                <tr>

                  <td className="px-4 py-4">
                    Priya Patel
                  </td>

                  <td className="px-4 py-4">
                    Expert Consultation
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm">
                      Pending
                    </span>
                  </td>

                  <td className="px-4 py-4">

                    <button className="mr-2 rounded-lg bg-green-700 px-4 py-2 text-sm text-white">
                      Approve
                    </button>

                    <button className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white">
                      Reject
                    </button>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Admin