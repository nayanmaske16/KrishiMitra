import { supabase } from "../lib/supabaseClient"

function Navbar() {
    const logout = async () => {
        await supabase.auth.signOut()
        window.location.href = "/login"
    }

    return (
        <nav className="bg-green-800 px-6 py-4 text-white shadow">
            <div className="mx-auto flex max-w-7xl items-center justify-between">

                <button
                    onClick={() => window.location.href = "/dashboard"}
                    className="text-xl font-bold"
                >
                    🌾 KrishiMitra
                </button>

                <div className="hidden gap-5 md:flex">

                    <button
                        onClick={() => window.location.href = "/dashboard"}
                        className="hover:text-green-200"
                    >
                        Dashboard
                    </button>

                    <button
                        onClick={() => window.location.href = "/crop-recommendation"}
                        className="hover:text-green-200"
                    >
                        Crops
                    </button>

                    <button
                        onClick={() => window.location.href = "/disease-detection"}
                        className="hover:text-green-200"
                    >
                        Disease
                    </button>

                    <button
                        onClick={() => window.location.href = "/soil-analysis"}
                        className="hover:text-green-200"
                    >
                        Soil
                    </button>

                    <button
                        onClick={() => window.location.href = "/irrigation"}
                        className="hover:text-green-200"
                    >
                        Irrigation
                    </button>

                    <button
                        onClick={() => window.location.href = "/weather"}
                        className="hover:text-green-200"
                    >
                        Weather
                    </button>

                    <button
                        onClick={() => window.location.href = "/ai-assistant"}
                        className="hover:text-green-200"
                    >
                        AI Assistant
                    </button>

                    <button
                        onClick={() => window.location.href = "/farms"}
                        className="hover:text-green-200"
                    >
                        Farms
                    </button>

                    <button
                        onClick={() => window.location.href = "/analytics"}
                        className="hover:text-green-200"
                    >
                        Analytics
                    </button>

                    <button
                        onClick={logout}
                        className="rounded-lg bg-red-600 px-3 py-1 hover:bg-red-700"
                    >
                        Logout
                    </button>

                </div>

            </div>
        </nav>
    )
}

export default Navbar