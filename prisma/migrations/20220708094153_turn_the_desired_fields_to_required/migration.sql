/*
  Warnings:

  - Made the column `departureDate` on table `ItineraryAirport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `departureTime` on table `ItineraryAirport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `numberLuggages` on table `ItineraryAirport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `numberPassengers` on table `ItineraryAirport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `porteSki` on table `ItineraryAirport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rehausseur` on table `ItineraryAirport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `siegeBebe` on table `ItineraryAirport` required. This step will fail if there are existing NULL values in that column.
  - Made the column `vehicule` on table `ItineraryAirport` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `ItineraryAirport` MODIFY `departureDate` VARCHAR(191) NOT NULL,
    MODIFY `departureTime` VARCHAR(191) NOT NULL,
    MODIFY `numberLuggages` VARCHAR(191) NOT NULL,
    MODIFY `numberPassengers` VARCHAR(191) NOT NULL,
    MODIFY `porteSki` BOOLEAN NOT NULL,
    MODIFY `rehausseur` BOOLEAN NOT NULL,
    MODIFY `siegeBebe` BOOLEAN NOT NULL,
    MODIFY `vehicule` VARCHAR(191) NOT NULL;
