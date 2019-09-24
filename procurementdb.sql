-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2019 at 06:54 PM
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
(1, 2, 'item1', 200, 'AVAILABLE'),
(2, 2, 'item1', 100, 'AVAILABLE'),
(3, 1, 'item1', 150, 'AVAILABLE'),
(4, 1, 'item5', 250, 'AVAILABLE'),
(5, 2, 'item6', 450, 'AVAILABLE'),
(6, 1, 'item7', 550, 'AVAILABLE');

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
(3, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `order_m`
--

CREATE TABLE `order_m` (
  `ID` int(11) NOT NULL,
  `ORDER_NAME` varchar(255) NOT NULL,
  `TOTAL_PRICE` int(11) DEFAULT NULL,
  `STATUS` varchar(50) NOT NULL,
  `REMARK` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_m`
--

INSERT INTO `order_m` (`ID`, `ORDER_NAME`, `TOTAL_PRICE`, `STATUS`, `REMARK`) VALUES
(1, 'First Order', NULL, '', '');

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
(1, 'Supplier 1', '123', 'principal@gunawadana.sch.lk', 'xcxc', '0782445362'),
(2, 'Supplier 2', '123', 'principal@gunawadana.sch.lk', 'xcxc', '0782445362');

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
(1, 'inusha', '123', 'inusham45@gmail.com'),
(2, 'inusham', '123', 'inusham45@gmail.com');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `order_item`
--
ALTER TABLE `order_item`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order_m`
--
ALTER TABLE `order_m`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `systemuser`
--
ALTER TABLE `systemuser`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
