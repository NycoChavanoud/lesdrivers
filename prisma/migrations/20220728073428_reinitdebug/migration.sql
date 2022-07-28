-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `hashedPassword` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `society` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FormCourseLyon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `departureAdress` VARCHAR(191) NOT NULL,
    `arrivalAdress` VARCHAR(191) NOT NULL,
    `departureOfDate` VARCHAR(191) NOT NULL,
    `departureOfTime` VARCHAR(191) NOT NULL,
    `vehiculeNeeded` VARCHAR(191) NOT NULL,
    `numberOfPassengers` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FormLocaChauff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `departureAdress` VARCHAR(191) NOT NULL,
    `departureOfDate` VARCHAR(191) NOT NULL,
    `departureOfTime` VARCHAR(191) NOT NULL,
    `vehiculeNeeded` VARCHAR(191) NOT NULL,
    `numberOfPassengers` INTEGER NOT NULL,
    `numberOfHour` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ItineraryAirport` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `originAdress` VARCHAR(191) NOT NULL,
    `destinationAdress` VARCHAR(191) NOT NULL,
    `departureDate` VARCHAR(191) NOT NULL,
    `departureTime` VARCHAR(191) NOT NULL,
    `numberPassengers` INTEGER NOT NULL,
    `numberLuggages` VARCHAR(191) NOT NULL,
    `vehicule` VARCHAR(191) NOT NULL,
    `siegeBebe` BOOLEAN NOT NULL,
    `rehausseur` BOOLEAN NOT NULL,
    `porteSki` BOOLEAN NOT NULL,
    `flightNumber` VARCHAR(191) NULL,
    `somethingToSay` VARCHAR(191) NULL,
    `price` INTEGER NOT NULL,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `society` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
