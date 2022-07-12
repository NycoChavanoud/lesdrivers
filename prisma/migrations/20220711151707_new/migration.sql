/*
  Warnings:

  - Added the required column `forfait` to the `FormLocaChauff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FormLocaChauff` ADD COLUMN `forfait` VARCHAR(191) NOT NULL;
