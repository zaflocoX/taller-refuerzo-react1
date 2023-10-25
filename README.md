##Taller de Refuerzo Curso Desarrollo Web Frontend 

**Explicar brevemente el concepto de ReactJS y sus principales características.**
ReactJs es una librería creada por Facebook, la cual permite crear mediante componentes aplicaciones web con mayor facilidad, donde cada uno de estos componentes son partes de código que permiten ser reutilizados en el tiempo.
Principales características
Funciona como single page application
Es fácil de modularizar el código
Mantenimiento de aplicación mucho mas eficiente. 

**Definir qué es un componente en ReactJS y mencionar los tipos de componentes que existen.**
Un componente en React es una parte de código funcional componentes, los cuales son funciones o clases que renderizan código. Estos componentes son totalmente reutilizables y pueden personalizarse mediante el uso de props.

**¿Qué es el Virtual DOM y cuál es su función en ReactJS?**
Es el encargado de cierto modo ejecutar los cambios o previsualizar los cambios realizados en el codigo desarrollado, esto con el fin de brindar una mejor vista a la interfaces de usuario. 

**¿Qué es JSX en ReactJS y porqué es importante?**
JSX es la extensión que utilizan los componentes en react, que deriva de JavaScript para poder emplear tanto codigo JavaScrip como codigo HTML, es utilizada en React ya que en un componente se puede realizar esta clase de combinaciones de código. 

**¿Qué es un Hook en ReactJS y cuál es su propósito?**
Es un tipo de función que permite a los componentes creados en React realizar tareas o procesos, con el fin de actualizar o acceder al estado en que se encuentra un componente la cual permite reutilizar código y entender su legibilidad.

**Mencionar al menos tres tipos de Hooks en ReactJS y explicar brevemente para qué se utilizan**
- Use State: es la manera en que una parte de código se puede almacenar datos y estos a su vez pueden actualizarse en ciertos momentos con el fin de mantener dicho actualizado sin presentar mayores inconvenientes. 
- Use Effect: a diferencia del useState, lo que hace el useEffect es que permite visualizar o volver a renderizar cierta parte de código una vez se hacen cambios o sufre cambios la aplicación en función de x o y evento.
- Use Context: permite que la información entre diferentes componentes sea de uso compartida, esto para que pueda utilizarse dicha en información en sincronía con los demás componentes de la aplicación. 

**¿Cuáles son las reglas de uso para los Hooks en ReactJS?**
- Deben realizarse en componentes funcionales y no de clase
- Desde la parte lógica del código los hooks siempre van antes de que el componente sea renderizado

**Explicar qué es React Router DOM versión 6, para qué se utiliza y cuáles son sus principales componentes y Hooks.**
Router DOM es una biblioteca implementada por ReactJs, que se utiliza para crear rutas de navegación por los diferentes componentes funcionales que sean creados a partir del código desarrollado. Los principales componentes que utiliza Router DOM son, BrowserRouter, Routes, Route. Los principales hooks que utiliza RouterDOM son UseRoutes, UseNavigate, UseParams.


**¿Cómo se definen rutas en React Router DOM?**
Para definir las rutas necesarias para un proyecto en React,  se hace uso de la dependencia de Router DOM la cual nos permite navegar, para hacer uso o implementarse se realizan los siguientes pasos
- Instalar la dependencia de Router DOM
- Hacer uso de los recursos que brinda la biblioteca como lo son BrowserRouter, Routes y route
- Mantener la jerarquía o el orden explicado anteriormente ya que nos permitirá ejecutar el código sin errores
- Dentro del router se hace uso de la propiedad path la cual es a la que se le indica que nombre llevara la URL
- Además se hace uso de la propiedad element la cual es el componente al que se debe redirigir la ruta especificada anteriormente. 

**Describir cómo crear un proyecto ReactJS con Vite**
Mediante el uso de una terminal se deben realizar una serie de pasos o comandos para obtener una carpeta raíz con los archivos necesarios para ejecutar o crear la aplicación web.
- Abrir la terminal de preferencia
- Ubicarse en la carpeta o directorio a crear la carpeta
- Ejecutar el comando de inicialización del proyecto de vite con react el cual es npm créate vite@ latest **nombre de la app** -- --template react
- Acceder a la carpeta creada de la aplicación
- Instalar las dependencias con npm install. 

**Describir cómo desplegar un JSON server en cualquier Hosting free o servicio en la nube gratuito de su elección**
Para desplegar un JSON server mediante un servicio de hosting se deben realizar los siguientes pasos:
- Elegir el hosting de su preferencia
- Crear la carpeta que contiene el proyecto o el archivo JSON
- Crear el archivo JSON Server
- Instalar las dependencias de JSON – Server
- Configurar la data a utilizar
- Configurar archivos que apunten hacia el archivo JSON
- Probar que se levante el servidor con la data del JSON
- Realizar el proceso de despliegue en el hosting seleccionado. 

**Describir cómo desplegar una aplicación en cualquier Hosting de su elección. 
Para realizar un despliegue de la aplicación en un hosting se deben realizar los siguientes pasos:**
- Una vez finalizado el proyecto de su elección, crear el build de la aplicación, esto con el fin de obtener la carpeta a desplegar
- Realizar la configuración de los archivos necesarios (verificación de funcionamiento, instalación de dependencias si se requiere)
- Seleccionar un hosting gratuito
- Creación del repositorio en la nube
- Subir repositorio a la nube
- Realizar la configuración del hosting seleccionado para desplegar aplicación
- Realizar despliegue de la aplicación. 