import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Navbar from "../components/Navbar"

function SoilAnalysis() {
    const [nitrogen, setNitrogen] = useState("")
    const [phosphorus, setPhosphorus] = useState("")
    const [potassium, setPotassium] = useState("")
    const [ph, setPh] = useState("")
    const [moisture, setMoisture] = useState("")
    const [result, setResult] = useState(null)

    const analyzeSoil = async () => {
        if (!nitrogen || !phosphorus || !potassium || !ph || !moisture) {
            alert("Please fill all soil values.")
            return
        }

        const {
            data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
            alert("Please login first.")
            return
        }

        let recommendation = "Soil condition is suitable for farming."

        if (Number(nitrogen) < 40) {
            recommendation =
                "Nitrogen is low. Consider nitrogen-rich fertilizer."
        } else if (Number(ph) < 5.5) {
            recommendation =
                "Soil is acidic. Consider applying lime."
        } else if (Number(moisture) < 30) {
            recommendation =
                "Soil moisture is low. Irrigation may be required."
        }

        const { error } = await supabase
            .from("soil_analyses")
            .insert({
                user_id: user.id,
                nitrogen: Number(nitrogen),
                phosphorus: Number(phosphorus),
                potassium: Number(potassium),
                ph: Number(ph),
                moisture: Number(moisture),
                recommendation: recommendation,
            })

        if (error) {
            console.error(error)
            alert("Could not save soil analysis.")
            return
        }

        setResult(recommendation)
        alert("Soil analysis saved successfully!")
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-green-50 p-8">
                <div className="mx-auto max-w-2xl">

                    <div className="rounded-2xl bg-white p-8 shadow-lg">

                        <h1 className="text-3xl font-bold text-green-800">
                            🪨 Soil Analysis
                        </h1>

                        <p className="mt-2 text-gray-600">
                            Enter your soil values to get a farming recommendation.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            <input
                                type="number"
                                placeholder="Nitrogen (N)"
                                value={nitrogen}
                                onChange={(e) => setNitrogen(e.target.value)}
                                className="rounded-lg border p-3 outline-none focus:border-green-600"
                            />

                            <input
                                type="number"
                                placeholder="Phosphorus (P)"
                                value={phosphorus}
                                onChange={(e) => setPhosphorus(e.target.value)}
                                className="rounded-lg border p-3 outline-none focus:border-green-600"
                            />

                            <input
                                type="number"
                                placeholder="Potassium (K)"
                                value={potassium}
                                onChange={(e) => setPotassium(e.target.value)}
                                className="rounded-lg border p-3 outline-none focus:border-green-600"
                            />

                            <input
                                type="number"
                                step="0.1"
                                placeholder="pH"
                                value={ph}
                                onChange={(e) => setPh(e.target.value)}
                                className="rounded-lg border p-3 outline-none focus:border-green-600"
                            />

                            <input
                                type="number"
                                placeholder="Moisture (%)"
                                value={moisture}
                                onChange={(e) => setMoisture(e.target.value)}
                                className="rounded-lg border p-3 outline-none focus:border-green-600 md:col-span-2"
                            />

                        </div>

                        <button
                            onClick={analyzeSoil}
                            className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800"
                        >
                            🔬 Analyze Soil
                        </button>

                        {result && (
                            <div className="mt-6 rounded-xl bg-green-50 p-6">

                                <h2 className="text-xl font-bold text-green-800">
                                    Soil Recommendation
                                </h2>

                                <p className="mt-3 text-gray-700">
                                    {result}
                                </p>

                            </div>
                        )}

                    </div>

                </div>
            </div>
        </>
    )
}

export default SoilAnalysis