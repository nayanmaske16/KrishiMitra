function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-green-700 px-8 py-4 text-white">
        <h1 className="text-2xl font-bold">🌾 KrishiMitra</h1>
        <p className="text-green-100">
          Your Smart Farming Companion
        </p>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">

        <h2 className="text-3xl font-bold text-gray-800">
          Farmer Dashboard
        </h2>

        <p className="mt-2 text-gray-600">
          Welcome! Choose a service to get started.
        </p>

        {/* Feature Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow">
            <div className="text-4xl">🌱</div>
            <h3 className="mt-4 text-xl font-bold">
              Crop Recommendation
            </h3>
            <p className="mt-2 text-gray-600">
              Find suitable crops based on your farm conditions.
            </p>
            <button className="mt-4 rounded-lg bg-green-700 px-5 py-2 text-white">
              Explore
            </button>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <div className="text-4xl">🦠</div>
            <h3 className="mt-4 text-xl font-bold">
              Disease Detection
            </h3>
            <p className="mt-2 text-gray-600">
              Analyze crop problems using an image.
            </p>
            <button className="mt-4 rounded-lg bg-green-700 px-5 py-2 text-white">
              Analyze
            </button>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <div className="text-4xl">💧</div>
            <h3 className="mt-4 text-xl font-bold">
              Irrigation Advice
            </h3>
            <p className="mt-2 text-gray-600">
              Get smart water management recommendations.
            </p>
            <button className="mt-4 rounded-lg bg-green-700 px-5 py-2 text-white">
              Check
            </button>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <div className="text-4xl">🧪</div>
            <h3 className="mt-4 text-xl font-bold">
              Soil Analysis
            </h3>
            <p className="mt-2 text-gray-600">
              Understand your soil and improve crop health.
            </p>
            <button className="mt-4 rounded-lg bg-green-700 px-5 py-2 text-white">
              Analyze
            </button>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <div className="text-4xl">🌦️</div>
            <h3 className="mt-4 text-xl font-bold">
              Weather
            </h3>
            <p className="mt-2 text-gray-600">
              Check weather information for your farm.
            </p>
            <button className="mt-4 rounded-lg bg-green-700 px-5 py-2 text-white">
              View
            </button>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <div className="text-4xl">🤖</div>
            <h3 className="mt-4 text-xl font-bold">
              AI Assistant
            </h3>
            <p className="mt-2 text-gray-600">
              Ask questions and get agricultural guidance.
            </p>
            <button className="mt-4 rounded-lg bg-green-700 px-5 py-2 text-white">
              Ask AI
            </button>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Dashboard