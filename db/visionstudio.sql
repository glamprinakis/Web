-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db:3306:3306
-- Generation Time: Dec 04, 2023 at 11:50 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `visionstudio`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `cid` int NOT NULL,
  `uid` int NOT NULL,
  `pid` int NOT NULL,
  `insertionDate` datetime NOT NULL,
  `amount` int NOT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `oid` int NOT NULL,
  `uid` int NOT NULL,
  `pid` int NOT NULL,
  `totalOrderId` varchar(200) NOT NULL,
  `orderDate` datetime NOT NULL,
  `orderAmount` int NOT NULL,
  `orderCost` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`oid`, `uid`, `pid`, `totalOrderId`, `orderDate`, `orderAmount`, `orderCost`) VALUES
(18, 1, 2, '1', '2023-10-26 14:42:02', 1, 129.00),
(21, 1, 2, 'ORDER-20231030-172802-1', '2023-10-30 17:28:02', 1, 100.75),
(22, 1, 2, 'ORDER-20231030-173014-1', '2023-10-30 17:30:14', 1, 100.75),
(23, 1, 2, 'ORDER-20231030-173559-1', '2023-10-30 17:35:59', 1, 100.75),
(36, 9, 2, 'ORDER-20231030-181932-9', '2023-10-30 18:20:18', 1, 100.75),
(38, 1, 2, 'ORDER-20231030-182103-1', '2023-10-30 18:21:24', 1, 100.75),
(40, 9, 2, 'ORDER-20231030-182224-9', '2023-10-30 18:22:38', 1, 100.75);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `pid` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `product_code` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `image` varchar(512) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`pid`, `name`, `product_code`, `category`, `brand`, `stock`, `image`, `price`) VALUES
(2, 'LG 24MP60G-B IPS Gaming Monitor', 'LG45656', 'monitors', 'LG', 26, 'https://a.scdn.gr/images/sku_main_images/030067/30067365/20210719094314_lg_24mp60g_b_monitor_23_8_fhd.jpeg', 129.00),
(16, 'Dell Vostro 3000', '5f039b4ef00', 'laptops', 'Dell', 10, 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/vostro-notebooks/15-3510/media-gallery/archive/dv3510nt_cnb_05000ff090_bk.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=606&qlt=100,1&resMode=sharp2&size=606,402&chrss=full', 1032.50),
(17, 'Lenovo Thinkpad E14 Gen 3 (14\" AMD)', '08389ddsa32', 'laptops', 'Lenovo', 5, 'https://www.lenovo.com/medias/lenovo-laptops-thinkpad-e-series-e14-gen3-amd-hero.png?context=bWFzdGVyfHJvb3R8MzI1MDI2fGltYWdlL3BuZ3xoMTAvaDAxLzE0MTA2OTI4MzgxOTgyLnBuZ3wwNWVkMTUzOGE0ZGNhOTNmMjNhYzJhYTZkNzdhMzAyNmE1ZmRkYTc4MWVlMzk1ODAwNTA0ZmQ1ZmUxYzBlNmI2', 1509.75),
(18, 'Lenovo Thinkpad L14', '39b4ef0058a1', 'laptops', 'Lenovo', 0, 'https://www.lenovo.com/medias/lenovo-laptop-thinkpad-l15-intel-hero.png?context=bWFzdGVyfHJvb3R8MzgxMTU4fGltYWdlL3BuZ3xoMDMvaGM5LzE0MzIyOTk4OTAyODE0LnBuZ3xkNTExOTkzODA2NzViZGQwOTY1NDg5NDkzMWViYTFiYjMwMTk5ZWQyM2M5MDg5YzkwOTUwZDdhMjI3NGRiOGM2', 2021.25),
(19, 'Lenovo Thinkpad X1 Carbon', '58a1d652f13d', 'laptops', 'Lenovo', 8, 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8ODQ4NDd8aW1hZ2UvcG5nfGgyMi9oOGYvMTA2NzQ1ODc3Mjk5NTAucG5nfDQzODYxOTc5ODA0MWJhZTQyYThjOTAzZjE0NDI2NWVjYjY5MjE3MGFiMWEzODhlN2UyMGUwNGZhMWRmOTJmNzg/lenovo-laptop-thinkpad-x1-carbon-gen8-subseries-hero.png', 1256.80),
(20, 'Apple Macbook Pro M2', 'f6b45d89e', 'laptops', 'Apple', 0, 'https://images.macrumors.com/t/MwgTEggiztXrvIN2l8bZny1f93M=/1600x/article-new/2013/09/2023-macbook-pro-transparent.png', 1675.20),
(21, 'Apple Macbook Air M2', 'f0058a1d65', 'laptops', 'Apple', 12, 'https://images.macrumors.com/t/AI0UfpE0Io0I3yfew8TtFUxyi3s=/800x0/smart/article-new/2013/09/macbook-air-m2-roundup-header.png?lossy', 926.75);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `name`, `surname`, `username`, `password`, `email`, `city`, `address`) VALUES
(1, 'Αιμίλιος', 'Τζαβάρας', 'atzavaras', '1234', 'atzavaras94@gmail.com', 'Chania', 'Kounoupidiana'),
(9, 'Μάνος', 'Ιερωνυμάκης', 'm.ier', '1234', 'm.ier@hotmail.com', 'Rethymno', 'Address'),
(10, 'Απόστολος', 'Λαζίδης', 'apo.laz', '12345', 'alazidis@tuc.gr ', 'Chania', 'SODY'),
(12, 'Αλέξης', 'Σταυρουλάκης', 'alex.stavr', '1234', 'astavroulakis@tuc.gr', 'Chania', 'Xalepa'),
(23, 'Inesa', 'Sar', 'ines7', '12345', 'inesa.saratsi@gmail.com', 'Chania', 'Kounoupidiana');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cid`),
  ADD KEY `uid` (`uid`),
  ADD KEY `pid` (`pid`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`oid`),
  ADD KEY `uid` (`uid`),
  ADD KEY `pid` (`pid`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`,`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `oid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `pid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `products` (`pid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
