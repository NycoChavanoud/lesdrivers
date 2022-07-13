/*
  Warnings:

  - Added the required column `forfait` to the `FormLocaWithChauff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FormLocaWithChauff` ADD COLUMN `forfait` VARCHAR(191) NOT NULL;
