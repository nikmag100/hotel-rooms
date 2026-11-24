# Hotel Rooms

A full-stack hotel room booking application built with Next.js, NestJS, PostgreSQL, Prisma and Docker.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** NestJS, Node.js, TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Containerization:** Docker & Docker Compose

## Features

- Browse available hotel rooms
- View individual room details
- Create room reservations
- Validate booking dates
- Prevent overlapping reservations for the same room

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/hotel-rooms.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hotel-rooms
   ```

3. Create your environment file:

   ```bash
   cp .env.example .env
   ```

   On Windows PowerShell, use:

   ```powershell
   Copy-Item .env.example .env
   ```

4. Open `.env` and configure your database credentials. Replace the default placeholder password with your own password.

5. Build and start the application:

   ```bash
   docker compose up --build -d
   ```

### Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001
- **Database:** PostgreSQL on port 5432

### Stopping the Application

```bash
docker compose down
```

## Project Status

The project is under active development. Additional features and documentation will be added in future updates.