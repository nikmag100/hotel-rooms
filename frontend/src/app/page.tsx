import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Rooms from "@/sections/Rooms";
import Gallery from "@/sections/Gallery";
import Contact from "@/sections/Contact";

export default async function Home() {

  return (
    <main>
      <Navbar />
      <Hero />
      <Rooms />
      <Gallery />
      <Contact />
    </main>
  );
}