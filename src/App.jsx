import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home"
import Psychologists from "./pages/Psychologists"
import Booking from "./pages/Booking"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

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