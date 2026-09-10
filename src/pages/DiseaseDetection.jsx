import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Navbar from "../components/Navbar"

function DiseaseDetection() {
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState("")
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleImageChange = (event) => {
        const file = event.target.files[0]

        if (!file) return

        setImage(file)
        setPreview(URL.createObjectURL(file))
        setResult(null)
    }

    const detectDisease = async () => {
        if (!image) {
            alert("Please upload a crop image first.")
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

        try {
            // Create a unique file name
            const fileName = `${user.id}/${Date.now()}-${image.name}`

            // Upload image to Supabase Storage
            const { error: uploadError } = await supabase.storage
                .from("crop-images")
                .upload(fileName, image)

            if (uploadError) {
                console.error(uploadError)
                alert("Could not upload image.")
                setLoading(false)
                return
            }

            // Get public image URL
            const { data: publicUrlData } = supabase.storage
                .from("crop-images")
                .getPublicUrl(fileName)

            const imageUrl = publicUrlData.publicUrl

            // Demo AI result
            const disease = "Leaf Spot"
            const confidence = 92
            const recommendation =
                "Remove infected leaves and use a suitable fungicide."

            // Save detection in database
            const { error: databaseError } = await supabase
                .from("disease_detections")
                .insert({
                    user_id: user.id,
                    image_url: imageUrl,
                    disease_name: disease,
                    confidence: confidence,
                    recommendation: recommendation,
                })

            if (databaseError) {
                console.error(databaseError)
                alert("DATABASE ERROR: " + databaseError.message)
                setLoading(false)
                return
            }


            setResult({
                disease: disease,
                confidence: confidence + "%",
                recommendation: recommendation,
                imageUrl: imageUrl,
            })

            alert("Disease detection saved successfully!")
        } catch (error) {
            console.error(error)
            alert("Something went wrong.")
        }

        setLoading(false)
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-green-50 p-8">
                <div className="mx-auto max-w-4xl">

                    <div className="rounded-2xl bg-white p-8 shadow-lg">

                        <h1 className="text-3xl font-bold text-green-800">
                            🦠 Crop Disease Detection
                        </h1>

                        <p className="mt-2 text-gray-600">
                            Upload a crop image to check for possible diseases.
                        </p>

                        <div className="mt-8">
                            <label className="block font-semibold text-gray-700">
                                Upload Crop Image
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="mt-3 w-full rounded-lg border border-gray-300 p-3"
                            />
                        </div>

                        {preview && (
                            <div className="mt-6">
                                <h2 className="font-bold text-green-800">
                                    Image Preview
                                </h2>

                                <img
                                    src={preview}
                                    alt="Crop preview"
                                    className="mt-3 max-h-80 rounded-xl border object-contain"
                                />
                            </div>
                        )}

                        <button
                            onClick={detectDisease}
                            disabled={loading}
                            className="mt-6 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50"
                        >
                            {loading
                                ? "Uploading & Detecting..."
                                : "🔍 Detect Disease"}
                        </button>

                        {result && (
                            <div className="mt-8 rounded-2xl bg-green-50 p-6">

                                <h2 className="text-2xl font-bold text-green-800">
                                    🔬 Detection Result
                                </h2>

                                <div className="mt-5 grid gap-4 md:grid-cols-2">

                                    <div className="rounded-xl bg-white p-5 shadow">
                                        <p className="text-gray-500">
                                            Disease
                                        </p>

                                        <p className="mt-2 text-xl font-bold text-red-600">
                                            {result.disease}
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-white p-5 shadow">
                                        <p className="text-gray-500">
                                            Confidence
                                        </p>

                                        <p className="mt-2 text-xl font-bold text-green-700">
                                            {result.confidence}
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-4 rounded-xl bg-white p-5 shadow">
                                    <p className="font-bold text-green-800">
                                        🌱 Recommendation
                                    </p>

                                    <p className="mt-2 text-gray-600">
                                        {result.recommendation}
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

export default DiseaseDetection