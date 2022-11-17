ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'nanna';

create table customer(
customer_id int not null auto_increment,
hotel varchar(50),
room_selected varchar(50),
first_name varchar(200),
last_name varchar(200),
contact_no bigint,
email varchar(200),
arrival_date date,
departure_date date,
number_of_adults int,
number_of_children int,
selected_room int,
total_amount int,
type_of_payment varchar(50),
status varchar(50) default 'booked',
any_suggestions varchar(255),
primary key(customer_id)
);

create table selected(
room_selected varchar(50),
email varchar(200),
selected_room int
);

create table transport(
first_name varchar(250),
last_name varchar(250),
email varchar(250),
vehicle_type varchar(200),
contact_no bigint,
room_number int,
no_of_passengers int,
pick_up_point varchar(300),
destination_point varchar(300),
vehicle_number int,
contact_number bigint
);

create table standardroomsavailable(
rooms_available int
);

insert into standardroomsavailable
values
(10);

create table login(
email varchar(1000),
password varchar(100)
);

create table signup(
username varchar(1000),
password varchar(100),
confirm_password  varchar(100),
corporate_code varchar(50)
);


create table deluxeroomsavailable(
rooms_available int
);

insert into deluxeroomsavailable
values
(10);

create table superiorroomsavailable(
rooms_available int
);

insert into superiorroomsavailable
values
(10);

create table premiumroomsavailable(
rooms_available int
);

insert into premiumroomsavailable
values
(10);

create table staff(
name varchar(50),
age int,
gender varchar(50),
email_id varchar(50),
emp_id int,
primary key(emp_id)
);

insert into staff values
('RAM', 34, 'M','ram@gmail.com',100),
('SHYAM', 30, 'M', 'shyam@gmail.com', 101),
('PAVAN', 28, 'M', 'pavan@gmail.com', 102),
('NARAYANA', 40, 'M', 'narayana@gmail.com', 103),
('VENKATESH', 29, 'M', 'venkatesh@gmail.com', 104),
('SWAMI', 35, 'M', 'swami@gmail.com', 105),
('CHAITHANYA', 27, 'M', 'chaithanya@gmail.com', 106),
('SRIKANTH', 29, 'M', 'srikanth@gmail.com', 107),
('SIDDHARTH', 27, 'M', 'sidhharth@gmail.com', 108),
('SAKETH', 23, 'M', 'saketh@gmail.com', 109),
('ANJANEYULU', 45, 'M', 'anjaneyulu@gmail.com', 110),
('SHAURYA', 34, 'M','shaurya@gmail.com',7000),
('JENNNIE', 26, 'F','jennie@gmail.com', 7001),
('JISOO', 27, 'F','jisoo@gmail.com',7002),
('GDRAGON', 28, 'M','gdragon@gmail.com ',7003),
('JACKSON', 29, 'M','jackson@gmail.com',7004),
('GEETHA', 29, 'F','geetha@gmail.com' ,2000),
('SANDHYA', 25, 'F','sandhya@gmail.com', 2001),
('NISHA', 25, 'F','nisha@gmail.com ', 2002),
('RAGHU', 29, 'M','raghu@gmail.com',2003),
('JAY', 25, 'M','jay@gmail.com',2004),
('RITHU', 26, 'F','rithu@gmail.com',2005),
('CHAY', 27, 'M','chy@gmail.com', 5000),
('AMY', 24, 'F','amy@gmail.com', 5001),
('SHRUTHI', 26, 'F','shruthi@gmail.com', 5002),
('INAYA', 27, 'F','inaya@gmail.com', 5003),
('KABIR', 24, 'F','kabir@gmail.com',5004),
('DHRUV', 26, 'M','dhruv@gmail.com',5005),
('RAGHAV', 27, 'M','raghav@gmail.com',5006),
('LATHA', 34, 'F','latha@gmail.com',5007),
('ANAND', 27, 'M','anand@gmail.com',5008),
('ARAVIND', 34, 'M','aravind@gmail.com',5009),
('ANKUSH', 23, 'M','ankush@gmail.com',5010),
('ABDUL', 29, 'M','abdul@gmail.com',5011),
('CHARAN', 34, 'M','charan@gmail.com',5012),
('JONGDAE', 35, 'M','jongdae@gmail.com', 5013),
('KAI', 28, 'F','kai@gmail.com', 5014),
('JAEBEOM', 29, 'M','jaebeom@gmail.com', 5015),
('HARU', 23, 'F','haru@gmail.com', 5016),
('ROSY', 24, 'F','rosy@gmail.com', 5017),
('SAM', 25, 'F','sam@gmail.com', 5018),
('KAJAL', 27, 'F','kajal@gmail.com',5019),
('KAVYA', 24, 'F','kavya@gmail.com',5020),
('ANUJ', 26, 'M','anuj@gmail.com',5021),
('MAYURI', 34, 'F','mayuri@gamil.com',5022),
('JAIN', 25, 'M','jain@gmail.com', 5023),
('PALLAVI', 26, 'F','pallavi@gmail.com',5024),
('HARSHINI', 21, 'F','harshini@gmail.com', 3000),
('ROOPA', 24, 'F','roopa@gmail.com', 3001),
('POOJITHA', 21, 'F','poojitha@gmail.com',3002),
('DIVYA', 26, 'F','divya@gmail.com', 3003),
('ABHINAV', 24, 'M','abhinav@gmail.com', 3004),
('JAYANTH', 23, 'M','jayanth@gmail.com', 3005),
('SRAVYA', 25, 'F','sravya@gamil.com', 3007),
('ANUKSHA', 22, 'F','anuksha@gmail.com', 3008),
('MARK', 25, 'M','mark@gmail.com', 3009),
('BAMBAM', 26, 'M','bambam@gmail.com', 3010),
('YOUNGJAE', 25, 'M','youngjae@gmail.com', 3011),
('JINYOUNG', 26, 'M','jinyoung@gmail.com', 3012),
('DINESH', 24, 'M','dinesh@gmail.com', 3013),
('NAMJOON', 25, 'M','namjoon@gmail.com', 3014),
('KRISHNA', 32, 'M','krishna@gmail.com', 3015),
('NIDHI', 25, 'F', 'nidhi@gmail.com',3016),
('Ravina', 30, 'F','ravina@gmail.com',3017),
('ANIRUDH',27,'M','anirudh@phrhotels.ac.in',1),
('ARYA',28,'M','arya@phrhotels.ac.in',2),
('POOJITHA',24,'F','poojitha@phrhotels.ac.in',3),
('ROOPA',25,'F','roopa@phrhotels.ac.in',4),
('HARSHINI',23,'F','harshini@phrhotels.ac.in',5);

