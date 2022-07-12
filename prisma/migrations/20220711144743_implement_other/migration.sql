/*
  Warnings:

  - You are about to drop the `FormLocaChauff` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `FormLocaChauff`;

-- CreateTable
CREATE TABLE `CourseLyon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `departureAdress` VARCHAR(191) NOT NULL,
    `arrivalAdress` VARCHAR(191) NOT NULL,
    `departureOfDate` VARCHAR(191) NOT NULL,
    `departureOfTime` VARCHAR(191) NOT NULL,
    `numberOfPassengers` INTEGER NOT NULL,
    `vehiculeNeeded` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FormLocaWithChauff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `departureAdress` VARCHAR(191) NOT NULL,
    `departureOfDate` VARCHAR(191) NOT NULL,
    `departureOfTime` VARCHAR(191) NOT NULL,
    `numberOfPassengers` INTEGER NOT NULL,
    `vehiculeNeeded` VARCHAR(191) NOT NULL,
    `forfait` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
