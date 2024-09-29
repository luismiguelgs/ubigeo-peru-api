/*
  Warnings:

  - Made the column `name` on table `PeruRegion` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PeruRegion" ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "PeruProvince" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "PeruProvince_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PeruProvince" ADD CONSTRAINT "PeruProvince_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "PeruRegion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
