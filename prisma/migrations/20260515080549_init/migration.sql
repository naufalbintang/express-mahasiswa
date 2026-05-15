-- CreateTable
CREATE TABLE `Jurusan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prodi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `jurusan_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nim` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `prodi_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Mahasiswa_nim_key`(`nim`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Prodi` ADD CONSTRAINT `Prodi_jurusan_id_fkey` FOREIGN KEY (`jurusan_id`) REFERENCES `Jurusan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mahasiswa` ADD CONSTRAINT `Mahasiswa_prodi_id_fkey` FOREIGN KEY (`prodi_id`) REFERENCES `Prodi`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
