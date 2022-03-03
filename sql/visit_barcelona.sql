-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-03-2022 a las 16:46:46
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

--
-- Volcado de datos para la tabla `tbl_etiquetas`
--

INSERT INTO `tbl_etiquetas` (`id`, `nombre`, `fk_lugar`) VALUES
(1, 'feo', 5),
(2, 'estruendoso', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_etiqueta_usuario`
--

CREATE TABLE `tbl_etiqueta_usuario` (
  `id` int(11) NOT NULL,
  `fk_usuario` int(11) NOT NULL,
  `fk_etiqueta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_etiqueta_usuario`
--

INSERT INTO `tbl_etiqueta_usuario` (`id`, `fk_usuario`, `fk_etiqueta`) VALUES
(1, 2, 2),
(2, 3, 1);

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
  `foto` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_lugares`
--

INSERT INTO `tbl_lugares` (`id`, `nombre`, `longitud`, `latitud`, `foto`) VALUES
(1, 'hotel W', '41.37359770', '2.18727150', NULL),
(2, 'Restaurante Barceloneta', '41.37618790', '2.18315070', NULL),
(3, 'Museo historia', '41.37850650', '2.18594020', NULL),
(4, 'Bar leo', '41.38056230', '2.18807750', NULL),
(5, 'Sant Miquel', '41.37581250', '2.19030910', NULL);

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
-- Volcado de datos para la tabla `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `nombre`, `email`, `pwd`, `tipo_usu`) VALUES
(1, 'raul', 'raul@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'administrador'),
(2, 'user1', 'user1@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'usuario'),
(3, 'user2', 'user2@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuario_lugar_favoritos`
--

CREATE TABLE `tbl_usuario_lugar_favoritos` (
  `id` int(11) NOT NULL,
  `fk_usuario` int(11) NOT NULL,
  `fk_lugar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_usuario_lugar_favoritos`
--

INSERT INTO `tbl_usuario_lugar_favoritos` (`id`, `fk_usuario`, `fk_lugar`) VALUES
(1, 2, 4),
(2, 2, 3);

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
-- Indices de la tabla `tbl_usuario_lugar_favoritos`
--
ALTER TABLE `tbl_usuario_lugar_favoritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_favorito_fk` (`fk_usuario`),
  ADD KEY `lugar_favorito_fk` (`fk_lugar`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_etiquetas`
--
ALTER TABLE `tbl_etiquetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tbl_etiqueta_usuario`
--
ALTER TABLE `tbl_etiqueta_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tbl_punto_control`
--
ALTER TABLE `tbl_punto_control`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tbl_usuario_lugar_favoritos`
--
ALTER TABLE `tbl_usuario_lugar_favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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

--
-- Filtros para la tabla `tbl_usuario_lugar_favoritos`
--
ALTER TABLE `tbl_usuario_lugar_favoritos`
  ADD CONSTRAINT `lugar_favorito_fk` FOREIGN KEY (`fk_lugar`) REFERENCES `tbl_lugares` (`id`),
  ADD CONSTRAINT `usuario_favorito_fk` FOREIGN KEY (`fk_usuario`) REFERENCES `tbl_users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
