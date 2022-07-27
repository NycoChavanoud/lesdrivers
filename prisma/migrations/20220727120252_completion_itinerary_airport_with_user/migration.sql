/*
  Warnings:

  - Added the required column `email` to the `ItineraryAirport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `ItineraryAirport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `ItineraryAirport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `ItineraryAirport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ItineraryAirport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ItineraryAirport` ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstname` VARCHAR(191) NOT NULL,
    ADD COLUMN `lastname` VARCHAR(191) NOT NULL,
    ADD COLUMN `phoneNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `society` VARCHAR(191) NULL;
