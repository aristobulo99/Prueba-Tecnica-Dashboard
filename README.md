# Prueba Técnica Desarrollador Front DashBoard

![Badge en Desarollo](https://img.shields.io/badge/Status-%20Culminado-green)

DashBoard informativo sobre los casos de muertes de covid-19 reportados en Estados  Unidos. Sitio web compuesto por una página de autentificación, página de subida de archivo CSV y el dashboard principal el cual informal el estado con mayor y menor acumulado, el estado más afectado y grafica comparativa entre porcentaje de muertes vs la población total.

## :hammer:Funcionalidades del proyecto
- `Funcionalidad 1`: Página de autentificación con formulario reactivo para garantizar el ingreso de los datos al momento de realizar la petición con la finalidad de validar el usuario que en este caso por defecto es ADMIN con contraseña ADMIN, si el usuario y contraseña es válido se redirige a la página fileUpload si no se muestra un alerta notificando que Usuario o contraseña no validos.

- `Funcionalidad 2`: La página fileUpload cuenta con el componente  drag-and-drop el cual valida el ingreso del archivo CSV además de tener la propiedad de ingresar el archivo por un botón o arrastrándolo al área indicada, posteriormente procesa el archivo y lo sube al API generada con Json-Server. El procesamiento del archivo consta de la siguiente forma: 
Al activar el evento uploadCsvFile() el cual se activa cuando el archivo se sube a través del input File o onDrop() es el método que se activa cuando se arrastra el archivo al área marcada al seleccionar cualquiera de estos eventos se validad que el archivo se de tipo CSV y posteriormente se llama al método readCsvFile(). readCsvFile(): lee el archivo CSV y realiza el llamado del método getJson(XLSX.WorkBook)
getJson(): recibe un workbook que representa un libro de Excel en memoria con la finalidad de generar el Json del Exel, posteriormente se realiza el procesamiento de la información con el método processingInformation(data).
processingInformation(data): recibe el json del Excel, la finalidad es generar un nuevo objeto con la siguiente estructura
	“State”:{
		“Pupulation”: number,
		“newData”:{
			“fecha”: number (acumulado a la fecha)
}
}
Para esto se recorre la lista de datos de Json, se consulta el nuevo objetó si el estado existe sino genera el nuevo objeto con la población de la ciudad y  el newData llama el processingDates() que recibe la fila dl objeto que generar el objeto con la lista de fechas con el acumulado inicial. Si el estado existe incrementa la población de acuerdo a la ciudad y en ves de generar un newData se llama el método cumulativeOfDates() que recibe el newData del estado y el objeto de datos con la finalidad de que incrementa el acumulado de acuerdo a la fecha. 
Al finalizar el procesamiento de la información esta es retornada a el método getJson() el cual realiza el llamado el servicio que realiza la petición post a la API y redirigiendonos a la pagina dashboard.

- `Funcionalidad 3`: En la página  dashboard encontramos los componentes que contiene el card de mayor y menor acumulado de muertes, el card con el estado con mayor porcentaje de muertes y el card con una gráfica circular que compara el porcentaje de muertes vs la población total por estado. Para cada uno de estos card se realiza el llamado al servicio de la petición Get que comunica a la API. En cada componente se realiza el filtro de lo datos de acuerdo a la necesidad

## :wrench:ejecuta el proyecto
Al realizar la clonación del proyecto y para su ejecución es recomendable ver el archivo json donde se almacena la data este está en la ruta src\assets\data\db.json. Si desea poner a prueba la carga y procesado del archivo elimine los datos del objeto dataCSV quedado de la siguiente forma:

{
"user": [
          {
            "userName": "ADMIN",
            "passsword": "ADMIN"
          }
  ],
  "dataCSV": [ ]
}

En la ruta principal de nuestro proyecto abrimos un terminal y ejecutamos los siguientes comandos:
json-server --watch src\assets\data\db.json: Este comando ejecuta nuestra data con en el Puerto 3000 para la cual dispondremos de las ruta: 

http://localhost:3000/user

http://localhost:3000/dataCSV

Luego ejecutamos en otra terminal y en la ruta principal de nuestro proyecto el comando:
ng serve: este comando ejecuta nuestro proyecto de forma local en el puerto 4200.

http://localhost:4200/login

Con estos paso podrás ejecutar el proyecto puedes ponerlo a prueba iniciando sesión con el usuario ADMIN y contraseña ADMIN y subiendo el archivo time_series_covid19_deaths_US.csv

## :heavy_check_mark: Tecnologías utilizadas
* Anguar 16
* TypeScript 5
* HTML
* SCSS
* Chart Js

## Personas Contribuyentes
*Miguel Lombardi Desarrollador Front-End
*Smartsoft Labs

## Personas Desarrolladoras del Proyecto
| [<img src="https://avatars.githubusercontent.com/u/64171570?v=4" width=115><br><sub>Aristobulo Briceño De La Espriella</sub>](https://github.com/aristobulo99) |
| :---: |
