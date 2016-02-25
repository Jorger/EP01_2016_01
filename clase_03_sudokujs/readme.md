# SudokuJS

Librería que permite la creación de los elementos bases (semillas) de un Sudoku

# Uso.

Para hacer uso de la librería, se deberá asociar el archivo .js al documento html que hará uso de la misma.

* sudokujs.min.js: Para despliegue
* sudokujs.js: Para desarrollo

```
<script src = "js/sudokujs.min.js"></script>
```

Para hacer el llamado a un nuevo sudoku se invocará el método ```creaSudoku()``` el cual espara dos parámetros:

* Tamaño del sudoku (2 - 5)
* Dificultad: 1 - Fácil, 2 - Medio, 3 - Difícil.

Si no se envía parámetro alguno, se creará un sudoku de 3x3 con una dificultad Fácil (1)

Además de entregar el sudoku con sus semillas, también se retorna la solución del mismo.

## Ejemplo

```javascript
var newSudoku = sudokuJS.creaSudoku();
var sudoku = newSudoku.sudokujs;
var solve = newSudoku.respuesta;
```
La propiedad ```respuesta``` retorna una array con la respuesta del Sudoku.

La librería ha sido utilizada para la creación del juego.

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
