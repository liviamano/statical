-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2017 at 08:58 PM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `statical`
--

-- --------------------------------------------------------

--
-- Table structure for table `city_based_schooled`
--

CREATE TABLE `city_based_schooled` (
  `Region` text,
  `illiterates` int(11) DEFAULT NULL,
  `no_diploma` int(11) DEFAULT NULL,
  `primary` int(11) DEFAULT NULL,
  `low_secondary` int(11) DEFAULT NULL,
  `high_school` int(11) DEFAULT NULL,
  `uni_bachelor` int(11) DEFAULT NULL,
  `uni_phd` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `city_based_schooled`
--

INSERT INTO `city_based_schooled` (`Region`, `illiterates`, `no_diploma`, `primary`, `low_secondary`, `high_school`, `uni_bachelor`, `uni_phd`) VALUES
('BERAT', 3858, 1729, 21999, 55440, 34093, 7681, 58),
('DIBER', 3567, 2135, 22586, 57809, 24950, 5292, 34),
('DURRES', 5336, 2311, 34474, 98964, 64877, 19776, 174),
('ELBASAN', 8953, 3318, 43831, 119021, 62149, 18469, 198),
('FIER', 8217, 3308, 44083, 122912, 74655, 18126, 151),
('GJIROKASTER', 1625, 847, 10927, 23661, 19391, 7936, 77),
('KORCE', 4792, 2397, 34421, 82448, 52906, 16871, 160),
('KUKES', 1593, 1249, 13601, 31952, 17913, 4547, 24),
('LEZHE', 4150, 1459, 20524, 51563, 30992, 6790, 66),
('SHKODER', 5284, 2791, 32527, 82046, 48883, 15062, 206),
('TIRANE', 11858, 6493, 83368, 201235, 218691, 121091, 2346),
('VLORE', 4242, 2379, 23123, 59130, 47518, 17297, 207);

-- --------------------------------------------------------

--
-- Table structure for table `dissable_currently_schooled`
--

CREATE TABLE `dissable_currently_schooled` (
  `groupage` text,
  `never_attended` int(11) DEFAULT NULL,
  `attended` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dissable_currently_schooled`
--

INSERT INTO `dissable_currently_schooled` (`groupage`, `never_attended`, `attended`, `total`) VALUES
('15-19', 1355, 1806, 3161),
('20-24', 1997, 1960, 3957),
('25-29', 1729, 2100, 3829),
('30-34', 1430, 2353, 3783),
('35-39', 1286, 2805, 4091),
('40-44', 1170, 5158, 6328),
('45-49', 994, 6112, 7106),
('50-54', 975, 9114, 10089),
('55-59', 813, 10397, 11210),
('60-64', 933, 11373, 12306),
('65-69', 1406, 12238, 13644),
('70-74', 2589, 15075, 17664),
('75-79', 4790, 16629, 17108),
('80-84', 5506, 7447, 12953),
('85-89', 3513, 3278, 6791),
('90+', 2954, 1489, 4443);

-- --------------------------------------------------------

--
-- Table structure for table `female_city_based_schooling`
--

CREATE TABLE `female_city_based_schooling` (
  `city` text,
  `illiterates` int(11) DEFAULT NULL,
  `no_diploma` int(11) DEFAULT NULL,
  `primary` int(11) DEFAULT NULL,
  `low_secondary` int(11) DEFAULT NULL,
  `high_school` int(11) DEFAULT NULL,
  `uni_bachelor` int(11) DEFAULT NULL,
  `uni_phd` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `female_city_based_schooling`
--

INSERT INTO `female_city_based_schooling` (`city`, `illiterates`, `no_diploma`, `primary`, `low_secondary`, `high_school`, `uni_bachelor`, `uni_phd`) VALUES
('BERAT', 2652, 906, 11663, 28203, 14749, 3988, 17),
('DIBER', 2495, 1035, 11924, 29395, 10335, 2525, 11),
('DURRES', 3709, 1180, 18345, 51451, 28763, 9832, 74),
('ELBASAN', 6065, 1653, 23022, 60292, 26477, 10262, 79),
('FIER', 5613, 1692, 23390, 63158, 31738, 9280, 54),
('GJIROKASTER', 1117, 445, 6077, 12175, 8253, 3782, 29),
('KORCE', 3152, 1240, 18477, 41948, 22857, 8650, 63),
('KUKES', 1114, 615, 7003, 17329, 7208, 2174, 6),
('LEZHE', 2894, 703, 10945, 26565, 13930, 3498, 22),
('SHKODER', 3552, 1389, 17127, 42957, 21526, 8053, 108),
('TIRANE', 8030, 3371, 44465, 107046, 102993, 61705, 918),
('VLORE', 3033, 1237, 12678, 29573, 21531, 8686, 102);

-- --------------------------------------------------------

--
-- Table structure for table `gender_based_dissabled_schooled`
--

CREATE TABLE `gender_based_dissabled_schooled` (
  `gender` text,
  `never_attended` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gender_based_dissabled_schooled`
--

INSERT INTO `gender_based_dissabled_schooled` (`gender`, `never_attended`) VALUES
('femer', 61),
('mashkull', 39);

-- --------------------------------------------------------

--
-- Table structure for table `highest_education_achieved`
--

CREATE TABLE `highest_education_achieved` (
  `groupage` varchar(50) DEFAULT NULL,
  `primary` int(11) DEFAULT NULL,
  `lower_secondary` int(11) DEFAULT NULL,
  `high_school` int(11) DEFAULT NULL,
  `uni_bachelor` int(11) DEFAULT NULL,
  `uni_master` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `highest_education_achieved`
--

INSERT INTO `highest_education_achieved` (`groupage`, `primary`, `lower_secondary`, `high_school`, `uni_bachelor`, `uni_master`) VALUES
('0-14', 187717, 25848, 0, 0, 0),
('15-19', 12923, 171056, 77167, 174, 0),
('20-24', 4602, 84501, 91564, 52097, 0),
('25-29', 4760, 86355, 49155, 44705, 396),
('30-34', 3827, 85118, 43585, 26097, 511),
('35-39', 2625, 75006, 63052, 22241, 562),
('40-44', 3050, 84382, 72050, 22675, 589),
('45-49', 3915, 88774, 78079, 18236, 426),
('50-54', 6625, 86809, 79780, 18327, 382),
('55-59', 12785, 65898, 61922, 18524, 317),
('60-64', 23443, 51958, 35373, 15488, 220),
('65-69', 34245, 35490, 19290, 8781, 130),
('70-74', 38792, 25670, 13612, 5751, 80),
('75-79', 26374, 12373, 7717, 3475, 44),
('80-84', 13007, 4675, 3153, 1581, 31),
('85+', 6774, 2268, 1519, 786, 13);

-- --------------------------------------------------------

--
-- Table structure for table `illeterate`
--

CREATE TABLE `illeterate` (
  `groupage` varchar(20) DEFAULT NULL,
  `scholed` int(11) DEFAULT NULL,
  `not_schooled` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `illeterate`
--

INSERT INTO `illeterate` (`groupage`, `scholed`, `not_schooled`) VALUES
('0-14', 1692, 31),
('15-19', 2289, 66),
('20-24', 3040, 94),
('25-29', 3037, 107),
('30-34', 2357, 87),
('35-39', 1971, 87),
('40-44', 1825, 72),
('45-49', 1712, 66),
('50-54', 1794, 78),
('55-59', 1663, 84),
('60-64', 2220, 169),
('65-69', 3401, 474),
('70-74', 5956, 723),
('75-79', 10450, 773),
('80-84', 10213, 625),
('85+', 9855, 528);

-- --------------------------------------------------------

--
-- Table structure for table `male_city_based_schooling`
--

CREATE TABLE `male_city_based_schooling` (
  `city` text,
  `illiterates` int(11) DEFAULT NULL,
  `no_diploma` int(11) DEFAULT NULL,
  `primary` int(11) DEFAULT NULL,
  `low_secondary` int(11) DEFAULT NULL,
  `high_school` int(11) DEFAULT NULL,
  `uni_bachelor` int(11) DEFAULT NULL,
  `uni_phd` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `male_city_based_schooling`
--

INSERT INTO `male_city_based_schooling` (`city`, `illiterates`, `no_diploma`, `primary`, `low_secondary`, `high_school`, `uni_bachelor`, `uni_phd`) VALUES
('BERAT', 1206, 823, 10336, 27237, 19344, 3693, 41),
('DIBER', 1072, 1100, 10662, 28414, 14615, 2767, 23),
('DURRES', 1627, 1131, 16129, 47513, 36114, 9944, 100),
('ELBASAN', 2888, 1665, 20809, 58729, 35672, 8207, 119),
('FIER', 2604, 1616, 20693, 59754, 42917, 8846, 97),
('GJIROKASTER', 508, 402, 4850, 11486, 11138, 4154, 48),
('KORCE', 1640, 1157, 15944, 40500, 30049, 8221, 97),
('KUKES', 479, 634, 6598, 14623, 10705, 2373, 18),
('LEZHE', 1256, 756, 9579, 24998, 17062, 3292, 44),
('SHKODER', 1732, 1402, 15400, 39089, 27357, 7009, 98),
('TIRANE', 3828, 3122, 38903, 94189, 115698, 59386, 1428),
('VLORE', 1209, 1142, 10445, 29557, 25987, 8611, 105);

-- --------------------------------------------------------

--
-- Table structure for table `population_by_city`
--

CREATE TABLE `population_by_city` (
  `region` text,
  `population` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `population_by_city`
--

INSERT INTO `population_by_city` (`region`, `population`) VALUES
('Berat', 141944),
('Diber', 137047),
('Durres', 262785),
('Ebasan', 295827),
('Fier', 310331),
('Gjirokaster', 72176),
('Korce', 220357),
('Kukes', 85292),
('Lezhe', 134027),
('Shkoder', 215347),
('Tirane', 749365),
('Vlore', 175640);

-- --------------------------------------------------------

--
-- Table structure for table `primary_low_public_private`
--

CREATE TABLE `primary_low_public_private` (
  `year` text,
  `private` int(11) DEFAULT NULL,
  `public` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `primary_low_public_private`
--

INSERT INTO `primary_low_public_private` (`year`, `private`, `public`) VALUES
('2004', 100, 2764),
('2005', 104, 2788),
('2006', 23, 2739),
('2007', 126, 2704),
('2008', 135, 2649),
('2009', 146, 2632),
('2010', 141, 2230),
('2011', 133, 2509);

-- --------------------------------------------------------

--
-- Table structure for table `region_based_currently_schooled`
--

CREATE TABLE `region_based_currently_schooled` (
  `region` varchar(50) DEFAULT NULL,
  `never_attended` int(11) DEFAULT NULL,
  `no_diploma` int(11) DEFAULT NULL,
  `primary` int(11) DEFAULT NULL,
  `low_secondary` int(11) DEFAULT NULL,
  `high_school` int(11) DEFAULT NULL,
  `uni_bachelor` int(11) DEFAULT NULL,
  `uni_master` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `region_based_currently_schooled`
--

INSERT INTO `region_based_currently_schooled` (`region`, `never_attended`, `no_diploma`, `primary`, `low_secondary`, `high_school`, `uni_bachelor`, `uni_master`) VALUES
('Urban', 46, 49, 39, 40, 66, 83, 85),
('Rural', 44, 41, 61, 60, 34, 17, 15);

-- --------------------------------------------------------

--
-- Table structure for table `returned_people`
--

CREATE TABLE `returned_people` (
  `groupage` text,
  `2001` int(11) DEFAULT NULL,
  `2002` int(11) DEFAULT NULL,
  `2003` int(11) DEFAULT NULL,
  `2004` int(11) DEFAULT NULL,
  `2005` int(11) DEFAULT NULL,
  `2006` int(11) DEFAULT NULL,
  `2007` int(11) DEFAULT NULL,
  `2008` int(11) DEFAULT NULL,
  `2009` int(11) DEFAULT NULL,
  `2010` int(11) DEFAULT NULL,
  `2011` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `returned_people`
--

INSERT INTO `returned_people` (`groupage`, `2001`, `2002`, `2003`, `2004`, `2005`, `2006`, `2007`, `2008`, `2009`, `2010`, `2011`) VALUES
('groupage', 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011),
('0-14', 326, 661, 900, 1001, 1038, 914, 896, 1129, 2110, 3513, 3593),
('15-19', 255, 359, 381, 326, 358, 265, 240, 322, 570, 982, 1326),
('20-24', 191, 226, 328, 300, 362, 377, 546, 1081, 2197, 3488, 3186),
('25-29', 278, 450, 606, 703, 926, 1108, 1354, 2061, 3409, 4595, 4200),
('30-34', 692, 1043, 1248, 1402, 1621, 1473, 1517, 1836, 2907, 3752, 3498),
('35-39', 950, 1265, 1430, 1412, 1491, 1189, 1167, 1464, 2007, 2759, 2610),
('40-44', 813, 1063, 1058, 993, 1089, 854, 803, 993, 1428, 1894, 1985),
('45-49', 499, 677, 665, 622, 655, 582, 500, 696, 992, 1538, 1569),
('50-54', 355, 481, 479, 462, 525, 451, 430, 591, 899, 1385, 1397),
('55-59', 238, 334, 346, 320, 383, 339, 348, 435, 714, 1032, 1200),
('60-64', 201, 246, 239, 309, 337, 294, 263, 330, 608, 866, 1009),
('65+', 260, 462, 471, 478, 581, 504, 520, 634, 933, 1346, 1763);

-- --------------------------------------------------------

--
-- Table structure for table `total_returned_people`
--

CREATE TABLE `total_returned_people` (
  `year` text,
  `total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `total_returned_people`
--

INSERT INTO `total_returned_people` (`year`, `total`) VALUES
('2001', 1050),
('2002', 1696),
('2003', 2215),
('2004', 2330),
('2005', 2684),
('2006', 2664),
('2007', 3036),
('2008', 4593),
('2009', 8286),
('2010', 12578),
('2011', 12305);

-- --------------------------------------------------------

--
-- Table structure for table `uni_public_private`
--

CREATE TABLE `uni_public_private` (
  `year` text,
  `private` int(11) DEFAULT NULL,
  `public` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `uni_public_private`
--

INSERT INTO `uni_public_private` (`year`, `private`, `public`) VALUES
('2004', 4, 10),
('2005', 5, 10),
('2006', 14, 11),
('2007', 14, 11),
('2008', 15, 11),
('2009', 29, 11),
('2010', 31, 11),
('2010', 42, 11);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
