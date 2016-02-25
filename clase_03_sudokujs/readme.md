# Librería SudokuJS

Librería que permite la creación de los elementos bases (semillas) de un Sudoku

# Uso.

Para hacer uso de la librería, se deberá asociar el archivo .js al documento html que hará uso de la misma.

* [sudokujs.min.js]: Para despliegue
* [sudokujs.js]: Para desarrollo

```html
<script src = "js/sudokujs.min.js"></script>
```

Para hacer el llamado a un nuevo sudoku se invocará el método ```creaSudoku()``` el cual espare dos parámetros:

* **Tamaño del sudoku:** Mínimo 2, Máximo 5.
* **Dificultad:** 1 - Fácil, 2 - Medio, 3 - Difícil.

Si no se envía parámetro alguno, se creará un sudoku de 3x3 con una dificultad Fácil (1)

Además de entregar el sudoku con sus semillas, también se retorna la solución del mismo.

## Ejemplo

```javascript
var newSudoku = sudokuJS.creaSudoku(), 
    sudoku    = newSudoku.sudokujs, 
    respuesta = newSudoku.respuesta;
```
La propiedad ```respuesta``` retorna una Matriz con la respuesta del Sudoku.

La librería ha sido utilizada para la creación del juego.

![Adivinando](https://dl.dropboxusercontent.com/u/181689/sudokugif.gif)

### Enlaces.

* http://blog.forret.com/2006/08/14/a-sudoku-challenge-generator/
* http://stackoverflow.com/questions/6924216/how-to-generate-sudoku-boards-with-unique-solutions


### Autor
Jorge Rubaino

[@ostjh]
License
----
MIT
[@ostjh]:https://twitter.com/ostjh
[sudokujs.js]:https://github.com/Jorger/EP01_2016_01/blob/master/clase_03_sudokujs/js/sudokujs.js
[sudokujs.min.js]:https://github.com/Jorger/EP01_2016_01/blob/master/clase_03_sudokujs/js/sudokujs.min.js
