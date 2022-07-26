/*
  Warnings:

  - You are about to alter the column `numberOfHour` on the `FormLocaChauff` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `FormLocaChauff` MODIFY `numberOfHour` INTEGER NOT NULL;
