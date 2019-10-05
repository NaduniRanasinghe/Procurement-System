CREATE TABLE `creditnote` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `RETURNGOODID` varchar(45) DEFAULT NULL,
  `CREDITNOTE` varchar(45) DEFAULT NULL,
   PRIMARY KEY (`ID`)
) 
ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1

insert into creditnote values(1,'E020','Expired');
insert into creditnote values(2,'E022','Unsatisfied');
insert into creditnote values(3,'E021','Expired');
insert into creditnote values(4,'E026','Expired');

CREATE TABLE `returnitems` (
  `RETURNITEMID` int(11) NOT NULL AUTO_INCREMENT,
  `RETDATE` varchar(45) DEFAULT NULL,
  `RETITEMNAME` varchar(45) DEFAULT NULL,
  `PRICE` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`RETURNITEMID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1


insert into returnitems values(1,'03-08-20019','metal pipes','42000');
insert into returnitems values(2,'02-10-20019','Woods','22000');
insert into returnitems values(3,'03-09-20019','Gloves','12000');
insert into returnitems values(4,'02-04-20019','Metal Pipes','6000');

CREATE TABLE `delivery` (
  `DID` int(11) NOT NULL AUTO_INCREMENT,
  `CDate` varchar(45) DEFAULT NULL,
  `SUPPLIER` varchar(45) DEFAULT NULL,
  `ORDERNAME` varchar(45) DEFAULT NULL,
  `NOTES` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`DID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1

insert into delivery values(1,'03-09-2019','Lakshan Wijenayaka','E002','added by pasan');
insert into delivery values(2,'03-10-2019','Thiue Samarakoon','E020','not errors,delivery');
insert into delivery values(3,'03-08-2019','Lakshan Wijenayaka','E042','added by pasan');
insert into delivery values(4,'29-09-2019','Lakshan Wijenayaka','E0232','added by pasan');




