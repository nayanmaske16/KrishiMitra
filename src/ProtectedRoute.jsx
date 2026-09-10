import { useEffect, useState } from "react"
import { supabase } from "./lib/supabaseClient"

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()

      setUser(data.user)
      setLoading(false)
    }

    checkUser()
  }, [])

  if (loading) {
    return <div className="p-8">Loading...</div>
  }

  if (!user) {
    window.location.href = "/login"
    return null
  }

  return children
}

export default ProtectedRoute