function Irrigation() {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-8">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-3xl font-bold text-green-800">
          💧 Irrigation Advice
        </h1>

        <p className="mt-2 text-gray-600">
          Get smart water management recommendations for your farm.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">

          <div>
            <label className="block font-medium text-gray-700">
              Select Crop
            </label>

            <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3">
              <option>Select crop</option>
              <option>Wheat</option>
              <option>Rice</option>
              <option>Maize</option>
              <option>Cotton</option>
              <option>Soybean</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="block font-medium text-gray-700">
              Soil Moisture
            </label>

            <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3">
              <option>Select moisture level</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="block font-medium text-gray-700">
              Current Temperature (°C)
            </label>

            <input
              type="number"
              placeholder="Enter temperature"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
            />
          </div>

          <button className="mt-7 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800">
            💧 Get Irrigation Advice
          </button>

        </div>

        {/* Demo Result */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="text-xl font-bold text-green-800">
            💧 Sample Recommendation
          </h2>

          <div className="mt-5 rounded-lg bg-blue-50 p-5">

            <p className="text-lg font-semibold">
              Recommended Irrigation
            </p>

            <p className="mt-2 text-gray-700">
              Moderate irrigation is recommended based on the current
              conditions.
            </p>

            <p className="mt-4 font-semibold">
              Suggested Timing
            </p>

            <p className="mt-1 text-gray-600">
              Early morning or evening.
            </p>

          </div>

          <p className="mt-4 text-sm text-gray-500">
            ⚠️ Demo result. Real-time recommendations will be connected
            later.
          </p>

        </div>

      </div>
    </div>
  )
}

export default Irrigation