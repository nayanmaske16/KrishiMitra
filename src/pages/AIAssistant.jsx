import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
import Navbar from "../components/Navbar"

function AIAssistant() {
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "Namaste! 🌾 I am KrishiMitra AI. Ask me anything about crops, soil, irrigation, fertilizers, weather, or crop diseases.",
        },
    ])

    const sendMessage = async () => {
        if (!message.trim() || loading) return

        const userMessage = message.trim()

        setMessages((previous) => [
            ...previous,
            {
                sender: "user",
                text: userMessage,
            },
        ])

        setMessage("")
        setLoading(true)

        try {
            const {
                data: { user },
            } = await supabase.auth.getUser()

            if (!user) {
                alert("Please login first.")
                setLoading(false)
                return
            }

            const { data, error } = await supabase.functions.invoke(
                "ai-assistant",
                {
                    body: {
                        message: userMessage,
                    },
                }
            )

            if (error) {
                console.error(error)
                throw new Error(error.message)
            }

            if (data?.error) {
                throw new Error(data.error)
            }

            setMessages((previous) => [
                ...previous,
                {
                    sender: "ai",
                    text:
                        data?.answer ||
                        "Sorry, I could not generate an answer.",
                },
            ])
        } catch (error) {
            console.error(error)

            setMessages((previous) => [
                ...previous,
                {
                    sender: "ai",
                    text:
                        "⚠️ Sorry, I could not connect to the AI service. Please try again.",
                },
            ])
        }

        setLoading(false)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            sendMessage()
        }
    }

    const askQuestion = (question) => {
        setMessage(question)
    }

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-green-50 p-8">
                <div className="mx-auto max-w-4xl">

                    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

                        {/* Header */}
                        <div className="bg-green-800 p-6 text-white">
                            <h1 className="text-3xl font-bold">
                                🤖 KrishiMitra AI Assistant
                            </h1>

                            <p className="mt-2 text-green-100">
                                Powered by Gemini AI
                            </p>
                        </div>

                        {/* Messages */}
                        <div className="h-[500px] overflow-y-auto p-6">

                            {messages.map((item, index) => (
                                <div
                                    key={index}
                                    className={`mb-5 flex ${
                                        item.sender === "user"
                                            ? "justify-end"
                                            : "justify-start"
                                    }`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-5 py-4 ${
                                            item.sender === "user"
                                                ? "bg-green-700 text-white"
                                                : "bg-gray-100 text-gray-800"
                                        }`}
                                    >
                                        <p className="text-sm font-semibold">
                                            {item.sender === "user"
                                                ? "You"
                                                : "KrishiMitra AI"}
                                        </p>

                                        <p className="mt-2 whitespace-pre-wrap leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {loading && (
                                <div className="mb-5 flex justify-start">
                                    <div className="rounded-2xl bg-gray-100 px-5 py-4 text-gray-600">
                                        🤖 KrishiMitra AI is thinking...
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Suggested Questions */}
                        <div className="border-t bg-green-50 p-4">

                            <p className="mb-3 text-sm font-semibold text-gray-600">
                                Try asking:
                            </p>

                            <div className="flex flex-wrap gap-2">

                                <button
                                    onClick={() =>
                                        askQuestion(
                                            "Which crop is suitable for black soil?"
                                        )
                                    }
                                    className="rounded-full bg-white px-4 py-2 text-sm shadow hover:bg-green-100"
                                >
                                    🌾 Best crop for black soil
                                </button>

                                <button
                                    onClick={() =>
                                        askQuestion(
                                            "When should I irrigate my crop?"
                                        )
                                    }
                                    className="rounded-full bg-white px-4 py-2 text-sm shadow hover:bg-green-100"
                                >
                                    💧 Irrigation advice
                                </button>

                                <button
                                    onClick={() =>
                                        askQuestion(
                                            "How can I identify crop disease?"
                                        )
                                    }
                                    className="rounded-full bg-white px-4 py-2 text-sm shadow hover:bg-green-100"
                                >
                                    🦠 Disease help
                                </button>

                                <button
                                    onClick={() =>
                                        askQuestion(
                                            "What fertilizer should I use?"
                                        )
                                    }
                                    className="rounded-full bg-white px-4 py-2 text-sm shadow hover:bg-green-100"
                                >
                                    🌱 Fertilizer advice
                                </button>

                            </div>
                        </div>

                        {/* Input */}
                        <div className="flex gap-3 border-t p-5">

                            <input
                                type="text"
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                                onKeyDown={handleKeyDown}
                                placeholder="Ask your farming question..."
                                disabled={loading}
                                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600 disabled:bg-gray-100"
                            />

                            <button
                                onClick={sendMessage}
                                disabled={loading}
                                className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800 disabled:opacity-50"
                            >
                                {loading ? "Thinking..." : "Send 🚀"}
                            </button>

                        </div>

                    </div>

                    <div className="mt-6 rounded-xl border border-green-300 bg-green-50 p-5">
                        <p className="text-sm text-green-800">
                            🤖 <strong>Real AI:</strong> KrishiMitra uses a
                            secure backend connection to Gemini. Your API key
                            is not exposed in the browser.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AIAssistant