const psychologists = [
  {
    name: "Dr. Sarah Amanda",
    specialty: "Burnout & Overthinking",
    experience: "8 tahun pengalaman",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Dr. Nabila Putri",
    specialty: "Relationship & Anxiety",
    experience: "6 tahun pengalaman",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Dr. Intan Maharani",
    specialty: "Quarter Life Crisis",
    experience: "10 tahun pengalaman",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function Psychologists() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] px-8 py-20">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          Pilih Psikolog Anda
        </h1>

        <p className="text-gray-600 text-lg">
          Temukan psikolog profesional sesuai kebutuhan Anda.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">

        {psychologists.map((psychologist, idx) => (

          <div
            key={idx}
            className="bg-white rounded-[30px] overflow-hidden shadow-xl"
          >

            <img
              src={psychologist.image}
              alt={psychologist.name}
              className="h-[320px] w-full object-cover"
            />

            <div className="p-8">

              <h2 className="text-2xl font-bold mb-2">
                {psychologist.name}
              </h2>

              <p className="text-gray-600 mb-2">
                {psychologist.specialty}
              </p>

              <p className="text-sm text-gray-500 mb-6">
                {psychologist.experience}
              </p>

              <button className="w-full bg-black text-white py-4 rounded-2xl">
                Booking Session
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}