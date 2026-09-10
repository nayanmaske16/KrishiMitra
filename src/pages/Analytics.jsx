import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Navbar from "../components/Navbar"

function Analytics() {
    const [stats, setStats] = useState({
        crops: 0,
        diseases: 0,
        soil: 0,
        irrigation: 0,
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadStats = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser()

            if (!user) {
                setLoading(false)
                return
            }

            const { count: crops } = await supabase
                .from("crop_recommendations")
                .select("*", { count: "exact", head: true })
                .eq("user_id", user.id)

            const { count: diseases } = await supabase
                .from("disease_detections")
                .select("*", { count: "exact", head: true })
                .eq("user_id", user.id)

            const { count: soil } = await supabase
                .from("soil_analyses")
                .select("*", { count: "exact", head: true })
                .eq("user_id", user.id)

            const { count: irrigation } = await supabase
                .from("irrigation_advice")
                .select("*", { count: "exact", head: true })
                .eq("user_id", user.id)

            setStats({
                crops: crops || 0,
                diseases: diseases || 0,
                soil: soil || 0,
                irrigation: irrigation || 0,
            })

            setLoading(false)
        }

        loadStats()
    }, [])

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-green-50 p-8">
                <div className="mx-auto max-w-6xl">

                    <h1 className="text-3xl font-bold text-green-800">
                        📊 Farming Analytics
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Your KrishiMitra activity overview
                    </p>

                    {loading ? (
                        <div className="mt-8 rounded-2xl bg-white p-8 text-center shadow">
                            <p className="text-gray-600">
                                Loading your analytics...
                            </p>
                        </div>
                    ) : (
                        <>
                            <div className="mt-8 grid gap-6 md:grid-cols-4">

                                <div className="rounded-2xl bg-white p-6 shadow">
                                    <div className="text-4xl">🌱</div>
                                    <p className="mt-4 text-gray-500">
                                        Crop Recommendations
                                    </p>
                                    <p className="mt-2 text-3xl font-bold text-green-700">
                                        {stats.crops}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-6 shadow">
                                    <div className="text-4xl">🦠</div>
                                    <p className="mt-4 text-gray-500">
                                        Disease Detections
                                    </p>
                                    <p className="mt-2 text-3xl font-bold text-green-700">
                                        {stats.diseases}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-6 shadow">
                                    <div className="text-4xl">🪨</div>
                                    <p className="mt-4 text-gray-500">
                                        Soil Analyses
                                    </p>
                                    <p className="mt-2 text-3xl font-bold text-green-700">
                                        {stats.soil}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-6 shadow">
                                    <div className="text-4xl">💧</div>
                                    <p className="mt-4 text-gray-500">
                                        Irrigation Records
                                    </p>
                                    <p className="mt-2 text-3xl font-bold text-green-700">
                                        {stats.irrigation}
                                    </p>
                                </div>

                            </div>

                            <div className="mt-8 rounded-2xl bg-white p-6 shadow">
                                <h2 className="text-xl font-bold text-green-800">
                                    🌾 Your Farming Activity
                                </h2>

                                <p className="mt-3 text-gray-600">
                                    KrishiMitra is tracking your crop,
                                    disease, soil, and irrigation activities.
                                </p>

                                <div className="mt-5 rounded-xl bg-green-50 p-5">
                                    <p className="font-semibold text-green-800">
                                        Total Activities
                                    </p>

                                    <p className="mt-2 text-3xl font-bold text-green-700">
                                        {stats.crops +
                                            stats.diseases +
                                            stats.soil +
                                            stats.irrigation}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </>
    )
}

export default Analytics