# AngularTaller

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Programación de Servicios y Procesos: Login y Guards con Angular || TALLER


## En este repositorio

En este repositorio tenemos más ejemplos de Angular:

* Arquitectura [Angular](https://angular.io/docs) (componentes, servicios, rutas, etc...)
* Login con [reqres.in](https://reqres.in)
* [ng-bootstrap](https://ng-bootstrap.github.io/#/home)
* [Angular router](https://angular.io/guide/router)
* [Angular Http](https://angular.io/guide/http)

## ¿Buscas prácticar?

La **única** forma de aprobar el examen de la asignatura es practicar, prácticar y... practicar. Una
buena forma de hacerlo es tratar de desarrollar el ejercicio que te propongo a continuación y, después
comprobar los resultados con el código que aquí encuentras. 

### Enunciado

Nos han encargado crear una aplicación para una empresa de gestión de bodas que nos permita enseñar a nuestros clientes
los diferentes fotógrafos con que trabajamos para que puedan contratarlos. La aplicación permitirá a cualquier persona 
ver fotos de ejemplo que han sido tomadas por nuestros fotográfos y a los usuarios de nuestra empresa (con usuario y contraseña)
ver los detalles de los fotográfos.

La aplicación constará de tres ventanas principales

#### `https://{host}/imagenes`

Mostrará en un [carousel de ng-bootstrap](https://ng-bootstrap.github.io/#/components/carousel/examples) unas cuantas imágenes 
que han sido, supuestamente, tomadas por nuestos fotográfos. Utilizaremos, igual que en la documentación que hemos referenciado, 
imágenes de [picsum photos](https://picsum.photos).

Recuerda, esta venta puede ser consultada sin necesidad de haber iniciado sesión en nuestra aplicación.

#### `https://{{host}}/home`

El home mostrará una lista de fotógrafos. Esta operativa se basará en la API de [reqres.in](https://reqres.in/api/users?page=2) y 
estará reservada a usuarios que hayan iniciado sesión. Aunque la API que nos han proporcionado no lo requiere, por ser un 
entorno no-productivo, **es requisito** que se envíe el token del usuario en header con nombre `Authorization`.

El modelo de respuesta es:

```json
{
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}
```

#### `https://{{host}}/login`

Permitirá iniciar sesión para, posteriormente, guardar el token en 
el *[Local Storage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)* del navegador. Este token, **será
incluido en todas las peticiones HTTP** si está presente.

Para obtener el token, haremos, nuevamente uso de la API de [reqres](https://reqres.in/api/login). Sus datos son:

| Entrada        | Salida           | Método  |
| :------------- |:-------------:| -----:|
| ```{ "email": "eve.holt@reqres.in","password": "cityslicka"}```| ```{"token": "QpwL5tke4Pnpja7X4" }``` | POST |
