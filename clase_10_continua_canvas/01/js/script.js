window.onload = function()
{
    var canvas  = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        rango   = 0.01;


    var ejes = function(puntos, color)
    {
        context.beginPath();
        context.moveTo(puntos.inicia.x, puntos.inicia.y);
        context.lineTo(puntos.fin.x, puntos.fin.y);
        context.lineWidth = 2;
        context.strokeStyle = color;
        context.stroke();
    };

    var grafica = (function grafica()
    {
        context.clearRect(0, 0, 600, 600);
        ejes({
                inicia  : {x : 0, y : 300},
                fin     : {x : 600, y : 300}
            }, "black");

        ejes({
                inicia  : {x : 315, y : 0},
                fin     : {x : 315, y : 600}
            }, "black");
        context.beginPath();
        context.moveTo(0, 300);
        for (var x = 1; x <= 600; x++)
        {
            var y = 300 + Math.tan(x * rango) * 300;
            context.strokeStyle = "blue";
            context.lineTo(x , y);
        }
        context.stroke();
        return grafica;
    })();

    document.getElementById("rango").addEventListener('change', function(event)
    {
        rango = Number(this.value) / 100;
        grafica();
    });
};
