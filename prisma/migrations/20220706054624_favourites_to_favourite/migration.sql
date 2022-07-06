/*
  Warnings:

  - You are about to drop the `Favourites` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favourites" DROP CONSTRAINT "Favourites_songId_fkey";

-- DropForeignKey
ALTER TABLE "Favourites" DROP CONSTRAINT "Favourites_userId_fkey";

-- DropTable
DROP TABLE "Favourites";

-- CreateTable
CREATE TABLE "Favourite" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    "songId" INTEGER,

    CONSTRAINT "Favourite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE SET NULL ON UPDATE CASCADE;
