import Link from "next/link";
import BookingForm from "@/components/BookingForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RoomPage({ params }: Props) {
  const { id } = await params;

  const apiUrl = process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  const response = await fetch(`${apiUrl}/rooms/${id}`, 
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return <h1>Room not found</h1>;
  }

  const room = await response.json();

  return (
    <main className="max-w-5xl mx-auto p-8">
        <Link
            href="/"
            className="inline-flex items-center gap-2 mb-6 text-gray-600 hover:text-black transition"
        >
        ← Back to Home
        </Link> 

      <img
        src={room.image}
        alt={room.name}
        className="w-full h-[500px] object-cover rounded-xl"
      />

      <h1 className="text-5xl font-bold mt-8">
        {room.name}
      </h1>

      <p className="mt-4 text-lg">
        {room.description}
      </p>

      <p className="mt-4 text-2xl font-bold">
        €{room.price} / night
      </p>
      <BookingForm roomId={room.id} />
    </main>
  );
}