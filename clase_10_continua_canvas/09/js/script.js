window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      image = document.createElement("img"),
      x = 0,
      y = 0;

  image.src = "img/horse.jpg";
  image.addEventListener("load", function() {
    setInterval(animate, 1000/15);
  });


  function animate() {
    var w = 186,
        h = 135;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image,
                      w * x, h * y, w, h,
                      0, 0, w, h);
    x++;
    if(x > 3) {
      x = 0;
      y++;
    }
    if(y > 3) {
      y = 0;
    }
  }
};
