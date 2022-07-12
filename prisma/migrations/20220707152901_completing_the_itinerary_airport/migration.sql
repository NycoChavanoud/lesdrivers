-- AlterTable
ALTER TABLE `ItineraryAirport` ADD COLUMN `departureDate` VARCHAR(191) NULL,
    ADD COLUMN `departureTime` VARCHAR(191) NULL,
    ADD COLUMN `flightNumber` VARCHAR(191) NULL,
    ADD COLUMN `numberLuggages` VARCHAR(191) NULL,
    ADD COLUMN `numberPassengers` INTEGER NULL,
    ADD COLUMN `porteSki` BOOLEAN NULL,
    ADD COLUMN `rehausseur` BOOLEAN NULL,
    ADD COLUMN `siegeBebe` BOOLEAN NULL,
    ADD COLUMN `somethingToSay` VARCHAR(191) NULL,
    ADD COLUMN `vehicule` VARCHAR(191) NULL;
