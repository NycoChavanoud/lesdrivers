/*
  Warnings:

  - You are about to drop the column `forfait` on the `FormLocaWithChauff` table. All the data in the column will be lost.
  - You are about to drop the `CourseLyon` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `FormLocaWithChauff` DROP COLUMN `forfait`;

-- DropTable
DROP TABLE `CourseLyon`;

-- CreateTable
CREATE TABLE `FormLocaChauff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `departureAdress` VARCHAR(191) NOT NULL,
    `arrivalAdress` VARCHAR(191) NOT NULL,
    `departureOfDate` VARCHAR(191) NOT NULL,
    `departureOfTime` VARCHAR(191) NOT NULL,
    `numberOfPassengers` INTEGER NOT NULL,
    `vehiculeNeeded` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
