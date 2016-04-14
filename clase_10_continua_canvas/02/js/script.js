window.onload = function()
{
    var canvas  = document.getElementById("canvas"),
        context = canvas.getContext("2d");

    var p0 = {
                    x: Math.random() * 600,
                    y: Math.random() * 600
             },
        p1 = {
                x: Math.random() * 600,
                y: Math.random() * 600
             },
        p2 = {
                x: Math.random() * 600,
                y: Math.random() * 600
            };
    context.beginPath();
    context.moveTo(p0.x, p0.y);
    context.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    context.stroke();
    drawPoint(p0);
    drawPoint(p1);
    drawPoint(p2);
    function drawPoint(p)
    {
        context.fillRect(p.x - 15, p.y - 15, 30, 30);
    }
};
