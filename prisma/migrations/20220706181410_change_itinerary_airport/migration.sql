/*
  Warnings:

  - You are about to drop the column `departurePlace` on the `ItineraryAirport` table. All the data in the column will be lost.
  - Added the required column `destinationAdress` to the `ItineraryAirport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `originAdress` to the `ItineraryAirport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ItineraryAirport` DROP COLUMN `departurePlace`,
    ADD COLUMN `destinationAdress` VARCHAR(191) NOT NULL,
    ADD COLUMN `originAdress` VARCHAR(191) NOT NULL;
