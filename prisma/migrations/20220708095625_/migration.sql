/*
  Warnings:

  - You are about to alter the column `numberPassengers` on the `ItineraryAirport` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `ItineraryAirport` MODIFY `numberPassengers` INTEGER NOT NULL;
