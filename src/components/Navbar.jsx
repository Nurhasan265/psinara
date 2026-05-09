import { Link } from "react-router-dom"

export default function Navbar() {
  return (

    <nav className="flex justify-between items-center px-8 py-6 bg-white shadow-sm sticky top-0 z-50">

      {/* LOGO */}
      <div>

        <h1 className="text-2xl font-bold">
          MindSpace
        </h1>

        <p className="text-sm text-gray-500">
          Mental Health Platform
        </p>

      </div>

      {/* MENU */}
      <div className="hidden md:flex gap-4">

        <Link
          to="/"
          className="px-5 py-3 rounded-2xl hover:bg-gray-100"
        >
          Home
        </Link>

        <Link
          to="/psychologists"
          className="px-5 py-3 rounded-2xl hover:bg-gray-100"
        >
          Psikolog
        </Link>

        <Link
          to="/booking"
          className="px-5 py-3 rounded-2xl hover:bg-gray-100"
        >
          Booking
        </Link>

        <Link
          to="/login"
          className="px-5 py-3 rounded-2xl bg-black text-white"
        >
          Login
        </Link>

      </div>

    </nav>

  )
}