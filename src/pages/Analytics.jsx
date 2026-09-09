function Analytics() {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-3xl font-bold text-green-800">
          📊 Farm Analytics
        </h1>

        <p className="mt-2 text-gray-600">
          Monitor your farm activities and performance.
        </p>

        {/* Statistics */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">Total Farm Area</p>
            <p className="mt-2 text-3xl font-bold text-green-700">
              12.5
            </p>
            <p className="text-sm text-gray-500">Acres</p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">Active Crops</p>
            <p className="mt-2 text-3xl font-bold text-green-700">
              4
            </p>
            <p className="text-sm text-gray-500">Crops</p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">AI Analyses</p>
            <p className="mt-2 text-3xl font-bold text-green-700">
              18
            </p>
            <p className="text-sm text-gray-500">This month</p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-sm text-gray-500">Farm Health</p>
            <p className="mt-2 text-3xl font-bold text-green-700">
              Good
            </p>
            <p className="text-sm text-gray-500">Current status</p>
          </div>

        </div>

        {/* Crop Overview */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="text-xl font-bold text-gray-800">
            🌱 Crop Overview
          </h2>

          <div className="mt-6 space-y-5">

            <div>
              <div className="flex justify-between">
                <span className="font-medium">Wheat</span>
                <span className="text-sm text-gray-500">
                  85% healthy
                </span>
              </div>

              <div className="mt-2 h-3 rounded-full bg-gray-200">
                <div className="h-3 w-[85%] rounded-full bg-green-600"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span className="font-medium">Soybean</span>
                <span className="text-sm text-gray-500">
                  72% healthy
                </span>
              </div>

              <div className="mt-2 h-3 rounded-full bg-gray-200">
                <div className="h-3 w-[72%] rounded-full bg-green-600"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <span className="font-medium">Maize</span>
                <span className="text-sm text-gray-500">
                  90% healthy
                </span>
              </div>

              <div className="mt-2 h-3 rounded-full bg-gray-200">
                <div className="h-3 w-[90%] rounded-full bg-green-600"></div>
              </div>
            </div>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="text-xl font-bold text-gray-800">
            🕒 Recent Activity
          </h2>

          <div className="mt-5 space-y-4">

            <div className="rounded-lg bg-gray-50 p-4">
              🌱 Crop recommendation completed
              <span className="ml-2 text-sm text-gray-500">
                2 hours ago
              </span>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              🦠 Disease analysis completed
              <span className="ml-2 text-sm text-gray-500">
                Yesterday
              </span>
            </div>

            <div className="rounded-lg bg-gray-50 p-4">
              🧪 Soil analysis completed
              <span className="ml-2 text-sm text-gray-500">
                3 days ago
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Analytics