import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CropRecommendation from "./pages/CropRecommendation"
import DiseaseDetection from "./pages/DiseaseDetection"
import Irrigation from "./pages/Irrigation"
import SoilAnalysis from "./pages/SoilAnalysis"
import Weather from "./pages/Weather"
import AIAssistant from "./pages/AIAssistant"
import Analytics from "./pages/Analytics"
import Admin from "./pages/Admin"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/crop-recommendation"
          element={<CropRecommendation />}
        />

        <Route
          path="/disease-detection"
          element={<DiseaseDetection />}
        />

        <Route
          path="/irrigation"
          element={<Irrigation />}
        />

        <Route
          path="/soil-analysis"
          element={<SoilAnalysis />}
        />

        <Route
          path="/weather"
          element={<Weather />}
        />

        <Route
          path="/ai-assistant"
          element={<AIAssistant />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App