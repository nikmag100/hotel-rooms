import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
   const roomCount = await prisma.room.count();

  if (roomCount > 0) {
    console.log("Rooms already exist. Skipping seed.");
    return;
  }
  
  await prisma.room.createMany({
    data: [
      {
        name: "Sea View Room",
        description: "Beautiful sea view",
        price: 120,
        image: "/images/image1.jpg",
      },
      {
        name: "Family Suite",
        description: "Perfect for families",
        price: 180,
        image: "/images/image.jpg",
      },
      {
        name: "Luxury Suite",
        description: "Premium experience",
        price: 250,
        image: "/images/Untitled-design.jpg",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });