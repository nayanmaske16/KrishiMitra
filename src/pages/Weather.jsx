function Weather() {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-3xl font-bold text-green-800">
          🌦️ Farm Weather
        </h1>

        <p className="mt-2 text-gray-600">
          Check weather conditions and plan your farming activities.
        </p>

        {/* Location */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">

          <label className="block font-medium text-gray-700">
            Farm Location
          </label>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">

            <input
              type="text"
              placeholder="Enter city or village"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3"
            />

            <button className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800">
              Check Weather
            </button>

          </div>

        </div>

        {/* Current Weather */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

            <div>
              <p className="text-gray-500">
                Current Weather
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Nagpur, Maharashtra
              </h2>

              <p className="mt-1 text-gray-500">
                Partly Cloudy
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl">🌤️</div>

              <p className="mt-2 text-4xl font-bold text-green-700">
                28°C
              </p>
            </div>

          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-sm text-gray-500">
                💧 Humidity
              </p>

              <p className="mt-1 text-xl font-bold">
                68%
              </p>
            </div>

            <div className="rounded-lg bg-green-50 p-4">
              <p className="text-sm text-gray-500">
                💨 Wind
              </p>

              <p className="mt-1 text-xl font-bold">
                12 km/h
              </p>
            </div>

            <div className="rounded-lg bg-yellow-50 p-4">
              <p className="text-sm text-gray-500">
                🌧️ Rain Chance
              </p>

              <p className="mt-1 text-xl font-bold">
                30%
              </p>
            </div>

          </div>

        </div>

        {/* Farming Advice */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">

          <h2 className="text-xl font-bold text-green-800">
            🌱 Farming Advice
          </h2>

          <p className="mt-3 text-gray-600">
            Weather conditions are currently suitable for routine farm
            activities. Consider monitoring soil moisture before irrigation.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            ⚠️ Demo weather data. A real weather API will be connected later.
          </p>

        </div>

      </div>
    </div>
  )
}

export default Weather