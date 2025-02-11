-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "isPopular" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isRecent" BOOLEAN NOT NULL DEFAULT false;
