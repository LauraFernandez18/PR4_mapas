# LA BARCELONETA

El proyecto consiste en una página web que muestre los lugares interesantes para poder visitar en la Barceloneta. También tenemos la opción de acceder a una Gimcana con una serie de pruebas en las cuales a base de pistas tendrás que descubrir a que zona del mapa hay que ir. 
Este proyecto también cuenta con una zona de adminsitrador donde podemos administrar los lugares del mapa, los usuarios registrados y las pistas de la Gimcana.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

Listado de software y como instalarlo:
Xampp:
>1. Entras en https://www.apachefriends.org/es/download.html
>2. Seleccionas tu Sistema Operativo (Windows, Linux, OS X).
>3. Le das a Siguente (Siguiendo los pasos que te indica el instalador).

Si quieres modificar el codigo fuente debes instalarte un editor de texto:
Visual Studio Code:
>1. Entras en https://code.visualstudio.com/download
>2. Seleccionas tu Sistema Operativo (Windows, Linux, OS X).
>3. Le das a Siguente (Siguiendo los pasos que te indica el instalador).

Si quieres una aplicacion para controlar las versiones te puedes instalar git + github(_github via web_):
>1. Entras en https://git-scm.com/downloads
>2. Seleccionas tu Sistema Operativo (Windows, Linux, OS X).
>3. Le das a Siguente (Siguiendo los pasos que te indica el instalador).

Si quieres continuar desarrollando la página web tendrás que instalar Laravel:
>1. Entras en https://laravel.com/docs/9.x
>2. Sigues la documentación para la instalación


### Instalación 🔧

Comentaremos paso a paso la instalación y como proceder para poder hacer funcional el proyecto en nuestro dispositivo:

SI TIENES GIT + GITHUB: 
>1. Abres Visual Studio Code
>2. Seleccionas Archivo (_localizado arriba a la izquierda_) > Abrir Carpeta > Localizas donde tienes la carpeta htdocs, en mi caso en "C:>xampp>htdocs" y la abres.
>3. Seleccionas la opcion de Terminal (_localizado arriba a la izquierda_).
>4. En mi repositorio de GitHub, te diriges a Code (en verde) y copias la url.
>5. En la terminal escribes "git clone _urlcopiada_".
>6. Ya tienes el proyecto funcional junto con un controlador de versiones.

SI NO TIENES GIT + GITHUB: 
>1. En mi repositorio de GitHub, te diriges a Code (en verde) y seleccionas la opcion de "Download ZIP".
>2. Entramos en Explorador de Archivos y nos situamos *C*: (o donde esté situada la carpeta xampp).
>2. Entramos a la carpeta *xampp*.
>3. Entramos a la carpeta *htdocs*.
>4. Descomprimes el ZIP y se te creará la carpeta del proyecto.

*COSAS IMPORTANTES A TENER EN CUENTA:*
    · Para poder acceder a la pagina y que sea totalmente funcional os muestro los usuarios:
        · Usuario ADMINISTRADOR: laura@gmail.com Password: qweQWE123.
        · Usuario cliente: dani@dani.com Password: qweQWE123.
    · A partir de el fichero .env.example tenemos que crear un nuevo archivo llamado .env, en ese archivo pegaremos todo mismo contenido que hay en .env.example
      Después cambiamos la parte de la base de datos para poder conectarla:
        DB_CONNECTION=[tipo de base de datos]
        DB_HOST=[host]
        DB_PORT=[puerto]
        DB_DATABASE=[nombre base de datos]
        DB_USERNAME=[nombre usuario]
        DB_PASSWORD=[nombre contraseña]
        
    · Para que se nos muestre la página correctamente tendremos que ejecutar los siguientes comandos en la terminal:
        · composer install
        · php artisan key:generate
        · php artisan storage:link
        
    · Las imágenes para la página web puedes encontrarlas en public/img, debes añadirlas en public/storage/uploads para que puedan mostrarse.
        
## Construido con 🛠️

    XAMPP - Compilador 
    Visual Studio Code - Editor de texto
    GIT + GITHUB - Controlador de versiones
    Laravel - Para desarrollar la página web

## Autores
* **Laura Fernández** [laurafernandez18](https://github.com/LauraFernandez18)
* **Raul García** [raulgarcia69](https://github.com/RaulGarcia69)
* **Dani Ruano** [danirc09](https://github.com/danirc09)

## Expresiones de Gratitud 🎁

    Comenta a tu familia sobre este proyecto o a través de las redes sociales 📢
    Da las gracias públicamente 🤓, o no, me da exactamente igual.
