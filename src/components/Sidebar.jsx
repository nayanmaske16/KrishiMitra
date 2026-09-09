function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 bg-green-900 p-5 text-white md:block">

      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          🌾 KrishiMitra
        </h1>

        <p className="mt-1 text-sm text-green-200">
          Smart Farming
        </p>
      </div>

      <nav className="space-y-2">

        <button className="w-full rounded-lg bg-green-700 px-4 py-3 text-left">
          🏠 Dashboard
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-green-800">
          🌱 Crop Recommendation
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-green-800">
          🦠 Disease Detection
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-green-800">
          💧 Irrigation
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-green-800">
          🧪 Soil Analysis
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-green-800">
          🌦️ Weather
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-green-800">
          🤖 AI Assistant
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-green-800">
          📊 Analytics
        </button>

      </nav>

      <div className="mt-10 border-t border-green-700 pt-5">

        <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-green-800">
          ⚙️ Admin
        </button>

        <button className="mt-2 w-full rounded-lg px-4 py-3 text-left hover:bg-green-800">
          🚪 Logout
        </button>

      </div>

    </aside>
  )
}

export default Sidebar