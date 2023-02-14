# Recetario de cocina

![BrightCoders Logo](img/logo.png)

# Tabla de contenidos

- [Descripcion del proyecto](#Descripción-del-proyecto)
- [Cómo instalar y usar el proyecto](#Como-instalar-y-usar-el-proyecto)
- [Créditos](#Créditos)
- [Insignias de evaluadores de codigo](#Insignias-de-evaluadores-de-código)

# Descripción del proyecto

La empresa ABC Corp requiere una App para que sus clientes puedan registrar las reservaciones de sus vuelos.

La aplicación deberá:

Permitir a los nuevos usuarios registrarse:

El usuario podrá registrarse utilizando nombre, correo y clave ó una cuenta de Google
Los datos de registro deben guardarse en firebase
El formulario de registro debe contar con validaciones
El diseño del formulario debe apegarse al proporcionado
Permitir a los usuarios registrados iniciar sesión:

El usuario podrá iniciar sesión utilizando correo y clave o su cuenta de Google, dependiendo de la forma en la que realizó su registro.
El inicio de sesión debe realizarse accediendo o verificando los datos almacenados en firebase.
El formulario de inicio de sesión debe contar con validaciones
El diseño del formulario debe apegarse al proporcionado
Permitir a los usuarios ver las reservaciones de sus vuelos:

El usuario podrá ver un listado con la información de sus reservaciones de vuelos
La información debe recuperarse desde firebase
El diseño del listado debe apegarse al proporcionado
Permitir agregar nuevas reservaciones

El usuario deberá indiciar el origen, destino, fecha y número de pasajeros
La información debe guardarse en firebase
El diseño para la nueva reservación debe apegarse al proporcionado
Algunos de los requerimientos sun un tanto genéricos, es decir no brindan el suficiente detalle, el tratamiento que se debe dar al proyecto es el de un MVP, es decir no es necesario que el funcionamiento o el cumplimiento a los requerimientos sea el más complejo, que cumpla con lo mínimo necesario para que cumpla su función

# Como instalar y usar el proyecto

- Lo primero que se tiene que hacer es clonar el repositorio

```
git clone [linkDelRepositorio]
```

- Lo siguiente será instalar dependencias y modulos que requiere el proyecto para ejecutarse correctamente, para ello es necesario ejecutar en una terminal dentro del repositorio antes clonado el siguiente comando:

```
npm install
```

- Para ejecutar el funcionamiento principal del programa y empezar el juego se ejecuta el siguiente comando en la terminal:

```
npm run android or npm run ios
```

- Para ejecutar las pruebas que se aplicaron al código utilizaremos el siguiente comando en la terminal:

```
npm run test
```

# Créditos

Integrantes del equipo del proyecto:

- [@QuackDuster](https://github.com/Quackduster)
- [@victordoom](https://github.com/victordoom)
- [@Zuack55](https://github.com/Zuack55)
- [@Leonardo-Aguirre-Ponce](https://github.com/Leonardo-Aguirre-Ponce)

# Insignias de evaluadores de código

| Analizador | Calificación                                                                                                                                                                                                                                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Codacy     | [![Codacy Badge](https://app.codacy.com/project/badge/Grade/d48a10de9928414fa5c3f0b67d2b3407)](https://www.codacy.com/gh/BrightCoders-Institute/BCDIC22-RN-reservacion-vuelos-team4/dashboard?utm_source=github.com&utm_medium=referral&utm_content=BrightCoders-Institute/BCDIC22-RN-reservacion-vuelos-team4&utm_campaign=Badge_Grade) |
| Codecov    | [![codecov](https://codecov.io/gh/BrightCoders-Institute/BCDIC22-RN-reservacion-vuelos-team4/branch/master/graph/badge.svg?token=4qPLfJ6M7P)](https://codecov.io/gh/BrightCoders-Institute/BCDIC22-RN-reservacion-vuelos-team4) |
