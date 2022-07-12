-- CreateTable
CREATE TABLE `FormLocaChauff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `departureAdress` VARCHAR(191) NOT NULL,
    `arrivalAdress` VARCHAR(191) NOT NULL,
    `departureOfDate` VARCHAR(191) NULL,
    `departureOfTime` VARCHAR(191) NULL,
    `numberOfPassengers` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
