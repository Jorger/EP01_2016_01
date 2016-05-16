# Retos WebGL/CardBoard.

A continuación se listan dos retos relacionados al uso de WebGL/ThreeJS/CarBoard

## Ubicación objetos 3D

![Cubos](https://dl.dropboxusercontent.com/u/181689/planetasCardBoard.gif)

Se entrega base del código, en el cual el usuario deberá ubicar los planetas/lunas en una espacio en 3D, la creación de un planeta/luna se hace uso de la función ```crearPlaneta()``` del ejercicio 
[clase 12 - Planetas].

Acciones a realizar:

* Completar el array de planetas/luna.
* Creación de objetos y ubicación de los mismos.
* Girar elementos en su propio eje.
* Indicar si se está mirando el objeto.

### Posiciones sugeridas:

* Atrás: x : -300, y : 350, z : 30,
* Adelante : x : 250, y : 350, z : 0
* Izquierda : x : 0, y : 200, z : -350
* Derecha : x : 0, y : 180, z : 300

### "Observar" objeto.

La función ```puntoDeVista()``` a través de ```frustum.intersectsObject(objeto)``` indica si se está "mirando" un objeto, se espera que se indiqué si se está viendo un planeta.

### Decir el planeta que se está viendo.

Para tal fin se hace uso de la librería [responsiveVoice], la cual espera el texto y lenguaje:

```javascript
responsiveVoice.speak("Texto a decir", "Spanish Female");
```

### Autor

Jorge Rubaino 
[@ostjh]

License
----
MIT

[@ostjh]:https://twitter.com/ostjh
[clase 12 - Planetas]:https://github.com/Jorger/EP01_2016_01/blob/master/clase_12_retos_webgl/planetas/js/script.js#L10
[responsiveVoice]:http://responsivevoice.org/

