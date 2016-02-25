var sudokuJS = (function()
{
    var sudokujs        = [],
        solvedSudoku    = [],
        mostrarNumero   = [],
        dificultad      = [70, 50, 30],
        dimension       = 0,
        nivel           = 0,
        valMaximo       = 0;

    //Desordenar el sudoku
    var swappingNumbers = function()
    {
        var numeroVeces     = Math.floor(valMaximo / 2),
            intercambia     = [],
            parIntercambia  = [],
            semilla         = 0,
            existe          = false;

        for(var veces = 1; veces <= numeroVeces; veces++)
        {
            //Se reinicia el array de variaciones...
            parIntercambia = [];
            do
            {
                existe = false;
                semilla = Math.floor(Math.random() * valMaximo) + 1;
                if(parIntercambia.length !== 0)
                {
                    if(parIntercambia[0] === semilla)
                    {
                        existe = true;
                    }
                }
                if(!existe)
                {
                    for(var i = 0; i < intercambia.length; i++)
                    {
                        if(intercambia[i][0] === semilla || intercambia[i][1] === semilla)
                        {
                            existe = true;
                            break;
                        }
                    }
                }
                if(!existe)
                {
                    parIntercambia.push(semilla);
                    if(parIntercambia.length === 2)
                    {
                        break;
                    }
                }
            }while(1);
            intercambia.push(parIntercambia);
        }
        for(var itera = 0; itera < intercambia.length; itera++)
        {
            for(var fila = 0; fila < dimension; fila++)
            {
                for(var col = 0; col < dimension; col++)
                {
                    for(var i = 0; i < dimension; i++)
                    {
                        for(var c = 0; c < dimension; c++)
                        {
                            if(sudokujs[fila][col][i][c] === intercambia[itera][0])
                            {
                                sudokujs[fila][col][i][c] = intercambia[itera][1];
                            }
                            else if(sudokujs[fila][col][i][c] === intercambia[itera][1])
                            {
                                sudokujs[fila][col][i][c] = intercambia[itera][0];
                            }
                        }
                    }
                }
            }
        }
    };

    //Oculta los números del sudoku...
    var ocultaSudoku = function()
    {
        var cont    = 0,
            mostrar = false;
        for(var fila = 0; fila < dimension; fila++)
        {
            for(var col = 0; col < dimension; col++)
            {
                for(var i = 0; i < dimension; i++)
                {
                    for(var c = 0; c < dimension; c++)
                    {
                        mostrar = false;
                        for(var d = 0; d < mostrarNumero[cont].length; d++)
                        {
                            if(sudokujs[fila][col][i][c] === mostrarNumero[cont][d])
                            {
                                mostrar = true;
                                break;
                            }
                        }
                        if(!mostrar)
                        {
                            sudokujs[fila][col][i][c] = 0;
                        }
                    }
                }
                cont++;
            }
        }
    };

    //Genera las semillas...
    var generaSemilla = function(fila, columna)
    {
        var elementos   = [],
            valInicia   = (fila + 1) + (columna * dimension);
        for(var i = 0; i < dimension; i++)
        {
            elementos.push([]);
            for(var c = 0; c < dimension; c++)
            {
                if(valInicia > valMaximo)
                {
                    valInicia = 1;
                }
                elementos[i].push(valInicia);
                valInicia++;
            }
        }
        return elementos;
    };

    var ocultaElementos = function()
    {
        /*
            Fácil -> 70%
            Mediana -> 50%
            Complejo -> 30%
        */
        var totalElementos  = Math.pow(valMaximo, 2),
            maxElementos    = Math.ceil((totalElementos * (dificultad[nivel - 1] / 100))),
            numVisible      = Math.round(maxElementos / valMaximo),
            numCuadrante    = 0,
            mostrar         = [],
            existe          = false,
            semilla         = 0;
        for(var i = 0; i < valMaximo; i++)
        {
            numCuadrante = Math.floor(Math.random() * numVisible) + 1;
            mostrar = [];
            do
            {
                existe = false;
                semilla = Math.floor(Math.random() * valMaximo) + 1;
                if(mostrar.length !== 0)
                {
                    for(var c = 0; c < mostrar.length; c++)
                    {
                        if(mostrar[c] === semilla)
                        {
                            existe = true;
                            break;
                        }
                    }
                }
                if(!existe)
                {
                    mostrar.push(semilla);
                    if(mostrar.length === numCuadrante)
                    {
                        break;
                    }
                }
            }while(1);
            mostrarNumero.push(mostrar);
        }
        ocultaSudoku();
    };

    var creaSudoku = function (size, level)
    {
        sudokujs = solvedSudoku = [];
        dimension = size !== undefined ? (size < 2 || size > 5 ? 3 : size) : 3;
        nivel = level !== undefined ? (level < 0 || level > 3 ? 1 : level) : 1;
        mostrarNumero = [];
        valMaximo = Math.pow(dimension, 2);
        for(var i = 0; i < dimension; i++)
        {
            sudokujs.push([]);
            for(var c = 0; c < dimension; c++)
            {
                sudokujs[i].push(generaSemilla(i, c));
            }
        }
        //Cambiar los valores del sudoku...
        swappingNumbers();
        solvedSudoku = JSON.parse(JSON.stringify(sudokujs));
        ocultaElementos();
        return {
                    sudokujs : sudokujs,
                    respuesta : solvedSudoku
                };
    };
    function isNumber(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    return {
                creaSudoku : creaSudoku
           };
})();

if (typeof exports !== 'undefined')
{
	for (var i in sudokuJS)
    {
		exports[i] = sudokuJS[i];
	}
}
