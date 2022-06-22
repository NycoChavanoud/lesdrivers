/*
  Warnings:

  - You are about to drop the column `adress` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `adress`,
    ADD COLUMN `address` VARCHAR(191) NULL,
    MODIFY `phoneNumber` VARCHAR(191) NOT NULL;
