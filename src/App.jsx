import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home.jsx"
import Psychologists from "./pages/Psychologists.jsx"
import Booking from "./pages/Booking.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login.jsx"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/psychologists"
          element={<Psychologists />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>
  )
}