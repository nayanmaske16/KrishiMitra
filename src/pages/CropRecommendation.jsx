import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Navbar from "../components/Navbar"

function CropRecommendation() {
    const [soilType, setSoilType] = useState("")
    const [season, setSeason] = useState("")
    const [crop, setCrop] = useState("")
    const [message, setMessage] = useState("")

    const getRecommendation = async () => {
        if (!soilType || !season) {
            setMessage("Please select soil type and season.")
            return
        }

        let recommendedCrop = "Wheat"

        if (soilType === "Black Soil" && season === "Kharif") {
            recommendedCrop = "Cotton"
        } else if (soilType === "Black Soil") {
            recommendedCrop = "Wheat"
        } else if (soilType === "Red Soil") {
            recommendedCrop = "Groundnut"
        } else if (soilType === "Alluvial Soil") {
            recommendedCrop = "Rice"
        }

        setCrop(recommendedCrop)

        const {
            data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
            setMessage("Please login first.")
            return
        }

        const { error } = await supabase
            .from("crop_recommendations")
            .insert({
                user_id: user.id,
                soil_type: soilType,
                season: season,
                recommended_crop: recommendedCrop,
            })

        if (error) {
            console.error(error)
            setMessage("Could not save recommendation.")
            return
        }

        setMessage("Recommendation saved successfully!")
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-green-50 p-8">      
                <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">

                <h1 className="text-3xl font-bold text-green-800">
                    🌱 Crop Recommendation
                </h1>

                <p className="mt-2 text-gray-600">
                    Get a crop recommendation based on your soil and season.
                </p>

                <label className="mt-6 block font-medium">
                    Soil Type
                </label>

                <select
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value)}
                    className="mt-2 w-full rounded-lg border p-3"
                >
                    <option value="">Select soil type</option>
                    <option>Black Soil</option>
                    <option>Red Soil</option>
                    <option>Alluvial Soil</option>
                </select>

                <label className="mt-5 block font-medium">
                    Season
                </label>

                <select
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                    className="mt-2 w-full rounded-lg border p-3"
                >
                    <option value="">Select season</option>
                    <option>Kharif</option>
                    <option>Rabi</option>
                    <option>Zaid</option>
                </select>

                <button
                    onClick={getRecommendation}
                    className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800"
                >
                    Get Recommendation
                </button>

                {crop && (
                    <div className="mt-6 rounded-lg bg-green-100 p-5">
                        <p className="text-gray-600">
                            Recommended Crop:
                        </p>

                        <p className="mt-1 text-2xl font-bold text-green-800">
                            🌾 {crop}
                        </p>
                    </div>
                )}

                {message && (
                    <p className="mt-4 text-center text-gray-600">
                        {message}
                    </p>
                )}

            </div>
            </div>
        </>
    )
}
export default CropRecommendation