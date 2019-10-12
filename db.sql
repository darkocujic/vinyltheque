-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 12, 2019 at 08:30 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vinyltheque`
--

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `artist` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id`, `artist`) VALUES
(1, 'Led Zeppelin'),
(20, 'Ten Years After'),
(21, 'Miles Davis'),
(26, 'The National'),
(27, 'Nina Simone'),
(28, 'Santana'),
(29, 'Oliver Mandić'),
(30, 'The Stone Roses'),
(31, 'Oliver'),
(32, 'Poslednja igra leptira'),
(33, 'Stevie Wonder'),
(34, 'VA'),
(35, 'Dire Straits'),
(36, 'Julio Iglesias'),
(37, 'Hair'),
(38, 'Blues Brothers'),
(39, 'Charlie Parker, Bud Powell, Fats Navarro');

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `id` int(11) NOT NULL,
  `artist_id` int(11) NOT NULL,
  `album` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `tags` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`id`, `artist_id`, `album`, `img`, `year`, `tags`) VALUES
(1, 1, 'III', 'ledzeppelin-III.jpg', 1970, 'rock, 70s'),
(9, 26, 'Sleep Well Beast', 'thenational-sleepwellbeast.jpg', 2017, 'rock'),
(10, 27, 'Little Girl Blue', 'ninasimone-littlegirlblue.jpg', 2016, 'jazz'),
(11, 29, 'Zbog tebe bih tucao kamen', 'olivermandic-zbogtebebihtucaokamen.jpg', 1982, 'ex-yu, disco'),
(12, 30, 'The Stone Roses', 'thestoneroses-thestoneroses.jpg', 1988, '80s, rock, england'),
(13, 31, 'Poeta', 'oliver-poeta.jpg', 1978, '70s, pop, ex-yu'),
(14, 31, 'Oliver', 'oliver-oliver.jpg', 1987, '80s, ex-yu, pop'),
(15, 32, 'Ponovo ploča i druge priče', 'poslednjaigraleptira-ponovoplocaidrugeprice.jpg', 1983, 'ex-yu, 80s, rock'),
(16, 33, 'Talking Book', 'steviewonder-talkingbook.jpg', 1972, '70s, funk, soul'),
(17, 34, 'Mandolins in Italy', 'va-mandolinsinitaly.jpg', 1977, 'italy'),
(18, 35, 'Communique', 'direstraits-communique.jpg', 1979, 'rock, 70s'),
(19, 28, '25 Hits', 'santana-25hits.jpg', 1978, '70s, rock, latin'),
(20, 36, 'Sono un pirata, sono un signore', 'julioiglesias-sonounpiratasonounsignore.jpg', 1978, 'chanson, vokal, 70s'),
(21, 20, 'Cricklewood Green', 'tenyearsafter-cricklewoodgreen.jpg', 1970, '70s, rock, blues-rock'),
(22, 37, 'OST', 'hair-ost.jpg', 1979, 'soundtrack, 70s, rock'),
(23, 38, 'Best of The', 'bluesbrothers-bestofthe.jpg', 1981, '80s, rock, blues-rock, soul'),
(24, 39, 'Rare Broadcast Performance: New York 1949', 'charlieparkerbudpowellfatsnavarro-rarebroadcastperformancenewyork1949.jpg', 1975, 'jazz, bebop');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `artist_id` (`artist_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `records`
--
ALTER TABLE `records`
  ADD CONSTRAINT `artist` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
