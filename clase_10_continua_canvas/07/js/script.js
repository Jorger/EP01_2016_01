window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");

  context.fillStyle = "#cccccc";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "black";

  context.font = "50px Arial";
  context.fillText("Hola Mundo", 150, 150);

  var textMetrics = context.measureText("Hola Mundo"),
      width = textMetrics.width;

  context.strokeRect(150, 150, width, -50);


  context.beginPath();
  context.moveTo(0, 50);
  context.lineTo(canvas.width, 50);
  context.stroke();

  context.textBaseline = "top";
  context.font = "20px Arial";
  context.textAlign = "left";
  context.fillText("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint corrupti magni, quae tenetur numquam atque excepturi enim. Veritatis voluptatibus vero facere beatae, nisi quam alias maiores, aperiam at laudantium accusamus.", 0, 50);
};
