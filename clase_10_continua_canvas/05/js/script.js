window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = 600,
      height = canvas.height = 600;

  context.lineCap = "round"; //square, butt
  //context.lineJoin = "miter";
  //context.miterLimit = 1;

  context.lineWidth = 20;
  context.strokeStyle = "#999999";
  draw();

  context.lineWidth = 1;
  context.strokeStyle = "#ff0000";
  draw();

  function draw()
  {
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(150, 50);
    context.stroke();

    context.beginPath();
    context.rect(200, 200, 100, 100);
    //context.stroke();

    //context.beginPath();
    //context.moveTo(390, 500);
    context.lineTo(400, 400);
    //context.lineTo(410, 500);
    context.stroke();
  }
};
