function DiseaseDetection() {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-8">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-3xl font-bold text-green-800">
          🦠 Crop Disease Detection
        </h1>

        <p className="mt-2 text-gray-600">
          Upload a crop image to identify possible diseases.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">

          <div className="rounded-xl border-2 border-dashed border-green-300 p-10 text-center">

            <div className="text-5xl">📷</div>

            <h2 className="mt-4 text-xl font-semibold">
              Upload Crop Image
            </h2>

            <p className="mt-2 text-gray-500">
              JPG, PNG or JPEG
            </p>

            <input
              type="file"
              accept="image/*"
              className="mt-5 block w-full text-sm text-gray-600"
            />

          </div>

          <button className="mt-7 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800">
            🤖 Analyze Image
          </button>

        </div>

        {/* Demo Result */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="text-xl font-bold text-green-800">
            🔍 Sample Analysis
          </h2>

          <div className="mt-5 rounded-lg bg-green-50 p-4">

            <p className="font-semibold">
              Possible Disease
            </p>

            <p className="mt-1 text-lg text-green-700">
              Leaf Blight
            </p>

            <p className="mt-4 font-semibold">
              Suggested Action
            </p>

            <p className="mt-1 text-gray-600">
              Remove affected leaves and consult an agricultural expert
              for appropriate treatment.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Confidence: 92%
            </p>

          </div>

          <p className="mt-4 text-sm text-gray-500">
            ⚠️ Demo result. AI image analysis will be connected later.
          </p>

        </div>

      </div>
    </div>
  )
}

export default DiseaseDetection