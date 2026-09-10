import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Navbar from "../components/Navbar"

function Admin() {
    const [stats, setStats] = useState({
        users: 0,
        farms: 0,
        crops: 0,
        diseases: 0,
    })

    const [loading, setLoading] = useState(true)
    const [authorized, setAuthorized] = useState(false)

    useEffect(() => {
        const checkAdmin = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser()

            if (!user) {
                window.location.href = "/login"
                return
            }

            const { data: profile, error } = await supabase
                .from("profiles")
                .select("role")
                .eq("id", user.id)
                .single()

            if (error || profile?.role !== "admin") {
                alert("Access denied. Admins only.")
                window.location.href = "/dashboard"
                return
            }

            setAuthorized(true)

            const { count: users } = await supabase
                .from("profiles")
                .select("*", { count: "exact", head: true })

            const { count: farms } = await supabase
                .from("farms")
                .select("*", { count: "exact", head: true })

            const { count: crops } = await supabase
                .from("crop_recommendations")
                .select("*", { count: "exact", head: true })

            const { count: diseases } = await supabase
                .from("disease_detections")
                .select("*", { count: "exact", head: true })

            setStats({
                users: users || 0,
                farms: farms || 0,
                crops: crops || 0,
                diseases: diseases || 0,
            })

            setLoading(false)
        }

        checkAdmin()
    }, [])

    if (!authorized) {
        return (
            <div className="min-h-screen bg-green-50 flex items-center justify-center">
                <p className="text-lg font-semibold text-green-800">
                    Checking admin access...
                </p>
            </div>
        )
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-green-50 p-8">
                <div className="mx-auto max-w-6xl">

                    <div className="rounded-2xl bg-white p-8 shadow-lg">

                        <h1 className="text-3xl font-bold text-green-800">
                            👨‍💼 Admin Dashboard
                        </h1>

                        <p className="mt-2 text-gray-600">
                            KrishiMitra system overview
                        </p>

                        {loading ? (
                            <div className="mt-8 text-center">
                                Loading statistics...
                            </div>
                        ) : (
                            <div className="mt-8 grid gap-6 md:grid-cols-4">

                                <div className="rounded-xl bg-blue-50 p-6">
                                    <div className="text-4xl">👥</div>
                                    <h2 className="mt-3 text-lg font-bold">
                                        Users
                                    </h2>
                                    <p className="mt-2 text-3xl font-bold text-blue-700">
                                        {stats.users}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-green-50 p-6">
                                    <div className="text-4xl">🚜</div>
                                    <h2 className="mt-3 text-lg font-bold">
                                        Farms
                                    </h2>
                                    <p className="mt-2 text-3xl font-bold text-green-700">
                                        {stats.farms}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-yellow-50 p-6">
                                    <div className="text-4xl">🌾</div>
                                    <h2 className="mt-3 text-lg font-bold">
                                        Crop Recommendations
                                    </h2>
                                    <p className="mt-2 text-3xl font-bold text-yellow-700">
                                        {stats.crops}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-red-50 p-6">
                                    <div className="text-4xl">🦠</div>
                                    <h2 className="mt-3 text-lg font-bold">
                                        Disease Detections
                                    </h2>
                                    <p className="mt-2 text-3xl font-bold text-red-700">
                                        {stats.diseases}
                                    </p>
                                </div>

                            </div>
                        )}

                        <div className="mt-8 rounded-xl border border-green-300 bg-green-50 p-5">
                            <h2 className="font-bold text-green-800">
                                🔐 Admin Access
                            </h2>

                            <p className="mt-2 text-sm text-green-700">
                                Your account has administrator privileges.
                                Only users with the admin role can access this page.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin