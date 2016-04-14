window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      image = document.createElement("img"),
      x = 0,
      y = 0;
  image.src = "img/dog.jpg";
  image.addEventListener("load", function() {
     //context.drawImage(image, 50, 0);
    //context.drawImage(image, 50, 0, 150, 100);
    context.drawImage(image, 250, 10 ,100, 100, 30, 30, 100, 100);
  });
};
