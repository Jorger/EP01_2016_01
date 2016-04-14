window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");
  var p0 = {
      x: 0,
      y: 300
    },
      p1 = {
      x: 100,
      y: 300
    },
      p2 = {
        x: 250,
        y: 400
    },
      p3 = {
        x: 400,
        y: 200
    };

     /*
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
    },
      p3 = {
        x: Math.random() * 600,
        y: Math.random() * 600
    };
    */

  context.beginPath();
  context.moveTo(p0.x, p0.y);
  context.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  context.stroke();

  drawPoint(p0);
  drawPoint(p1);
  drawPoint(p2);
  drawPoint(p3);
  function drawPoint(p)
  {
    context.fillRect(p.x - 4, p.y - 4, 8, 8);
  }
};
