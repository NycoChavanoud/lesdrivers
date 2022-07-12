/*
  Warnings:

  - Made the column `departureOfDate` on table `FormLocaChauff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `departureOfTime` on table `FormLocaChauff` required. This step will fail if there are existing NULL values in that column.
  - Made the column `numberOfPassengers` on table `FormLocaChauff` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `FormLocaChauff` ADD COLUMN `vehiculeNeeded` VARCHAR(191) NULL,
    MODIFY `departureOfDate` VARCHAR(191) NOT NULL,
    MODIFY `departureOfTime` VARCHAR(191) NOT NULL,
    MODIFY `numberOfPassengers` INTEGER NOT NULL;
