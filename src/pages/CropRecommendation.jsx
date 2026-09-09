function CropRecommendation() {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-8">

      <div className="mx-auto max-w-3xl">

        <h1 className="text-3xl font-bold text-green-800">
          🌱 Crop Recommendation
        </h1>

        <p className="mt-2 text-gray-600">
          Enter your farm details to get a suitable crop recommendation.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">

          <div>
            <label className="block font-medium text-gray-700">
              Soil Type
            </label>

            <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3">
              <option>Select soil type</option>
              <option>Black Soil</option>
              <option>Red Soil</option>
              <option>Alluvial Soil</option>
              <option>Loamy Soil</option>
              <option>Sandy Soil</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="block font-medium text-gray-700">
              Location
            </label>

            <input
              type="text"
              placeholder="Enter your location"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
            />
          </div>

          <div className="mt-5">
            <label className="block font-medium text-gray-700">
              Farm Area (acres)
            </label>

            <input
              type="number"
              placeholder="Enter farm area"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
            />
          </div>

          <div className="mt-5">
            <label className="block font-medium text-gray-700">
              Water Availability
            </label>

            <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3">
              <option>Select availability</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <button className="mt-7 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800">
            🤖 Get Recommendation
          </button>

        </div>

        {/* Demo Result */}

        <div className="mt-8 rounded-2xl border border-green-200 bg-white p-6 shadow">

          <h2 className="text-xl font-bold text-green-800">
            🌾 Sample Recommendation
          </h2>

          <p className="mt-4 text-gray-700">
            Based on the provided farm conditions, suitable crops could
            include <strong>Wheat</strong>, <strong>Maize</strong>, or
            <strong> Chickpea</strong>.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            ⚠️ This is currently demo data. AI-based recommendations
            will be connected later.
          </p>

        </div>

      </div>

    </div>
  )
}

export default CropRecommendation