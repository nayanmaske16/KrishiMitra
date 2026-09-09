function SoilAnalysis() {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-8">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-3xl font-bold text-green-800">
          🧪 Soil Analysis
        </h1>

        <p className="mt-2 text-gray-600">
          Enter soil information to understand your farm conditions.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">

          <div className="grid gap-5 md:grid-cols-3">

            <div>
              <label className="block font-medium text-gray-700">
                Nitrogen (N)
              </label>

              <input
                type="number"
                placeholder="e.g. 50"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Phosphorus (P)
              </label>

              <input
                type="number"
                placeholder="e.g. 30"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Potassium (K)
              </label>

              <input
                type="number"
                placeholder="e.g. 40"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>

          </div>

          <div className="mt-5">
            <label className="block font-medium text-gray-700">
              Soil pH
            </label>

            <input
              type="number"
              step="0.1"
              placeholder="e.g. 6.5"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3"
            />
          </div>

          <button className="mt-7 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800">
            🧪 Analyze Soil
          </button>

        </div>

        {/* Demo Result */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="text-xl font-bold text-green-800">
            📊 Sample Soil Report
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">

            <div className="rounded-lg bg-green-50 p-4">
              <p className="text-sm text-gray-500">Nitrogen</p>
              <p className="mt-1 text-xl font-bold text-green-700">
                Medium
              </p>
            </div>

            <div className="rounded-lg bg-yellow-50 p-4">
              <p className="text-sm text-gray-500">Phosphorus</p>
              <p className="mt-1 text-xl font-bold">
                Low
              </p>
            </div>

            <div className="rounded-lg bg-green-50 p-4">
              <p className="text-sm text-gray-500">Potassium</p>
              <p className="mt-1 text-xl font-bold text-green-700">
                Good
              </p>
            </div>

          </div>

          <div className="mt-5 rounded-lg bg-gray-50 p-4">
            <p className="font-semibold">
              Recommendation
            </p>

            <p className="mt-2 text-gray-600">
              Consider improving phosphorus levels based on the soil
              readings.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            ⚠️ Demo result. Real soil analysis will be connected later.
          </p>

        </div>

      </div>
    </div>
  )
}

export default SoilAnalysis