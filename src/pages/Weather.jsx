import { useState } from "react"
import Navbar from "../components/Navbar"

function Weather() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)

    const checkWeather = async () => {
        if (!city.trim()) {
            alert("Please enter a city.")
            return
        }

        setLoading(true)
        setWeather(null)

        try {
            // Find city coordinates
            const locationResponse = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
                    city
                )}&count=1&language=en&format=json`
            )

            const locationData = await locationResponse.json()

            if (!locationData.results || locationData.results.length === 0) {
                alert("City not found.")
                setLoading(false)
                return
            }

            const location = locationData.results[0]

            // Get real weather
            const weatherResponse = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code&timezone=auto`
            )

            const weatherData = await weatherResponse.json()

            setWeather({
                city: location.name,
                country: location.country,
                temperature: weatherData.current.temperature_2m,
                humidity: weatherData.current.relative_humidity_2m,
                rainfall: weatherData.current.precipitation,
                condition: getWeatherCondition(
                    weatherData.current.weather_code
                ),
            })
        } catch (error) {
            console.error(error)
            alert("Could not fetch weather data.")
        }

        setLoading(false)
    }

    const getWeatherCondition = (code) => {
        if (code === 0) return "Clear Sky"
        if ([1, 2, 3].includes(code)) return "Partly Cloudy"
        if ([45, 48].includes(code)) return "Foggy"
        if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle"
        if ([61, 63, 65, 66, 67].includes(code)) return "Rain"
        if ([71, 73, 75, 77].includes(code)) return "Snow"
        if ([80, 81, 82].includes(code)) return "Rain Showers"
        if ([95, 96, 99].includes(code)) return "Thunderstorm"

        return "Unknown"
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-green-50 p-8">
                <div className="mx-auto max-w-4xl">

                    <div className="rounded-2xl bg-white p-8 shadow-lg">

                        <h1 className="text-3xl font-bold text-green-800">
                            🌦️ Weather Information
                        </h1>

                        <p className="mt-2 text-gray-600">
                            Check real-time weather conditions for your location.
                        </p>

                        <div className="mt-8 flex gap-3">

                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Enter city name"
                                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                            />

                            <button
                                onClick={checkWeather}
                                disabled={loading}
                                className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50"
                            >
                                {loading ? "Loading..." : "Check Weather"}
                            </button>

                        </div>

                        {weather && (
                            <div className="mt-8 rounded-2xl bg-green-50 p-6">

                                <h2 className="text-2xl font-bold text-green-800">
                                    📍 {weather.city}, {weather.country}
                                </h2>

                                <div className="mt-6 grid gap-4 md:grid-cols-4">

                                    <div className="rounded-xl bg-white p-5 shadow">
                                        <p className="text-gray-500">
                                            Temperature
                                        </p>
                                        <p className="mt-2 text-3xl font-bold text-green-700">
                                            {weather.temperature}°C
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white p-5 shadow">
                                        <p className="text-gray-500">
                                            Humidity
                                        </p>
                                        <p className="mt-2 text-3xl font-bold text-blue-700">
                                            {weather.humidity}%
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white p-5 shadow">
                                        <p className="text-gray-500">
                                            Rainfall
                                        </p>
                                        <p className="mt-2 text-3xl font-bold text-cyan-700">
                                            {weather.rainfall} mm
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white p-5 shadow">
                                        <p className="text-gray-500">
                                            Condition
                                        </p>
                                        <p className="mt-2 text-xl font-bold text-gray-800">
                                            {weather.condition}
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-6 rounded-xl bg-white p-5 shadow">
                                    <h3 className="font-bold text-green-800">
                                        🌱 Farming Advice
                                    </h3>

                                    <p className="mt-2 text-gray-600">
                                        {weather.rainfall > 5
                                            ? "Rainfall is currently high. Consider reducing irrigation."
                                            : weather.temperature > 35
                                            ? "High temperature detected. Ensure adequate irrigation for crops."
                                            : "Weather conditions look suitable for normal farming activities."}
                                    </p>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather