import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Navbar from "../components/Navbar"
function Irrigation() {
    const [cropName, setCropName] = useState("")
    const [soilMoisture, setSoilMoisture] = useState("")
    const [result, setResult] = useState(null)

    const getIrrigationAdvice = async () => {
        if (!cropName || !soilMoisture) {
            alert("Please enter crop name and soil moisture.")
            return
        }

        const {
            data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
            alert("Please login first.")
            return
        }

        const moisture = Number(soilMoisture)

        let irrigationNeeded
        let waterAmount
        let recommendation

        if (moisture < 30) {
            irrigationNeeded = true
            waterAmount = 500
            recommendation = "Soil moisture is low. Irrigation is recommended."
        } else if (moisture < 50) {
            irrigationNeeded = true
            waterAmount = 300
            recommendation = "Moderate moisture detected. Light irrigation is recommended."
        } else {
            irrigationNeeded = false
            waterAmount = 0
            recommendation = "Soil moisture is sufficient. Irrigation is not required now."
        }

        const { error } = await supabase
            .from("irrigation_advice")
            .insert({
                user_id: user.id,
                crop_name: cropName,
                soil_moisture: moisture,
                irrigation_needed: irrigationNeeded,
                water_amount: waterAmount,
                recommendation: recommendation,
            })

        if (error) {
            console.error(error)
            alert("Could not save irrigation advice.")
            return
        }

        setResult({
            irrigationNeeded,
            waterAmount,
            recommendation,
        })

        alert("Irrigation advice saved successfully!")
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-green-50 p-8">
                <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">

                    <h1 className="text-3xl font-bold text-green-800">
                        💧 Smart Irrigation
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Get irrigation advice based on soil moisture.
                    </p>

                    <label className="mt-6 block font-medium">
                        Crop Name
                    </label>

                    <input
                        type="text"
                        placeholder="Example: Cotton"
                        value={cropName}
                        onChange={(e) => setCropName(e.target.value)}
                        className="mt-2 w-full rounded-lg border p-3"
                    />

                    <label className="mt-5 block font-medium">
                        Soil Moisture (%)
                    </label>

                    <input
                        type="number"
                        placeholder="Example: 25"
                        value={soilMoisture}
                        onChange={(e) => setSoilMoisture(e.target.value)}
                        className="mt-2 w-full rounded-lg border p-3"
                    />

                    <button
                        onClick={getIrrigationAdvice}
                        className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800"
                    >
                        💧 Get Irrigation Advice
                    </button>

                    {result && (
                        <div className="mt-6 rounded-xl bg-green-50 p-6">

                            <h2 className="text-xl font-bold text-green-800">
                                Irrigation Result
                            </h2>

                            <p className="mt-3">
                                <strong>Irrigation:</strong>{" "}
                                {result.irrigationNeeded ? "Required 💧" : "Not Required ✅"}
                            </p>

                            <p className="mt-2">
                                <strong>Suggested Water:</strong>{" "}
                                {result.waterAmount} litres
                            </p>

                            <p className="mt-2">
                                <strong>Recommendation:</strong>{" "}
                                {result.recommendation}
                            </p>

                        </div>
                    )}

                    <button
                        onClick={() =>
                            window.location.href = "/dashboard"
                        }
                        className="mt-6 w-full rounded-lg border border-green-700 py-3 font-semibold text-green-700 hover:bg-green-50"
                    >
                        ← Back to Dashboard
                    </button>

                </div>
            </div>
        </>
    )
}

export default Irrigation