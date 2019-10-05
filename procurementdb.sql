-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 05, 2019 at 06:38 PM
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
-- Database: `procurementdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `ID` int(11) NOT NULL,
  `FIRST_NAME` varchar(45) DEFAULT NULL,
  `LAST_NAME` varchar(45) DEFAULT NULL,
  `NIC` varchar(45) DEFAULT NULL,
  `LOCATION` varchar(45) DEFAULT NULL,
  `EMP_TYPE` varchar(45) DEFAULT NULL,
  `PASSWORD` varchar(45) DEFAULT NULL,
  `EMAIL` varchar(45) DEFAULT NULL,
  `PHONE` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`ID`, `FIRST_NAME`, `LAST_NAME`, `NIC`, `LOCATION`, `EMP_TYPE`, `PASSWORD`, `EMAIL`, `PHONE`) VALUES
(1, 'inusha', 'maduranga', '9642158352V', 'PO', 'PO', '123', 'supplernew1@gmai.com', NULL),
(2, 'naduni', 'ranasinghe', '9642158352V', '', 'MGR', '123', 'supplernew1@gmai.com', NULL),
(3, 'shaini', 'thenuwara', '9642158352V', '', 'SM', '123', 'supplernew1@gmai.com', NULL),
(4, 'Pasan', 'Kambutugamuwa', NULL, NULL, 'SP', '123', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `ID` int(11) NOT NULL,
  `SID` int(11) NOT NULL,
  `INAME` varchar(255) NOT NULL,
  `CURRENT_PRICE` int(11) NOT NULL,
  `CURRENT_STATUS` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`ID`, `SID`, `INAME`, `CURRENT_PRICE`, `CURRENT_STATUS`) VALUES
(1, 1, 'item 1', 200, 'AVALABLE'),
(2, 2, 'item 2', 100, 'AVALABLE'),
(3, 3, 'item 3', 200, 'AVALABLE'),
(4, 4, 'item 4', 500, 'AVALABLE'),
(5, 5, 'item 5', 400, 'AVALABLE'),
(6, 4, 'item 6', 600, 'AVALABLE'),
(7, 4, 'item 7', 800, 'AVALABLE'),
(8, 1, 'item 8', 800, 'AVALABLE'),
(9, 2, 'item 9', 900, 'AVALABLE'),
(10, 3, 'item 10', 500, 'AVALABLE'),
(11, 6, 'item new', 450, 'AVAILABLE');

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

CREATE TABLE `order_item` (
  `ID` int(11) NOT NULL,
  `ORDER_ID` int(11) NOT NULL,
  `ITEM_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_item`
--

INSERT INTO `order_item` (`ID`, `ORDER_ID`, `ITEM_ID`) VALUES
(1, 1, 2),
(2, 1, 5),
(3, 1, 6),
(4, 2, 1),
(5, 2, 2),
(6, 2, 3),
(7, 3, 4),
(8, 3, 5),
(9, 3, 6),
(10, 4, 1),
(11, 4, 2),
(12, 4, 5),
(13, 5, 3),
(14, 5, 6),
(15, 6, 1),
(16, 6, 3),
(17, 6, 2),
(18, 6, 4),
(19, 7, 1),
(20, 7, 2),
(21, 7, 3),
(22, 7, 4),
(23, 8, 4),
(24, 8, 5),
(25, 9, 3),
(26, 9, 5),
(27, 9, 8),
(28, 10, 3),
(29, 10, 8),
(30, 10, 5),
(31, 10, 8);

-- --------------------------------------------------------

--
-- Table structure for table `order_m`
--

CREATE TABLE `order_m` (
  `ID` int(11) NOT NULL,
  `ORDER_NAME` varchar(255) DEFAULT NULL,
  `TOTAL_PRICE` int(11) DEFAULT NULL,
  `STATUS` varchar(50) DEFAULT NULL,
  `REMARK` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_m`
--

INSERT INTO `order_m` (`ID`, `ORDER_NAME`, `TOTAL_PRICE`, `STATUS`, `REMARK`) VALUES
(1, 'Order 1', 80000, 'SUBMIT', ''),
(2, 'Order 2', 45000, 'SUBMIT_TO_APPROVE', ''),
(3, 'Order 3', 63000, 'APPROVED_FROM_MANAGER', ''),
(4, 'Order 4', 7200, 'REJECTED_FROM_MANAGER', ''),
(5, 'Order 5', 9000, 'SEND_TO_SUPPLIER', ''),
(6, 'Order 6', 9000, 'INITIATE', ''),
(7, 'Order 7', 9000, 'REJECT_TO_SITE_MANAGER', ''),
(8, 'order test', 500, 'INITIATE', NULL),
(9, 'order test 2', 1400, 'INITIATE', NULL),
(10, 'order test Final', 2200, 'SEND_TO_SUPPLIER', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `site`
--

CREATE TABLE `site` (
  `ID` int(11) NOT NULL,
  `SITE_NAME` varchar(255) DEFAULT NULL,
  `LOCATION` varchar(255) DEFAULT NULL,
  `START_DATE` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `site`
--

INSERT INTO `site` (`ID`, `SITE_NAME`, `LOCATION`, `START_DATE`) VALUES
(1, 'site 1', 'Maharagama-new building', '2019-01-01'),
(2, 'site 2', 'Maharagama-new building', '2019-01-04'),
(3, 'site 3', 'Maharagama-new building', '2019-01-08'),
(4, 'site 4', 'Maharagama-new building', '2019-01-10');

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `ID` int(11) NOT NULL,
  `SNAME` varchar(255) NOT NULL,
  `PASSWORD` varchar(50) NOT NULL,
  `EMAIL` varchar(255) DEFAULT NULL,
  `ADDRESS` varchar(255) DEFAULT NULL,
  `PHONE` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`ID`, `SNAME`, `PASSWORD`, `EMAIL`, `ADDRESS`, `PHONE`) VALUES
(1, 'supplier 1', '123', NULL, NULL, NULL),
(2, 'supplier 2', '456', NULL, NULL, NULL),
(3, 'supplier 3', '789', NULL, NULL, NULL),
(4, 'supplier 4', '123', NULL, NULL, NULL),
(5, 'supplier 5', '456', NULL, NULL, NULL),
(6, 'suppler new 08', '123', 'supplernew1@gmai.com', 'Address:', '0784532687');

-- --------------------------------------------------------

--
-- Table structure for table `systemuser`
--

CREATE TABLE `systemuser` (
  `ID` int(11) NOT NULL,
  `USERNAME` varchar(255) NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `EMAIL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `systemuser`
--

INSERT INTO `systemuser` (`ID`, `USERNAME`, `PASSWORD`, `EMAIL`) VALUES
(1, 'naduni', '123', NULL),
(2, 'inusha', '123', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `order_m`
--
ALTER TABLE `order_m`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `site`
--
ALTER TABLE `site`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `systemuser`
--
ALTER TABLE `systemuser`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `order_item`
--
ALTER TABLE `order_item`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `order_m`
--
ALTER TABLE `order_m`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `site`
--
ALTER TABLE `site`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `systemuser`
--
ALTER TABLE `systemuser`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
