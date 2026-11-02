"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Room = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function Rooms() {

  const [rooms, setRooms] = useState<Room[]>([]);


  useEffect(() => {
console.log("FETCH ROOMS");
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`)
      .then(res => res.json())
      .then(data => setRooms(data));

  }, []);

  return (
    <section id="rooms" className="py-24 px-8">
      <h2 className="text-4xl font-bold text-center">
        Our Rooms
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {rooms.map((room) => (
           <Link
            key={room.id}
            href={`/rooms/${room.id}`}
            className="shadow-xl rounded-2xl overflow-hidden"
          >

            <img
              src={room.image}
              alt={room.name}
              className="w-full h-64 object-cover"
            />


            <div className="p-6">

              <h3 className="text-2xl font-semibold">
                {room.name}
              </h3>


              <p>
                {room.description}
              </p>


              <p className="font-bold mt-4">
                €{room.price} / night
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}