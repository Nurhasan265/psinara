import { supabase } from "../lib/supabase"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f1]">

<Navbar />

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-10 px-8 md:px-20 py-20 items-center">

        {/* LEFT */}
        <div>

          <div className="inline-block px-4 py-2 rounded-full bg-white shadow mb-6 text-sm">
            Konsultasi Psikologi Online Profesional
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">

            Ruang Aman
            <br />
            untuk Memahami Diri

          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-10">

            Platform mental health modern untuk membantu
            burnout, overthinking, anxiety, relationship,
            dan quarter life crisis.

          </p>

          <div className="flex gap-4">

            <button
  onClick={async () => {

    const { data, error } =
      await supabase
        .from("bookings")
        .select("*")

    console.log(data)
    console.log(error)

    alert("Check Console")
  }}

  className="bg-green-600 text-white px-8 py-4 rounded-2xl"
>

  Test Database

</button>

            <Link
              to="/booking"
              className="bg-black text-white px-8 py-4 rounded-2xl"
            >
              Mulai Konsultasi
            </Link>

            <Link
              to="/psychologists"
              className="bg-white px-8 py-4 rounded-2xl shadow"
            >
              Pilih Psikolog
            </Link>

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <div className="bg-white rounded-[30px] p-4 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
              alt="psychologist"
              className="rounded-[25px] h-[600px] w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="px-8 md:px-20 py-20 bg-white">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold mb-4">
            Fokus Layanan
          </h2>

          <p className="text-gray-600 text-lg">
            Pendekatan psikologi profesional dan empatik.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {[
            "Burnout",
            "Overthinking",
            "Relationship",
            "Quarter Life Crisis",
          ].map((item, idx) => (

            <div
              key={idx}
              className="bg-[#f7f5f1] rounded-[30px] p-8 shadow-sm"
            >

              <div className="w-14 h-14 rounded-2xl bg-[#dce5dc] mb-6"></div>

              <h3 className="text-2xl font-semibold mb-4">
                {item}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Konsultasi online dengan pendekatan psikologi modern.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-black text-white px-8 md:px-20 py-24 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Anda Tidak Harus Menghadapi Semuanya Sendiri
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
          Mulai perjalanan memahami diri bersama psikolog profesional.
        </p>

        <Link
          to="/booking"
          className="bg-white text-black px-10 py-5 rounded-2xl inline-block"
        >
          Booking Konsultasi
        </Link>

      </section>

    </div>
  )
}