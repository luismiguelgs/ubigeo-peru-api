/*
  Warnings:

  - You are about to drop the column `nombre` on the `PeruProvince` table. All the data in the column will be lost.
  - Added the required column `name` to the `PeruProvince` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PeruProvince" DROP COLUMN "nombre",
ADD COLUMN     "name" TEXT NOT NULL;
