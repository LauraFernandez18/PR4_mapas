-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-03-2022 a las 15:54:45
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `visit_barcelona`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_etiquetas`
--

CREATE TABLE `tbl_etiquetas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `fk_lugar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_etiqueta_usuario`
--

CREATE TABLE `tbl_etiqueta_usuario` (
  `id` int(11) NOT NULL,
  `fav` enum('si','no') NOT NULL,
  `fk_usuario` int(11) NOT NULL,
  `fk_etiqueta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_gincana`
--

CREATE TABLE `tbl_gincana` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_grupo`
--

CREATE TABLE `tbl_grupo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `fk_gincana` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_grupo_usuario`
--

CREATE TABLE `tbl_grupo_usuario` (
  `id` int(11) NOT NULL,
  `fk_usuario` int(11) NOT NULL,
  `fk_grupo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_lugares`
--

CREATE TABLE `tbl_lugares` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `longitud` decimal(10,8) NOT NULL,
  `latitud` decimal(10,8) NOT NULL,
  `foto` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_punto_control`
--

CREATE TABLE `tbl_punto_control` (
  `id` int(11) NOT NULL,
  `pista` varchar(350) NOT NULL,
  `fk_gincana` int(11) NOT NULL,
  `fk_lugar` int(11) NOT NULL,
  `orden` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pwd` varchar(50) NOT NULL,
  `tipo_usu` enum('administrador','usuario') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_etiquetas`
--
ALTER TABLE `tbl_etiquetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `etiqueta_lugar_fk` (`fk_lugar`);

--
-- Indices de la tabla `tbl_etiqueta_usuario`
--
ALTER TABLE `tbl_etiqueta_usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `etiqueta_usuario_fk` (`fk_usuario`),
  ADD KEY `etiqueta_etiqueta` (`fk_etiqueta`);

--
-- Indices de la tabla `tbl_gincana`
--
ALTER TABLE `tbl_gincana`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tbl_grupo`
--
ALTER TABLE `tbl_grupo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `grupo_gincana_fk` (`fk_gincana`);

--
-- Indices de la tabla `tbl_grupo_usuario`
--
ALTER TABLE `tbl_grupo_usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `grupo_grupo_fk` (`fk_usuario`);

--
-- Indices de la tabla `tbl_lugares`
--
ALTER TABLE `tbl_lugares`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tbl_punto_control`
--
ALTER TABLE `tbl_punto_control`
  ADD PRIMARY KEY (`id`),
  ADD KEY `punto_control_gincana_fk` (`fk_gincana`),
  ADD KEY `punto_control_lugar_fk` (`fk_lugar`);

--
-- Indices de la tabla `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_etiquetas`
--
ALTER TABLE `tbl_etiquetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_etiqueta_usuario`
--
ALTER TABLE `tbl_etiqueta_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_gincana`
--
ALTER TABLE `tbl_gincana`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_grupo`
--
ALTER TABLE `tbl_grupo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_grupo_usuario`
--
ALTER TABLE `tbl_grupo_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_lugares`
--
ALTER TABLE `tbl_lugares`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_punto_control`
--
ALTER TABLE `tbl_punto_control`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_etiquetas`
--
ALTER TABLE `tbl_etiquetas`
  ADD CONSTRAINT `etiqueta_lugar_fk` FOREIGN KEY (`fk_lugar`) REFERENCES `tbl_lugares` (`id`);

--
-- Filtros para la tabla `tbl_etiqueta_usuario`
--
ALTER TABLE `tbl_etiqueta_usuario`
  ADD CONSTRAINT `etiqueta_etiqueta` FOREIGN KEY (`fk_etiqueta`) REFERENCES `tbl_etiquetas` (`id`),
  ADD CONSTRAINT `etiqueta_usuario_fk` FOREIGN KEY (`fk_usuario`) REFERENCES `tbl_users` (`id`);

--
-- Filtros para la tabla `tbl_grupo`
--
ALTER TABLE `tbl_grupo`
  ADD CONSTRAINT `grupo_gincana_fk` FOREIGN KEY (`fk_gincana`) REFERENCES `tbl_gincana` (`id`);

--
-- Filtros para la tabla `tbl_grupo_usuario`
--
ALTER TABLE `tbl_grupo_usuario`
  ADD CONSTRAINT `grupo_grupo_fk` FOREIGN KEY (`fk_usuario`) REFERENCES `tbl_grupo` (`id`),
  ADD CONSTRAINT `grupo_usuario_fk` FOREIGN KEY (`fk_usuario`) REFERENCES `tbl_users` (`id`);

--
-- Filtros para la tabla `tbl_punto_control`
--
ALTER TABLE `tbl_punto_control`
  ADD CONSTRAINT `punto_control_gincana_fk` FOREIGN KEY (`fk_gincana`) REFERENCES `tbl_gincana` (`id`),
  ADD CONSTRAINT `punto_control_lugar_fk` FOREIGN KEY (`fk_lugar`) REFERENCES `tbl_lugares` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
