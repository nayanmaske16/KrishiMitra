import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Navbar from "../components/Navbar"

function Dashboard() {
    const [user, setUser] = useState(null)
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const getUserAndProfile = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser()

            setUser(user)

            if (user) {
                const { data: profileData } = await supabase
                    .from("profiles")
                    .select("full_name")
                    .eq("id", user.id)
                    .single()

                setProfile(profileData)
            }
        }

        getUserAndProfile()
    }, [])

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-green-50 p-8">
                <div className="mx-auto max-w-6xl">

                    {/* Header */}
                    <h1 className="text-4xl font-bold text-green-800">
                        🌾 KrishiMitra Dashboard
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Welcome to your smart farming dashboard
                    </p>

                    {/* Logout */}
                    <button
                        onClick={async () => {
                            await supabase.auth.signOut()
                            window.location.href = "/login"
                        }}
                        className="mt-4 rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
                    >
                        Logout
                    </button>

                    {/* User Welcome */}
                    <div className="mt-8 rounded-2xl bg-white p-6 shadow">
                        <h2 className="text-2xl font-bold text-green-700">
                            Welcome, {profile?.full_name || "Farmer"}! 👋
                        </h2>

                        {user && (
                            <p className="mt-2 text-gray-600">
                                Logged in as: {user.email}
                            </p>
                        )}
                    </div>

                    {/* Features */}
                    <div className="mt-8 grid gap-6 md:grid-cols-3">

                        {/* My Farms */}
                        <div
                            onClick={() => window.location.href = "/farms"}
                            className="cursor-pointer rounded-2xl bg-white p-6 shadow transition hover:scale-105 hover:shadow-xl"
                        >
                            <div className="text-4xl">🚜</div>

                            <h3 className="mt-4 text-xl font-bold">
                                My Farms
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Manage your farms and field information.
                            </p>
                        </div>

                        {/* Crop Recommendation */}
                        <div
                            onClick={() =>
                                window.location.href = "/crop-recommendation"
                            }
                            className="cursor-pointer rounded-2xl bg-white p-6 shadow transition hover:scale-105 hover:shadow-xl"
                        >
                            <div className="text-4xl">🌱</div>

                            <h3 className="mt-4 text-xl font-bold">
                                Crop Recommendation
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Get the best crop suggestions.
                            </p>
                        </div>

                        {/* Disease Detection */}
                        <div
                            onClick={() =>
                                window.location.href = "/disease-detection"
                            }
                            className="cursor-pointer rounded-2xl bg-white p-6 shadow transition hover:scale-105 hover:shadow-xl"
                        >
                            <div className="text-4xl">🦠</div>

                            <h3 className="mt-4 text-xl font-bold">
                                Disease Detection
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Detect crop diseases using AI.
                            </p>
                        </div>

                        {/* Irrigation */}
                        <div
                            onClick={() =>
                                window.location.href = "/irrigation"
                            }
                            className="cursor-pointer rounded-2xl bg-white p-6 shadow transition hover:scale-105 hover:shadow-xl"
                        >
                            <div className="text-4xl">💧</div>

                            <h3 className="mt-4 text-xl font-bold">
                                Smart Irrigation
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Get smart watering advice.
                            </p>
                        </div>

                        {/* Soil Analysis */}
                        <div
                            onClick={() =>
                                window.location.href = "/soil-analysis"
                            }
                            className="cursor-pointer rounded-2xl bg-white p-6 shadow transition hover:scale-105 hover:shadow-xl"
                        >
                            <div className="text-4xl">🪨</div>

                            <h3 className="mt-4 text-xl font-bold">
                                Soil Analysis
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Analyze your soil health.
                            </p>
                        </div>

                        {/* Weather */}
                        <div
                            onClick={() =>
                                window.location.href = "/weather"
                            }
                            className="cursor-pointer rounded-2xl bg-white p-6 shadow transition hover:scale-105 hover:shadow-xl"
                        >
                            <div className="text-4xl">☁️</div>

                            <h3 className="mt-4 text-xl font-bold">
                                Weather
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Check current farming weather.
                            </p>
                        </div>

                        {/* AI Assistant */}
                        <div
                            onClick={() =>
                                window.location.href = "/ai-assistant"
                            }
                            className="cursor-pointer rounded-2xl bg-white p-6 shadow transition hover:scale-105 hover:shadow-xl"
                        >
                            <div className="text-4xl">🤖</div>

                            <h3 className="mt-4 text-xl font-bold">
                                AI Assistant
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Ask questions about farming.
                            </p>
                        </div>

                        {/* Analytics */}
                        <div
                            onClick={() =>
                                window.location.href = "/analytics"
                            }
                            className="cursor-pointer rounded-2xl bg-white p-6 shadow transition hover:scale-105 hover:shadow-xl"
                        >
                            <div className="text-4xl">📊</div>

                            <h3 className="mt-4 text-xl font-bold">
                                Analytics
                            </h3>

                            <p className="mt-2 text-gray-500">
                                View your farming analytics.
                            </p>
                        </div>

                        {/* Admin */}
                        <div
                            onClick={() =>
                                window.location.href = "/admin"
                            }
                            className="cursor-pointer rounded-2xl bg-white p-6 shadow transition hover:scale-105 hover:shadow-xl"
                        >
                            <div className="text-4xl">👨‍💼</div>

                            <h3 className="mt-4 text-xl font-bold">
                                Admin
                            </h3>

                            <p className="mt-2 text-gray-500">
                                Manage the KrishiMitra system.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard