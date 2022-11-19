/*
  Warnings:

  - You are about to drop the `Todos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Todos";

-- CreateTable
CREATE TABLE "todos" (
    "id" TEXT NOT NULL,
    "todo" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "priority" "priority" NOT NULL DEFAULT 'LOW',
    "status" BOOLEAN NOT NULL DEFAULT false,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
