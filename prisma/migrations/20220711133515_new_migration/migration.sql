/*
  Warnings:

  - Made the column `vehiculeNeeded` on table `FormLocaChauff` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `FormLocaChauff` MODIFY `vehiculeNeeded` VARCHAR(191) NOT NULL;
