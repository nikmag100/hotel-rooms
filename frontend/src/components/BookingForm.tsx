"use client";

import { useState } from "react";

type Props = {
  roomId: number;
};

export default function BookingForm({ roomId }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!checkIn || !checkOut) {
      setError("Please select check-in and check-out dates.");
      return;
    }

    if (checkOut <= checkIn) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          roomId,
          guestName: name,
          email,
          checkIn,
          checkOut,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setMessage("Booking completed successfully!");

      setName("");
      setEmail("");
      setCheckIn("");
      setCheckOut("");

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }  
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 p-8 shadow-xl rounded-2xl space-y-4"
    >
      <h2 className="text-3xl font-bold">
        Book this room
      </h2>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <label>
        Check in
      </label>

      <input
        type="date"
        min={today}
        value={checkIn}
        required
        onChange={(e) => setCheckIn(e.target.value)}
        className="w-full border p-3 rounded"
      />


      <label>
        Check out
      </label>

      <input
        type="date"
        min={checkIn || today}
        value={checkOut}
        required
        onChange={(e) => setCheckOut(e.target.value)}
        className="w-full border p-3 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-lg cursor-pointer"
      >
        {loading ? "Booking..." : "Book Now"}
      </button>

      {message && (<p className="text-green-600">{message}</p>)}

      {error && (<p className="text-red-600">{error}</p>)}

    </form>
  );
}