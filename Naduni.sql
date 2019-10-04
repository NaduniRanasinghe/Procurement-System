CREATE TABLE `employee` (
  `ID` int(11) NOT NULL auto_increment,
  `FISRTNAME` varchar(45) DEFAULT NULL,
  `LASTNAME` varchar(45) DEFAULT NULL,
  `NIC` varchar(45) DEFAULT NULL,
  `WORKPLACE` varchar(45) DEFAULT NULL,
  `EMPTYPE` varchar(45) DEFAULT NULL,
  `PASSWORD` varchar(45) DEFAULT NULL,
  `EMAIL` varchar(45) DEFAULT NULL,
  `PHONE` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `site` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SITENAME` varchar(45) DEFAULT NULL,
  `LOCATION` varchar(45) DEFAULT NULL,
  `STARTDATE` date DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


