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


$age = array("Peter"=>["35","30"], "Ben"=>"37", "Joe"=>"43");

foreach($age as $x => $val) {
foreach($val as $valor) {
  echo "$x = $valor<br>";
  }
  if(is_array($val)) {
  }
  else {
  echo "$x = $val<br>";
  }
}