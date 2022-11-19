-- CreateEnum
CREATE TYPE "priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "Todos" (
    "id" TEXT NOT NULL,
    "todo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "priority" "priority" NOT NULL DEFAULT 'LOW',
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
