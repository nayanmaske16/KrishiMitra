function AIAssistant() {
  return (
    <div className="min-h-screen bg-green-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-3xl font-bold text-green-800">
          🤖 KrishiMitra AI Assistant
        </h1>

        <p className="mt-2 text-gray-600">
          Ask questions about crops, soil, irrigation and farming.
        </p>

        {/* Chat Area */}

        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-lg">

          <div className="h-96 overflow-y-auto p-6">

            {/* AI Message */}

            <div className="flex gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                🤖
              </div>

              <div className="max-w-xl rounded-2xl rounded-tl-none bg-green-50 p-4">
                <p className="font-semibold text-green-800">
                  KrishiMitra AI
                </p>

                <p className="mt-1 text-gray-700">
                  Hello! 👋 I can help you with crop selection, soil,
                  irrigation, diseases and other farming questions.
                </p>
              </div>
            </div>

            {/* Demo User Message */}

            <div className="mt-6 flex justify-end">

              <div className="max-w-xl rounded-2xl rounded-tr-none bg-green-700 p-4 text-white">
                Which crop is suitable for black soil?
              </div>

            </div>

            {/* Demo AI Response */}

            <div className="mt-6 flex gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                🤖
              </div>

              <div className="max-w-xl rounded-2xl rounded-tl-none bg-green-50 p-4">

                <p className="font-semibold text-green-800">
                  KrishiMitra AI
                </p>

                <p className="mt-1 text-gray-700">
                  Black soil is generally suitable for crops such as
                  cotton, soybean and some cereals. The best choice
                  depends on factors such as rainfall, season and
                  soil nutrients.
                </p>

              </div>

            </div>

          </div>

          {/* Message Input */}

          <div className="border-t border-gray-200 p-4">

            <div className="flex gap-3">

              <input
                type="text"
                placeholder="Ask your farming question..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
              />

              <button className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800">
                Send
              </button>

            </div>

            <p className="mt-2 text-xs text-gray-500">
              ⚠️ Demo assistant. Real AI integration will be connected later.
            </p>

          </div>

        </div>

      </div>
    </div>
  )
}

export default AIAssistant