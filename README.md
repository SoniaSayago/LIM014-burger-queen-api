# 🍔 📳 Burger Queen - API con Node.js

## Índice

* [1. Preámbulo](#1-pre%C3%A1mbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptaci%C3%B3n-m%C3%ADnimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)
* [7 HTTP API Checklist](#7-http-api-checklist)

## 1. Preámbulo

![Node.js logo](file:///C:/Users/N20/Downloads/Burger%20Business%20Facebook%20Cover.svg)

Un pequeño restaurante de hamburguesas, que está creciendo, necesita un
sistema a través del cual puedan tomar pedidos usando una _tablet_, y enviarlos
a la cocina para que se preparen ordenada y eficientemente.

Este proyecto tiene dos áreas: interfaz web (cliente) y API (servidor). Nuestra
clienta nos ha solicitado desarrollar la API que se debe integra con la
interfaz, que otro equipo de desarrolladoras está trabajando simultáneamente.

## 2. Resumen del proyecto

Con una API en este caso nos referimos a un _servidor web_, que es
básicamente un programa que _escucha_ en un puerto de red, a través del cual
podemos enviarle _consultas_ (_request_) y obtener _respuestas_ (_response_)
usando el protocolo HTTP (o HTTPS).

Un servidor web debe _manejar_ consultas entrantes y producir respuestas a esas
consultas que serán enviadas de vuelta al _cliente_. Cuando hablamos de
_aplicaciones de servidor_, esto implica una arquitectura de _cliente/servidor_,
donde el cliente es un programa que hace consultas a través de una red (por
ejemplo el navegador, cURL, ...), y el _servidor_ es el programa que recibe
estas consultas y las responde.

[Node.js](https://nodejs.org/) nos permite crear servidores web súper eficientes
de manera relativamente simple y todo esto usando JavaScript!

En este proyecto partimos de un _boilerplate_ que ya contiene una serie de
_endpoints_ (puntos de conexión o URLs) y nos piden completar la aplicación.
Esto implica que tendremos que partir por leer la implementación existente, y
familiarizarnos con el _stack_ elegido ([Node.js](https://nodejs.org/) y
[Express](https://expressjs.com/)) y complementarlo con un motor de bases de
datos, el cual tu deberás elegir entre [MongoDB](https://www.mongodb.com/),


La clienta nos ha dado un [link a la documentación](https://laboratoria.github.io/burger-queen-api/)
que especifica el comportamiento esperado de la API que expondremos por
HTTP.  Ahí puedes encontrar todos los detalles de qué _endpoints_ debe
implementar  la aplicación, qué parámetros esperan, qué deben responder, etc.

## 3. Objetivos de aprendizaje

El objetivo principal de aprendizaje es adquirir experiencia con **Node.js**
como herramienta para desarrollar _aplicaciones de servidor_, junto con una
serie de herramientas comunes usadas en este tipo de contexto (Express como
framework, MongoDB como base datos, contenedores de docker,
etc).

En este proyecto tendrás que construir un servidor web que debe _servir_ `JSON`
sobre `HTTP`, y desplegarlo en un servidor en la nube.

Para completar el proyecto tendrás que familiarizarte con conceptos como
**rutas** (_routes_), **URLs**, **HTTP** y **REST** (verbs, request, response,
headers, body, status codes...), **JSON**, **JWT** (_JSON Web Tokens_),
**conexión con una base datos** (`MongoDB`),
**variables de entorno**, **deployment**, **contenedores de `docker`**...

### Node

* [ ] Instalar y usar módulos. ([npm](https://www.npmjs.com/))
* [ ] [Configuración de package.json.](https://docs.npmjs.com/files/package.json)
* [ ] [Configuración de npm-scripts](https://docs.npmjs.com/misc/scripts)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] Tests de integración.

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### Express

* [ ] Rutas.
* [ ] `middlewares`

### HTTP

* [ ] [Request, Response.](https://developer.mozilla.org/es/docs/Web/HTTP/Messages)
* [ ] Headers.
* [ ] Body.
* [ ] [Verbos HTTP.](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
* [ ] [Codigos de status de HTTP.](https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5)
* [ ] Encodings y `JSON`.
* [ ] [CORS.](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS)

### Autenticación

* [ ] `JWT`
* [ ] Almacenamiento y acceso de contraseñas.

### WebOps

* [ ] Variables de entorno.
* [ ] Contenedores (Docker).
* [ ] Docker compose.

### Base de datos (MongoDB)

* [ ] Instalación.
* [ ] Conexión a través de cliente.
* [ ] Connection string.
* [ ] Queries y comandos (creación, lectura, actualización, eliminación)

## 4. Consideraciones generales

Este proyecto se realizará en duos y deberá integrarse con el proyecto
[Burger Queen API client](../04-burger-queen-api-client)
que desarrolle simultáneamente el equipo de Frontend developers de tu squad.

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
En este proyecto está permitido usar librerías o frameworks, asi como
extensiones al lenguaje con `babel` (caso en el cual deberás incluir un
comando `npm run build`).

Los tests deben cubrir un mínimo del 90% de _statements_, _functions_,
_lines_ y _branches_. Si bien el boilerplate no incluye la configuración para
pruebas unitarias, estas son obligatorias.

Otro requerimiento del equipo de QA de nuestra clienta es realizar
**pruebas _end-to-end_**, que usaremos para verificar el comportamiento desde el
punto de vista de HTTP, desde afuera del servidor. Estos tests, a diferencia de
las pruebas unitarias, no prueban cada pieza por separado sino que prueban la
aplicación completa, de principio a fin. Estas pruebas, al no hacer uso directo
del código fuente de la aplicación, pueden ejecutarse directamente sobre una URL
remota, ya que la interfaz sometida a pruebas es HTTP.

El _boilerplate_ ya contiene el setup y configuración
necesaria para ejecutar todos los tests _end-to-end_ con el comando `npm run test:e2e`.

```sh
# Corre pruebas e2e sobre instancia local. Esto levanta la aplicación con npm
# start y corre los tests contra la URL de esta instancia (por defecto
# http://127.0.0.1:8080).
npm run test:e2e

# Corre pruebas e2e sobre URL remota
REMOTE_URL=<TODO: poner URL> npm run test:e2e
```

Las pruebas _end-to-end_ ya están completas en el _boilerplate_, así que puedes
usarlas como guía de implementación y checklist de completitud.

## 5. Criterios de aceptación mínimos del proyecto

### 5.1 API

Según lo establecido por la [documentación](https://laboratoria.github.io/burger-queen-api/)
entregada por nuestra clienta, la API debe exponer los siguientes endpoints:

#### 5.1,1 `/`

* `GET /`

#### 5.1.2 `/auth`

* `POST /auth`

#### 5.1.3 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### 5.1.4 `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### 5.1.5 `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

### 5.2 CLI

La clienta nos ha solicitado que la aplicación cuente un comando **`npm start`**
que se debe encargar de ejecutar nuestra aplicación node y que además pueda
recibir información de configuración, como el puerto en el que escuchar, a qué
base datos conectarse, etc. Estos datos de configuración serán distintos entre
diferentes entornos (desarrollo, producción, ...). El _boilerplate_ ya implementa
[el código necesario](config.js) para leer esta información de los
[argumentos de invocación](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
y el
[entorno](https://nodejs.org/docs/latest/api/process.html#process_process_env).

#### 5.2.1 Argumentos de línea de comando

Podemos especificar el puerto en el que debe arrancar la aplicación pasando un
argumento a la hora de invocar nuestro programa:

```sh
# Arranca la aplicación el puerto 8888 usando npm
npm start 8888
```

#### 5.2.2 Variables de entorno

Nuestra aplicación usa las siguientes variables de entorno:

* `PORT`: Si no se ha especificado un puerto como argumento de lína de comando,
  podemos usar la variable de entorno `PORT` para especificar el puerto. Valor
  por defecto `8080`.
* `DB_URL`: El _string_ de conexión de _MongoDB_ . Cuando ejecutemos la
  aplicación en nuestra computadora (en entorno de desarrollo), podemos usar el
  una base de datos local, pero en producción deberemos utilizar las instancias
  configuradas con `docker-compose` (mas sobre esto en la siguiente sección de
  **Deployment**)
* `JWT_SECRET`: Nuestra aplicación implementa autenticación usando JWT (JSON
   Web Tokens). Para poder firmar (cifrar) y verificar (descifrar) los tokens,
  nuestra aplicación necesita un secreto. En local puedes usar el valor por
  defecto (`xxxxxxxx`), pero es muy importante que uses un _secreto_ de verdad
  en producción.
* `ADMIN_EMAIL`: Opcionalmente podemos especificar un email y password para
  el usuario admin (root). Si estos detalles están presentes la aplicación se
  asegurará que exista el usuario y que tenga permisos de administrador. Valor
  por defecto `admin@localhost`.
* `ADMIN_PASSWORD`: Si hemos especificado un `ADMIN_EMAIL`, debemos pasar
  también una contraseña para el usuario admin. Valor por defecto: `changeme`.

### 5.3 Despliegue (Deployment)

Nuestra clienta nos ha manifestado que su equipo de _devops_ está siempre con
muchas tareas, por por lo que nos pide como requerimiento que la aplicación esté
configurada con `docker-compose` para que pueda ser desplegada sin dificultades
en cualquier entorno.

El _boilerplate_ ya cuenta con una configuración incial de `docker-compose` para
la aplicación de node, tu tarea será extender esa configuración para incluir la
configuración de base de datos que hayas elegido. Ten en cuenta que como vas a
tener dos servidores corriendo sobre una misma configuración, deberás exponer
los servicios en diferentes puertos.

Para este proyecto te recomendamos usar `docker-compose` localmente (en tu
computadora) para ejecutar la aplicación junto con la base de datos
seleccionada. Por otro lado, con respecto al despliegue, no es obligatorio usar
`docker-compose`, puedes elegir el proveedor (o proveedores) que prefieras junto
con el mecanismo de despligue y estrategia de alojamiento. Te recomendamos
explorar las siguientes opciones:

* [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) es
  probablemente la opción más _sencilla_ (la que requiere menos configuración) y
  nos permite alojar el servidor web con pocos clicks.
* Si quieres explorar opciones más personalizadas y ver docker del lado del
  servidor puedes cosiderar proveedores como
  [AWS (Amazon Web Services)](https://aws.amazon.com/) o
  [GCP (Google Cloud Platform)](https://cloud.google.com/), ambos algún tipo de
  _free tier_ así como tanto _instancias_ de _servidores virtuales_ (VPS) donde
  configurar nuestro propio Docker o servicios para desplegar aplicaciones en
  contenedores (por ejemplo [Compute Engine](https://cloud.google.com/compute/docs/containers)
  de GCP o [Elastic Container Service](https://aws.amazon.com/ecs/) de AWS).
* Si quieres trabajar con MongoDB, [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  es una muy buena opción para alojar nuestra base datos de producción, la cuál
  podemos usar en conjunción con cualquiera de las opciones mencionadas arriba.

Si tienes dudas sobre las diferentes (y múltiples) opciones de despliegue no
dudes en consultar con tus pares y tus coaches.

## 6. Pistas, tips y lecturas complementarias

* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [docker](https://docs.docker.com/)
* [docker compose](https://docs.docker.com/compose/)
* [Postman](https://www.getpostman.com)
* [Variable de entorno - Wikipedia](https://es.wikipedia.org/wiki/Variable_de_entorno)
* [`process.env` - Node.js docs](https://nodejs.org/api/process.html#process_process_env)

***

## 7 HTTP API Checklist

### 7.1 `/`

* [ ] `GET /`

### 7.2 `/auth`

* [ ] `POST /auth`

### 7.3 `/users`

* [ ] `GET /users`
* [ ] `GET /users/:uid`
* [ ] `POST /users`
* [ ] `PUT /users/:uid`
* [ ] `DELETE /users/:uid`

### 7.4 `/products`

* [ ] `GET /products`
* [ ] `GET /products/:productid`
* [ ] `POST /products`
* [ ] `PUT /products/:productid`
* [ ] `DELETE /products/:productid`

### 7.5 `/orders`

* [ ] `GET /orders`
* [ ] `GET /orders/:orderId`
* [ ] `POST /orders`
* [ ] `PUT /orders/:orderId`
* [ ] `DELETE /orders/:orderId`
