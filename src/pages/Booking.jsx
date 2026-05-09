import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function Booking() {

  const [selectedPsychologist, setSelectedPsychologist] =
    useState("Dr. Sarah Amanda")

  const [paymentType, setPaymentType] =
    useState("DP Booking")

const [clientName, setClientName] =
  useState("")

const [bookingDate, setBookingDate] =
  useState("")

const [bookingTime, setBookingTime] =
  useState("09:00")

  const handleBooking = async () => {

  const { data, error } =
    await supabase
      .from("bookings")
      .insert([
        {
          client_name: clientName,
          psychologist: selectedPsychologist,
          booking_date: bookingDate,
          booking_time: bookingTime,
          payment_type: paymentType,
        },
      ])

  if (error) {

    console.log(error)

    alert("Booking gagal")

  } else {

    console.log(data)

    alert("Booking berhasil 🚀")

  }
}

  return (

    <div className="min-h-screen bg-[#f7f5f1] py-20 px-6">

      <div className="max-w-3xl mx-auto bg-white rounded-[40px] shadow-2xl p-10">

        <h1 className="text-5xl font-bold mb-4">
          Booking Session
        </h1>

        <p className="text-gray-600 mb-10">
          Isi data berikut untuk menjadwalkan sesi konsultasi.
        </p>

        {/* Nama */}
        <div className="mb-6">

          <label className="block mb-3 font-semibold">
            Nama Lengkap
          </label>

          <input
  type="text"
  value={clientName}
  onChange={(e) =>
    setClientName(e.target.value)
  }
  placeholder="Masukkan nama lengkap"
  className="w-full border border-gray-300 rounded-2xl p-4"
/>

        </div>

        {/* Psikolog */}
        <div className="mb-6">

          <label className="block mb-3 font-semibold">
            Pilih Psikolog
          </label>

          <select
            value={selectedPsychologist}
            onChange={(e) =>
              setSelectedPsychologist(e.target.value)
            }
            className="w-full border border-gray-300 rounded-2xl p-4"
          >

            <option>
              Dr. Sarah Amanda
            </option>

            <option>
              Dr. Nabila Putri
            </option>

            <option>
              Dr. Intan Maharani
            </option>

          </select>

        </div>

        {/* Tanggal */}
        <div className="mb-6">

          <label className="block mb-3 font-semibold">
            Pilih Tanggal
          </label>

          <input
  type="date"
  value={bookingDate}
  onChange={(e) =>
    setBookingDate(e.target.value)
  }
  className="w-full border border-gray-300 rounded-2xl p-4"
/>

        </div>

        {/* Jam */}
        <div className="mb-6">

          <label className="block mb-3 font-semibold">
            Pilih Jam
          </label>

          <select
  value={bookingTime}
  onChange={(e) =>
    setBookingTime(e.target.value)
  }
  className="w-full border border-gray-300 rounded-2xl p-4"
>

  <option value="09:00">09:00</option>
  <option value="11:00">11:00</option>
  <option value="13:00">13:00</option>
  <option value="15:00">15:00</option>
  <option value="19:00">19:00</option>

</select>

        </div>

        {/* Pembayaran */}
        <div className="mb-10">

          <label className="block mb-3 font-semibold">
            Tipe Pembayaran
          </label>

          <div className="grid md:grid-cols-2 gap-4">

<button
  onClick={() =>
    setPaymentType("DP Booking")
  }

  className={`p-5 rounded-2xl border-2 transition-all ${
    paymentType === "DP Booking"
      ? "border-black bg-black text-white"
      : "border-gray-300 bg-white text-black"
  }`}
>

  <h3 className="font-bold text-xl mb-2">
    DP Booking
  </h3>

  <p className="text-sm">
    Bayar Rp100.000 untuk mengunci jadwal
  </p>

</button>

<button
  onClick={() =>
    setPaymentType("Full Payment")
  }

  className={`p-5 rounded-2xl border-2 transition-all ${
    paymentType === "Full Payment"
      ? "border-black bg-black text-white"
      : "border-gray-300 bg-white text-black"
  }`}
>

  <h3 className="font-bold text-xl mb-2">
    Full Payment
  </h3>

  <p className="text-sm">
    Bayar penuh Rp500.000
  </p>

</button>

          </div>

        </div>

        {/* Ringkasan */}
        <div className="bg-[#f5f5f0] rounded-3xl p-8 mb-8">

          <h2 className="text-2xl font-bold mb-6">
            Ringkasan Booking
          </h2>

          <div className="space-y-3 text-gray-700">

            <p>
              Psikolog:
              <span className="font-semibold ml-2">
                {selectedPsychologist}
              </span>
            </p>

            <p>
              Tipe Pembayaran:
              <span className="font-semibold ml-2">
                {paymentType}
              </span>
            </p>

            <p>
              Biaya:
              <span className="font-semibold ml-2">
                {paymentType === "DP Booking"
                  ? "Rp100.000"
                  : "Rp500.000"}
              </span>
            </p>

          </div>

        </div>

        {/* Tombol */}
        
 <button
  onClick={handleBooking}

  className="w-full bg-black text-white py-5 rounded-2xl text-lg font-semibold flex items-center justify-center"
>
  Lanjutkan Pembayaran
</button>

      </div>

    </div>
  )
}