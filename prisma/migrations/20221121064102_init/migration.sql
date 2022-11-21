/*
  Warnings:

  - The `priority` column on the `todos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "todos" DROP COLUMN "priority",
ADD COLUMN     "priority" INTEGER NOT NULL DEFAULT 0;

-- DropEnum
DROP TYPE "priority";
