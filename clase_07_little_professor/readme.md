# Actividad Little Professor

Actidad que tiene como fin el aprendizaje de ES6.

# Prerrequisitos

Instalación de NodeJS y de browserify y watchify globalmente.

```
npm install -g browserify
npm install -g watchify
```

Instalación de los paquetes de desarrollo localmente que están ubicados en el archivo package.json

```
npm install
```

Una vez instalada las dependencias, para la ejecución/conversión se deberá ejecutar el comando:

```
npm run watch
```

# Objetivo.

Validar las operaciones dadas en el juego [Little Professor]

* Se debe mostrar una ecuación de forma aleatoria en el LCD...
* Se debe validar que la respuesta dada por el usuario sea válida...
* Se debe validar que la operación que se haga es relacionada al valor que está guardada en ecuación

![Professor](https://dl.dropboxusercontent.com/u/181689/little02.png)

# Tips.

### Para obtener un número aleatorio.

```javascript
let valorMaximo = 10;
let aleatorio = Math.floor(Math.random() * valorMaximo);
```
Dando valores de ```0 - 9```

### Número aleatorio en un rango específico.

```javascript
let aleatorio = Math.floor(Math.random()*(max-min+1)+min);
```

Siendo ```max``` el número máximo del rango y ```min``` el mínimo: ejemplo:

```javascript
let aleatorio = Math.floor(Math.random()*(20-10+1)+10);
```
Arrojando valores de ```10 - 20``` el valor es incluyente por la suma que se le hace.

### Autor
Jorge Rubaino

[@ostjh]
License
----
MIT
[@ostjh]:https://twitter.com/ostjh
[Little Professor]:https://en.wikipedia.org/wiki/Little_Professor
