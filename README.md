# PR4_mapas

enseñar etiquetas de user
SELECT tbl_lugares.nombre, tbl_etiquetas.nombre FROM tbl_lugares
INNER JOIN tbl_etiquetas on tbl_lugares.id=tbl_etiquetas.fk_lugar
INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta
INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.id=2;


admin lugares
SELECT tbl_lugares.nombre, tbl_lugares.longitud, tbl_lugares.latitud from tbl_lugares INNER JOIN tbl_etiquetas on tbl_lugares.id=tbl_etiquetas.fk_lugar INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador";


todas las etiquetas de admin
SELECT tbl_etiquetas.nombre from tbl_etiquetas INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador";


SELECT tbl_etiquetas.fk_lugar,tbl_etiquetas.nombre from tbl_etiquetas INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador" AND tbl_etiquetas.fk_lugar=4;



eliminar lugar
SELECT tbl_etiquetas.id, tbl_etiquetas.fk_lugar,tbl_etiquetas.nombre from tbl_etiquetas INNER JOIN tbl_etiqueta_usuario on tbl_etiquetas.id=tbl_etiqueta_usuario.fk_etiqueta INNER JOIN tbl_users on tbl_etiqueta_usuario.fk_usuario=tbl_users.id where tbl_users.tipo_usu="administrador" AND tbl_etiquetas.fk_lugar=2

esto me da las etiquetas del lugar

delete from con inner join


crear pista/punto control
INSERT INTO `tbl_punto_control` (`id`, `pista`, `fk_gincana`, `fk_lugar`, `orden`) VALUES (NULL, 've al siguiente punto. Esa es la pista', '1', '4', '1');


enseñar puntos control
SELECT * FROM `tbl_punto_control` INNER JOIN tbl_gincana on tbl_punto_control.fk_gincana=tbl_gincana.id where tbl_gincana.id=1;