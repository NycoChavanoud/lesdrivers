/*
  Warnings:

  - You are about to drop the column `forfait` on the `FormLocaChauff` table. All the data in the column will be lost.
  - Added the required column `price` to the `FormCourseLyon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfHour` to the `FormLocaChauff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `FormLocaChauff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `FormCourseLyon` ADD COLUMN `price` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `FormLocaChauff` DROP COLUMN `forfait`,
    ADD COLUMN `numberOfHour` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL;
