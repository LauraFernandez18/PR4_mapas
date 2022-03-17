-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-03-2022 a las 23:27:46
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

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_lugares`
--
ALTER TABLE `tbl_lugares`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_lugares`
--
ALTER TABLE `tbl_lugares`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
