-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: videobelajar
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Fullstack Web Development Bootcamp','Kelas intensif belajar HTML, CSS, JavaScript, React, dan Node.js untuk menjadi fullstack developer.',2500000.00,'2025-07-10 07:33:22','2025-07-11 14:51:42'),(2,'UI/UX Design Mastery','Pelatihan komprehensif untuk memahami prinsip desain dan membuat prototipe dengan Figma.',1750000.00,'2025-07-10 07:33:22','2025-07-10 07:33:22'),(3,'Digital Marketing for Beginners','Belajar strategi digital marketing mulai dari SEO, SEM, hingga social media marketing.',1500000.00,'2025-07-10 07:33:22','2025-07-10 07:33:22'),(4,'Membuat Aplikasi Mobile dengan React Native','Kursus step-by-step untuk membangun aplikasi Android dan iOS dengan React Native.',2000000.00,'2025-07-10 07:33:22','2025-07-10 07:33:22'),(5,'Ebook Panduan Machine Learning Dasar','Ebook interaktif untuk pemula yang ingin memahami konsep dasar machine learning dengan Python.',50000.00,'2025-07-10 07:33:22','2025-07-10 07:33:22'),(16,'Kelas Bisnis Digital','Kelas ini membantu anak2 muda menjadi pembisnis handal',55000.00,'2025-07-10 08:11:34','2025-07-10 08:11:34'),(20,'Kelas Berenang','Kelas ini membantu anak2 muda menjadi atlet perenang handal',15000.00,'2025-07-10 08:13:46','2025-07-10 08:13:46'),(21,'Kelas Terbang','Kelas ini membantu anak2 muda menjadi atlet perenang handal',15000.00,'2025-07-10 08:17:49','2025-07-10 08:17:49'),(28,'Kelas baru','deskripsinya bebas',123.00,'2025-07-11 18:12:23','2025-07-11 18:12:23'),(29,'Kelas baru lagi','Lagi',321.00,'2025-07-11 18:14:01','2025-07-11 18:14:01');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutors`
--

DROP TABLE IF EXISTS `tutors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutors` (
  `tutor_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `role` varchar(50) DEFAULT NULL,
  `workplace` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`tutor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutors`
--

LOCK TABLES `tutors` WRITE;
/*!40000 ALTER TABLE `tutors` DISABLE KEYS */;
/*!40000 ALTER TABLE `tutors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `gender` enum('male','female') DEFAULT 'male',
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Daun','daun@example.com','081234567890','female','$2b$10$o0FXdZWkiJVbWJ44bxkAeOu8e1NtC1RTVJBWJvs2iXQv6W66reMS2','daun.jpg','2025-07-11 11:36:33'),(2,'admin','admin@example.com','081234567890','male','$2b$10$GLTWONSCtaZ1Id51H8wQhOfhkYZoK7asLGbmZXBVlqhWLc4moz6M6','admin.jpg','2025-07-11 11:38:57'),(4,'Admin','admin@gmail.com','62812345678','male','$2b$10$l2J8oAWbAydTmfEf1zlJX.MNjFXchWx5jcnUT8O2Gi9LNKqJyglZ.',NULL,'2025-07-11 18:07:57');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'videobelajar'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-12 12:19:39
