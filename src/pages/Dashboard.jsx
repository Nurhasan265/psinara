import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Dashboard() {

  const [bookings, setBookings] =
    useState([])

  // LOAD DATA
  useEffect(() => {

    fetchBookings()

  }, [])


  // FETCH BOOKINGS
  const fetchBookings = async () => {

    const { data, error } =
      await supabase
        .from("bookings")
        .select("*")
        .order("id", { ascending: false })

    if (error) {

      console.log(error)

    } else {

      setBookings(data)

    }
  }


  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-7xl mx-auto">

        <div className="mb-10">

          <h1 className="text-4xl font-bold mb-3">
            Dashboard Admin
          </h1>

          <p className="text-gray-600">
            Monitoring booking client realtime
          </p>

        </div>


        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-black text-white">

              <tr>

                <th className="p-5 text-left">
                  Client
                </th>

                <th className="p-5 text-left">
                  Psikolog
                </th>

                <th className="p-5 text-left">
                  Tanggal
                </th>

                <th className="p-5 text-left">
                  Jam
                </th>

                <th className="p-5 text-left">
                  Payment
                </th>

              </tr>

            </thead>


            <tbody>

              {bookings.map((booking) => (

                <tr
                  key={booking.id}
                  className="border-b"
                >

                  <td className="p-5">
                    {booking.client_name}
                  </td>

                  <td className="p-5">
                    {booking.psychologist}
                  </td>

                  <td className="p-5">
                    {booking.booking_date}
                  </td>

                  <td className="p-5">
                    {booking.booking_time}
                  </td>

                  <td className="p-5">
                    {booking.payment_type}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )
}