import { useState } from "react"
import { supabase } from "../lib/supabaseClient"
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            alert(error.message)
            return
        }

        alert("Login successful!")
        window.location.href = "/dashboard"
    }
    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                <div className="text-center">
                    <div className="text-5xl">🌾</div>

                    <h1 className="mt-4 text-3xl font-bold text-green-800">
                        KrishiMitra
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Your Smart Farming Companion
                    </p>
                </div>

                <div className="mt-8">

                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                    />

                </div>

                <div className="mt-5">

                    <label className="block text-sm font-medium text-gray-700">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                    />

                </div>

                <button
                    onClick={handleLogin}
                    className="mt-7 w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800">
                    Login
                </button>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?
                    <span
                        onClick={() => window.location.href = "/register"}
                        className="ml-1 cursor-pointer font-semibold text-green-700"
                    >
                        Create Account
                    </span>
                </p>

            </div>

        </div>
    )
}

export default Login