export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex justify-between text-white">
      <div className="text-2xl font-bold">
        Hotel Rooms
      </div>

      <div className="flex gap-6">
        <a href="#rooms">Rooms</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}