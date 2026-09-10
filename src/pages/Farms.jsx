import { useEffect, useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Navbar from "../components/Navbar"

function Farms() {
    const [farms, setFarms] = useState([])
    const [farmName, setFarmName] = useState("")
    const [location, setLocation] = useState("")
    const [area, setArea] = useState("")
    const [soilType, setSoilType] = useState("")
    const [loading, setLoading] = useState(false)

    const loadFarms = async () => {
        const {
            data: { user },
        } = await supabase.auth.getUser()

        if (!user) return

        const { data, error } = await supabase
            .from("farms")
            .select("*")
            .eq("user_id", user.id)
            .order("created_at", { ascending: false })

        if (error) {
            console.error(error)
            return
        }

        setFarms(data || [])
    }

    useEffect(() => {
        loadFarms()
    }, [])

    const addFarm = async () => {
        if (!farmName || !location || !area || !soilType) {
            alert("Please fill all farm details.")
            return
        }

        const {
            data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
            alert("Please login first.")
            return
        }

        setLoading(true)

        const { error } = await supabase
            .from("farms")
            .insert({
                user_id: user.id,
                farm_name: farmName,
                location: location,
                area: Number(area),
                soil_type: soilType,
            })

        setLoading(false)

        if (error) {
            console.error(error)
            alert("Could not save farm.")
            return
        }

        alert("Farm added successfully!")

        setFarmName("")
        setLocation("")
        setArea("")
        setSoilType("")

        loadFarms()
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-green-50 p-8">
                <div className="mx-auto max-w-5xl">

                    {/* Header */}
                    <div className="rounded-2xl bg-white p-8 shadow-lg">

                        <h1 className="text-3xl font-bold text-green-800">
                            🚜 My Farms
                        </h1>

                        <p className="mt-2 text-gray-600">
                            Add and manage your farm information.
                        </p>

                        {/* Form */}
                        <div className="mt-8 grid gap-4 md:grid-cols-2">

                            <input
                                type="text"
                                placeholder="Farm Name"
                                value={farmName}
                                onChange={(e) => setFarmName(e.target.value)}
                                className="rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
                            />

                            <input
                                type="text"
                                placeholder="Location / Village"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
                            />

                            <input
                                type="number"
                                placeholder="Area in acres"
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                className="rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
                            />

                            <select
                                value={soilType}
                                onChange={(e) => setSoilType(e.target.value)}
                                className="rounded-lg border border-gray-300 p-3 outline-none focus:border-green-600"
                            >
                                <option value="">
                                    Select Soil Type
                                </option>
                                <option>Black Soil</option>
                                <option>Red Soil</option>
                                <option>Alluvial Soil</option>
                                <option>Sandy Soil</option>
                                <option>Clay Soil</option>
                            </select>

                        </div>

                        <button
                            onClick={addFarm}
                            disabled={loading}
                            className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50"
                        >
                            {loading ? "Saving..." : "🚜 Add Farm"}
                        </button>

                    </div>

                    {/* Farm List */}
                    <div className="mt-8">

                        <h2 className="text-2xl font-bold text-green-800">
                            Your Farms
                        </h2>

                        {farms.length === 0 ? (
                            <div className="mt-4 rounded-2xl bg-white p-8 text-center shadow">
                                <div className="text-5xl">
                                    🚜
                                </div>

                                <p className="mt-3 text-gray-600">
                                    No farms added yet.
                                </p>
                            </div>
                        ) : (
                            <div className="mt-4 grid gap-5 md:grid-cols-2">

                                {farms.map((farm) => (
                                    <div
                                        key={farm.id}
                                        className="rounded-2xl bg-white p-6 shadow"
                                    >
                                        <div className="text-4xl">
                                            🌾
                                        </div>

                                        <h3 className="mt-4 text-xl font-bold text-green-800">
                                            {farm.farm_name}
                                        </h3>

                                        <p className="mt-2 text-gray-600">
                                            📍 {farm.location}
                                        </p>

                                        <p className="mt-2 text-gray-600">
                                            📐 {farm.area} acres
                                        </p>

                                        <p className="mt-2 text-gray-600">
                                            🪨 {farm.soil_type}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        )}

                    </div>

                </div>
            </div>
        </>
    )
}

export default Farms