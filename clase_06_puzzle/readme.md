# Actividad Puzzle

Actidad que tiene como fin el aprendizaje de ES6.

# Vídeo Clase

https://youtu.be/b2lzj4Y8OBo

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

Se entrega una base de la actidad, en la cual se deberá validar el movimiento de las piezas del Puzzle, entre las partes que se entrega está el relacionado a determinar los elementos vaciós que estén cercanos a la pieza seleccionada:

![Ocupado](https://dl.dropboxusercontent.com/u/181689/puzzle/puzzleOcupado.gif)

Al finalizar la validación el juego deberá realizar el cambio de pieza presionada al espacio disponible.

![Finaliza](https://dl.dropboxusercontent.com/u/181689/puzzle/PuzzleTerminado.gif)

# Ayudas.

Para el cambio de estilos de un elemento a otro, se ha separado en una función, la cual recibe la posición de corte que tendrá la imagen y además si está estará ocupada.

```javascript
let estiloCelda = ({fila, columna, ocupado}) =>
{
    //margin-right: 5px;
    let style = `width: ${valorCorte}px;
                 height: ${valorCorte}px;
                 display: inline-block;
                 border: 1px solid black;`;
    let clase = "";
    if(ocupado)
    {
        style += `background-position: -${fila}px -${columna}px;
                  cursor: pointer;
                  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.42);`;
        clase = "class = 'fondo'";
    }
    return {style, clase};
};
```

Debido a que no se está haciendo uso de librerías, pararealizar el cambio de estilos de un elemento se puede hacer uso de la función ```setAttribute()```

Para agregar una clase puede hacer uso de la función ```classList.add("clase");``` para adicionar una clase y ```classList.remove("clase")``` para eliminarla, más información en el siguiente enlace: https://developer.mozilla.org/es/docs/Web/API/Element/classList

Al aplicar estas funciones el cambio de clase y estilos se ve de la siguiente forma:

![Estilos](https://dl.dropboxusercontent.com/u/181689/puzzle/PuzzleStyle.gif)


### Autor
Jorge Rubaino

[@ostjh]
License
----
MIT
[@ostjh]:https://twitter.com/ostjh
