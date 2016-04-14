window.onload = function()
{
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");
  context.shadowColor = "rgba(200, 0, 100, 0.5)";
  document.body.addEventListener("mousemove", function(event)
  {
    context.clearRect(0, 0, 600, 600);
    //console.log(event.clientX, event.clientY);
    var dx = 300 - event.clientX,
        dy = 300 - event.clientY,
        distance = Math.sqrt(dx * dx + dy * dy);
    context.shadowOffsetX = dx * 0.5;
    context.shadowOffsetY = dy * 0.5;
    context.shadowBlur = distance * 0.25;
    context.fillStyle = "blue";
    context.fillRect(250, 250, 100, 100);
  });

  //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  context.globalCompositeOperation = "darken";


};
