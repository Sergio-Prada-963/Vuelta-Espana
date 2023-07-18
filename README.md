# Nombre del Proyecto

Un crack cd :)



## Estructura de carpetas

Explicación de las carpetas principales de tu proyecto:

- `backend`: Contiene los archivos relacionados con la lógica del backend de tu aplicación.
- `config`: Archivos de configuración, como variables de entorno.
- `controllers`: Controladores que manejan las solicitudes y respuestas del servidor.
- `models`: Modelos que definen la estructura de tus datos y las interacciones con la base de datos.
- `node_modules`: Carpeta generada por npm para almacenar las dependencias del proyecto.
- `routes`: Archivos que definen las rutas y los puntos finales de la API.
- `.env`: Archivo de configuración para variables de entorno sensibles (no se debe compartir públicamente).
- `index.js`: Punto de entrada de la aplicación.
- `package-lock.json`: Archivo de bloqueo de versiones generado por npm.
- `package.json`: Archivo de configuración de npm que contiene información sobre el proyecto y las dependencias.

## Instalación

1. Clona este repositorio:

   ```bash´´
   git clone https://github.com/edwnig17/Node-Mongo.git

## Debes de entrar a la carpeta

cd tu_carpeta //-----------para poder entrar y usarla --------------//

## Instalación de dependencias del proyecto

npm install -D express nodemon dontev ----------------

## Configuración

Antes de comenzar, asegúrate de configurar correctamente las variables de entorno en un archivo `.env` en la raíz del proyecto. Sigue estos pasos:

1. Crea un archivo `.env` en la raíz del proyecto.
2. Abre el archivo `.env` y configura las variables de entorno necesarias. Aquí tienes un ejemplo:
DB_HOST=tu_database_host
DB_PORT=tu_database_port
API_KEY=tu_api_key

Asegúrate de proporcionar los valores correctos para las variables de entorno según tu entorno de desarrollo.

`Nota: El archivo .env es sensible y contiene información confidencial, como contraseñas o claves API. No lo compartas públicamente ni lo incluyas en tu control de versiones.`

`Guarda el archivo .env una vez hayas configurado las variables de entorno.
Con esta configuración en el archivo .env, tu proyecto estará listo para funcionar correctamente utilizando las variables de entorno adecuadas.`

`Asegúrate de seguir los pasos correctamente y proporcionar los valores correctos para las variables de entorno según tus necesidades.`


`Este código formateado mostrará la sección de Configuración de manera más bonita y destacada en tu archivo README.md. Asegúrate de reemplazar los valores de ejemplo (`tu_database_host`, `tu_database_port`, `tu_api_key`) con los valores correctos para tu entorno de desarrollo.`

## Inicialización 

`npm run dev`

## Uso

Para utilizar la aplicación, sigue estos pasos:

1. Accede a la aplicación en tu navegador en `http://localhost:5000` (o el puerto especificado).

## Contribuciones

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Crea un fork de este repositorio.
2. Crea una nueva rama para tu contribución.
3. Realiza los cambios y los commits en tu rama.
4. Envía un pull request a este repositorio.

## Contacto

Si tienes alguna pregunta o consulta, no dudes en ponerte en contacto conmigo a través de [edwingstiven20@gmail.com].




db.createCollection("equipos")

db.equipos.insertMany([
  {
    numeroEquipo: 1,
    nombre: "madrid",
    pais: "España",
    director: "Edwing",
    descripcion: "El mejor equipo",
    ubicacion: "Colimbia",
    patrocinador: "Isa",
    estadio: "Alfonso"
  },
  {
    numeroEquipo: 2,
    nombre: "Psg",
    pais: "Francia",
    director: "Sergio",
    descripcion: "Los mejores",
    ubicacion: "lejos ",
    patrocinador: "Juan",
    estadio: "Alegria"
  },
  {
    numeroEquipo: 3,
    nombre: "Juventus",
    pais: "Italia",
    director: "Vermen",
    descripcion: "Ser lo mejores",
    ubicacion: "cerca ",
    patrocinador: "Alej",
    estadio: "yope",
  },
  {
    numeroEquipo: 4,
    nombre: "",
    pais: "Alemania",
    director: "Fiorentino",
    descripcion: "Los mejores",
    fundacion: "ellap",
    patrocinador: "Raúl",
    estadio: "Col"
  }
])

db.createCollection("ciclistas")

db.ciclistas.insertMany([
  {
    numeroCiclista: 1,
    nombreCiclista: "Juan",
    equipo: "Juven",
    nacionalidad: "Col",
    edad: 25,
  },
  {
    numeroCiclista: 2,
    nombreCiclista: "Isa",
    equipo: "Junior",
    nacionalidad: "Ven",
    edad: 28,
  },
  {
    numeroCiclista: 3,
    nombreCiclista: "Camilo",
    equipo: "Campus",
    nacionalidad: "Ven",
    edad: 30,
  },
  {
    numeroCiclista: 4,
    nombreCiclista: "Sergio",
    equipo: "alegria",
    nacionalidad: "Col",
    edad: 27,

  },
  {
    numeroCiclista: 5,
    nombreCiclista: "Edwing",
    equipo: "Alegre",
    nacionalidad: "Col",
    edad: 32,
  
  }
])

db.createCollection("premios")

db.premios.insertMany([
  {
    nombre: "1 millon",
    descripcion: "Para los gastos",
    ganador: "Edwing",

  },
  {
    nombre: "800 mil",
    descripcion: "En bonos",
    ganador: "Sergio",
  
  },
  {
    nombre: "Un celular",
    descripcion: "Para uso personal",
    ganador: "Isa",
    
  },
  {
    nombre: "200 mil",
    descripcion: "Premio en dinero",
    ganador: "Raul",
   
  },
  {
    nombre: "100 mil ",
    descripcion: "Bonos para comer",
    ganador: "camila",
  
  }
])

db.createCollection("etapas")



db.etapas.insertMany([
  {
    numeroEtapa: 1,
    fecha: new Date("2023-07-01"),
    salida: "Madrid",
    llegada: "Sevilla",
    distancia: "100 kilómetros",
    ganador: "Chris Froome",
    descripcion: "Etapa llana con algunos repechos",
    premioMontana: "Monte Abantos"
  },
  {
    numeroEtapa: 2,
    fecha: new Date("2023-07-02"),
    salida: "Sevilla",
    llegada: "Granada",
    distancia: "180 kilómetros",
    ganador: "Alejandro Valverde",
    descripcion: "Etapa de montaña con final en alto",
    premioMontana: "Sierra Nevada"
  },
  {
    numeroEtapa: 3,
    fecha: new Date("2023-07-03"),
    salida: "Granada",
    llegada: "Málaga",
    distancia: "150 kilómetros",
    ganador: "Peter Sagan",
    descripcion: "Etapa mixta con tramos de montaña y llanos",
    premioMontana: "Alto de El Torcal"
  },
  {
    numeroEtapa: 4,
    fecha: new Date("2023-07-04"),
    salida: "Málaga",
    llegada: "Córdoba",
    distancia: "200 kilómetros",
    ganador: "Egan Bernal",
    descripcion: "Etapa de montaña con final en ascenso exigente",
    premioMontana: "Alto de La Covatilla"
  },
  {
    numeroEtapa: 5,
    fecha: new Date("2023-07-05"),
    salida: "Córdoba",
    llegada: "Sevilla",
    distancia: "120 kilómetros",
    ganador: "Mark Cavendish",
    descripcion: "Etapa llana y rápida para los sprinters",
    premioMontana: "No hay premios de montaña en esta etapa"
  }
])