create table registerids(
name varchar(50),
age int ,
contact_no bigint,
designation varchar(50),
email varchar(50),
emp_id int,
Primary key(email),
foreign key (emp_id) references staff(emp_id)
);

insert into registerids values('ANIRUDH',27,9912345678,'MANAGER','anirudh@phrhotels.ac.in',1),
('ARYA',28,9567843210,'MANAGER','arya@phrhotels.ac.in',2),
('POOJITHA',24,9123456785,'PARTNER','poojitha@phrhotels.ac.in',3),
("ROOPA",25,9726834123,"PARTNER","roopa@phrhotels.ac.in",4),
('HARSHINI',23,9023456789,'PARTNER','harshini@phrhotels.ac.in',5);

create table service(
name varchar(50),
age int,
Gender varchar(50),
emp_id int,
foreign key (emp_id) references staff(emp_id)

);

insert into service values
('HARSHINI', 21, 'F', 3000),
('ROOPA', 24, 'F', 3001),
('POOJITHA', 21, 'F', 3002),
('DIVYA', 26, 'F', 3003),
('ABHINAV', 24, 'M', 3004),
('JAYANTH', 23, 'M', 3005),
('SRAVYA', 25, 'F', 3007),
('ANUKSHA', 22, 'F', 3008),
('MARK', 25, 'M', 3009),
('BAMBAM', 26, 'M', 3010),
('YOUNGJAE', 25, 'M', 3011),
('JINYOUNG', 26, 'M', 3012),
('DINESH', 24, 'M', 3013),
('NAMJOON', 25, 'M', 3014),
('KRISHNA', 32, 'M', 3015),
('NIDHI', 25, 'F', 3016),
('Ravina', 30, 'F', 3017);

create table Transportation(
name varchar(50),
age int,
Gender varchar(50),
contact_number bigint,
emp_id int,
foreign key (emp_id) references staff(emp_id)
);


insert into Transportation values
('RAM', 34, 'M', '9991202345', 100),
('SHYAM', 30, 'M', '987654321', 101),
('PAVAN', 28, 'M', '897654321', 102),
('NARAYANA', 40, 'M', '986754321', 103),
('VENKATESH', 29, 'M', '967854321', 104),
('SWAMI', 35, 'M', '995674321', 105),
('CHAITHANYA', 27, 'M', '8179295329', 106),
('SRIKANTH', 29, 'M', '9345216780', 107),
('SIDDHARTH', 27, 'M', '9989293375', 108),
('SAKETH', 23, 'M', '9912795329', 109),
('ANJANEYULU', 45, 'M', '9603119839', 110);

