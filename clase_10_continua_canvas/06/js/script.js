window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = 600,
      height = canvas.height = 600;

  // Radial
  /*
  var gradient = context.createRadialGradient(110, 80, 20, 110, 90, 100);
  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.25, "yellow");
  gradient.addColorStop(0.5, "pink");
  gradient.addColorStop(1, "blue");
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(100, 100, 100, 0, Math.PI * 2);
  //context.alpha = 0.1;
  context.fill();
  */


  // Líneal...

  var linearGradient = context.createLinearGradient(100, 100, 200, 100);
  var colores = ["red", "yellow", "green", "silver", "blue", "pink", "gold", "gray", "purple"],
      aumento = 1 / colores.length;
  for(var i = 0, mueve = 0; i < colores.length; i++, mueve += aumento)
  {
      linearGradient.addColorStop(mueve, colores[i]);
  }
  /*

  linearGradient.addColorStop(0.25, "yellow");
  linearGradient.addColorStop(0.5, "green");
  linearGradient.addColorStop(0.75, "silver");
  linearGradient.addColorStop(1, "blue");
  */

  context.fillStyle = linearGradient;
  context.fillRect(100, 100, 100, 400);

};
