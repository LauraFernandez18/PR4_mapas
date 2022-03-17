-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-03-2022 a las 00:06:37
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_pr04`
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
(1, 'Hoteles', 1),
(2, 'Restaurantes', 2),
(3, 'Museos', 3),
(4, 'Bares', 4),
(5, 'Playas', 5),
(6, 'Deportes', 7),
(7, 'Playa', 8),
(8, 'Fútbol', 9),
(9, 'Parque', 10),
(10, 'Playa', 11),
(11, 'Restaurante', 12),
(12, 'Plaza', 13),
(13, 'Discoteca', 14),
(14, 'Discoteca', 15),
(15, 'Casino', 16);

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
(1, 1, 1),
(3, 1, 2),
(4, 1, 3),
(5, 1, 5),
(6, 1, 4),
(7, 1, 6),
(8, 1, 7),
(9, 1, 8),
(10, 1, 9),
(11, 1, 10),
(12, 1, 11),
(13, 1, 12),
(14, 1, 13),
(15, 1, 14),
(16, 1, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_gincana`
--

CREATE TABLE `tbl_gincana` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_gincana`
--

INSERT INTO `tbl_gincana` (`id`, `nombre`) VALUES
(1, 'Barceloneta_Ginacana');

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
  `descripcion` varchar(500) DEFAULT NULL,
  `longitud` decimal(10,8) NOT NULL,
  `latitud` decimal(10,8) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `foto_icon` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_lugares`
--

INSERT INTO `tbl_lugares` (`id`, `nombre`, `descripcion`, `longitud`, `latitud`, `foto`, `foto_icon`) VALUES
(1, 'Hotel W', 'Este hotel de lujo, situado en el paseo marítimo de la Barceloneta, con vistas al mar, se encuentra a 2 km de la parada de metro de la Barceloneta y a 4 km de la Rambla.', '2.19018558', '41.36863022', 'hotel_w.jpg', 'hotel_icon.png'),
(2, 'Restaurante Barceloneta', 'Recetas marineras en un local con terraza decorado como un antiguo carguero de madera y ubicado en el puerto.', '2.18315070', '41.37618790', 'rest_bcn.webp', 'rest_icon.png'),
(3, 'Museo Historia', 'Museo de ciudad que conserva, estudia, documenta, divulga y expone el patrimonio histórico y la historia de Barcelona desde sus orígenes hasta el presente.', '2.18591591', '41.38076775', 'museo_bcn.jpg', 'museo_icon.png'),
(4, 'Bar Leo', 'Legendario bar de tapas de barrio con ambiente flamenco decorado con recuerdos del difunto cantaor Bambino.', '2.18807750', '41.38056230', 'bar_leo.jpg', 'bar_icon.png'),
(5, 'Sant Miquel', 'La playa de Sant Miquel es una playa de la Barceloneta, situada entre las playas de Sant Sebastià y la Barceloneta', '2.19030910', '41.37581250', 'playa_bcn.jpg', 'playa_icon.png'),
(7, 'Club natación BCN', 'Club de natació a Barcelona', '2.18884515', '41.37326099', 'clubnatabcn.jpg', 'natacion.png'),
(8, 'L\'Estel ferit', 'Escultura moderna de 10 m d\'alçada situada a la platja, formada per 4 cubs apilats d\'acer amb finestres i signada per Rebecca Horn.', '2.19110007', '41.37649932', 'estel-ferit-playa2.jpg', 'abstracto.png'),
(9, 'Club de Futbol La Catalana', 'Parc amb camps de futbol i pistes de bàsquet, senderes flanquejades per arbres, un bar i vistes sobre el mar.', '2.19161735', '41.38308588', 'lacatalana.jpg', 'futbol.png'),
(10, 'Parc de la Barceloneta', 'Parc amb camps de futbol i pistes de bàsquet, senderes flanquejades per arbres, un bar i vistes sobre el mar.', '2.19251085', '41.38262453', '2016,01,AZ8Q4824.jpg', 'parque.png'),
(11, 'Platja del Somorrostro', 'Platja urbana amb restaurants, cocteleries, discoteques i un parc amb zona de jocs.', '2.19570766', '41.38370128', '211330609111714.jpg', 'playa_icon.png'),
(12, 'La Tagliatella', 'Iluminación cálida y adornos hogareños antiguos en cadena de restaurantes de gastronomía tradicional italiana.', '2.18533170', '41.38134632', '208_barceloneta-buscador.jpg', 'rest_icon.png'),
(13, 'Plaça del Poeta Boscà', 'Plaça del Poeta Boscà', '2.18957504', '41.37954365', 'fcgbhw.jpg', 'plaza-bolivar.png'),
(14, 'Pacha Barcelona', 'Discoteca de moda on se serveix cuina mediterrània i asiàtica amb una terrassa davant de la platja.', '2.19709228', '41.38573273', 'Webp.net-resizeimage-785x523.jpg', 'bola-de-discoteca.png'),
(15, 'Shoko', 'Sushi, arrossos i còctels en un restaurant asiàtic i bar de copes amb sofàs vermells i vistes a la platja.', '2.19697090', '41.38550221', '400x300.webp', 'bola-de-discoteca.png'),
(16, 'Casino Barcelona', 'Casino tranquil i modern amb ruleta americana, taules de pòquer, màquines escurabutxaques, restaurants i concerts en directe.', '2.19711922', '41.38666462', 'casino-barcelona.jpg', 'chip.png');

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

--
-- Volcado de datos para la tabla `tbl_punto_control`
--

INSERT INTO `tbl_punto_control` (`id`, `pista`, `fk_gincana`, `fk_lugar`, `orden`) VALUES
(3, 'Tutto bono a casa de mia mama', 1, 12, 1),
(4, 'La curiosidad enmarcada en años de historia.', 1, 3, 2),
(5, 'Plaza en honor a un poeta del renacimiento', 1, 13, 3),
(6, 'Puedes ver toda La Barceloneta por el modico precio de un ford fiesta', 1, 1, 4),
(7, 'Se preparan los atletas del mar', 1, 7, 5),
(8, 'Necesita que la curen, se encuentra en el cielo(en sentido figurado)', 1, 8, 6),
(9, 'Dicen que está la mejor comida de Barcelona.\r\nDicen que está la mejor fiesta de Barcelona.\r\nUna frase es mentira la otra verdadera.', 1, 14, 7),
(10, 'Donde la lujuria y el desenfreno se juntan en derroche.', 1, 16, 8),
(11, 'Puedes practicar el deporte rey al aire libre.', 1, 9, 9);

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
(2, 'test2', 'test2@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'usuario'),
(9, 'dani', 'dani@gmail.com', '5bacd9f25613659b2fbd2f3a58822e5c', 'administrador'),
(10, 'dani', 'dani@dani.com', '1fa3356b1eb65f144a367ff8560cb406', 'usuario'),
(17, 'laura', 'laura@gmail.com', '1fa3356b1eb65f144a367ff8560cb406', 'administrador');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `tbl_etiqueta_usuario`
--
ALTER TABLE `tbl_etiqueta_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `tbl_gincana`
--
ALTER TABLE `tbl_gincana`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `tbl_punto_control`
--
ALTER TABLE `tbl_punto_control`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

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