create table Menu(
name varchar(50),
age int,
Gender varchar(50),
emp_id int,
foreign key (emp_id) references staff(emp_id)

);

insert into Menu values
('CHAY', 27, 'M', 5000),
('AMY', 24, 'F', 5001),
('SHRUTHI', 26, 'F', 5002),
('INAYA', 27, 'F', 5003),
('KABIR', 24, 'F', 5004),
('DHRUV', 26, 'M', 5005),
('RAGHAV', 27, 'M', 5006),
('LATHA', 34, 'F', 5007),
('ANAND', 27, 'M', 5008),
('ARAVIND', 34, 'M', 5009),
('ANKUSH', 23, 'M', 5010),
('ABDUL', 29, 'M', 5011),
('CHARAN', 34, 'M', 5012),
('JONGDAE', 35, 'M', 5013),
('KAI', 28, 'F', 5014),
('JAEBEOM', 29, 'M', 5015),
('HARU', '23', 'F', 5016),
('ROSY', '24', 'F', 5017),
('SAM', '25', 'F', 5018),
('KAJAL', '27', 'F', 5019),
('KAVYA', '24', 'F', 5020),
('ANUJ', '26', 'M', 5021),
('MAYURI', '34', 'F', 5022),
('JAIN', '25', 'M', 5023),
('PALLAVI', '26', 'F', 5024);

create table Spa(
name varchar(50),
age int,
Gender varchar(50),
emp_id int,
foreign key (emp_id) references staff(emp_id)

);


insert into Spa values
('GEETHA', 29, 'F', 2000),
('SANDHYA', 25, 'F', 2001),
('NISHA', 25, 'F', 2002),
('RAGHU', 29, 'M', 2003),
('JAY', 25, 'M', 2004),
('RITHU', 26, 'F', 2005);

create table Gym(
name varchar(50),
age int,
Gender varchar(50),
emp_id int,
foreign key (emp_id) references staff(emp_id)

);

insert into  Gym values
('SHAURYA', '34', 'M', 7000),
('JENNNIE', '26', 'F', 7001),
('JISOO', '27', 'F', 7002),
('GDRAGON', '28', 'M', 7003),
('JACKSON', '29', 'M', 7004);

create table room(
  Room_id int,
  emp_id int,
  Room_type varchar(50),
  primary key(Room_id),
  foreign key (emp_id) references staff(emp_id));
  
  
  insert into room values
  (101,3000,'STANDARD ROOM'),
  (102,3000,'STANDARD ROOM'),
  (103,3000,'STANDARD ROOM'),
  (104,3000,'STANDARD ROOM'),
  (105,3000,'STANDARD ROOM'),
  (106,3001,'STANDARD ROOM'),
  (107,3001,'STANDARD ROOM'),
  (108,3001,'STANDARD ROOM'),
  (109,3001,'STANDARD ROOM'),
  (110,3001,'STANDARD ROOM'),
  (201,3004,'DELUXE ROOM'),
  (202,3004,'DELUXE ROOM'),
  (203,3004,'DELUXE ROOM'),
  (204,3004,'DELUXE ROOM'),
  (205,3004,'DELUXE ROOM'),
  (206,3005,'DELUXE ROOM'),
  (207,3005,'DELUXE ROOM'),
  (208,3005,'DELUXE ROOM'),
  (209,3005,'DELUXE ROOM'),
  (210,3005,'DELUXE ROOM'),
  (301,3009,'SUPERIOR ROOM'),
  (302,3009,'SUPERIOR ROOM'),
  (303,3009,'SUPERIOR ROOM'),
  (304,3009,'SUPERIOR ROOM'),
  (305,3009,'SUPERIOR ROOM'),
  (306,3011,'SUPERIOR ROOM'),
  (307,3011,'SUPERIOR ROOM'),
  (308,3011,'SUPERIOR ROOM'),
  (309,3011,'SUPERIOR ROOM'),
  (310,3011,'SUPERIOR ROOM'),
  (401,3015,'PREMIUM ROOM'),
  (402,3015,'PREMIUM ROOM'),
  (403,3015,'PREMIUM ROOM'),
  (404,3016,'PREMIUM ROOM'),
  (405,3016,'PREMIUM ROOM'),
  (406,3016,'PREMIUM ROOM'),
  (407,3016,'PREMIUM ROOM'),
  (408,3016,'PREMIUM ROOM'),
  (409,3016,'PREMIUM ROOM'),
  (410,3016,'PREMIUM ROOM');