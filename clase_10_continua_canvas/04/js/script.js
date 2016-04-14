window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");

  context.beginPath();
  //context.arc(300, 300, 100, 0, 5, true);
  context.arc(300, 300, 200, 0, Math.PI * 2, true);
  context.fillStyle = 'red';
  context.lineWidth = 20;
  context.strokeStyle = 'blue';
  //context.fill();
  context.stroke();

  var ejes = function(puntos)
  {
      context.beginPath();
      context.moveTo(puntos.inicia.x, puntos.inicia.y);
      context.lineTo(puntos.fin.x, puntos.fin.y);
      context.lineWidth = 20;
      context.strokeStyle = puntos.color;
      context.stroke();
  };

  ejes({
            inicia : {x : 100, y : 300},
            fin : {x : 500, y : 300},
            color : "pink"
  });

  ejes({
            inicia : {x : 300, y : 100},
            fin : {x : 300, y : 500},
            color : "yellow"
  });



};
