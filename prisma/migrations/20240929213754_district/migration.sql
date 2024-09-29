-- CreateTable
CREATE TABLE "PeruDistrict" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "provinceId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PeruDistrict_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PeruDistrict" ADD CONSTRAINT "PeruDistrict_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "PeruProvince"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
