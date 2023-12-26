function randomNumber() {
  return Math.floor(Math.random() * 100);
}

function randomColor() {
  var colors = ["red", "blue", "green", "yellow", "purple"];
  return colors[Math.floor(Math.random() * 5)];
}

function randomImage() {
  var images = ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png"];
  return images[Math.floor(Math.random() * 5)];
}

window.onload = function() {
  var number = randomNumber();
  var color = randomColor();
  var image = randomImage();

  document.getElementById("number").innerHTML = number;
  document.getElementById("color").innerHTML = color;
  document.getElementById("image").src = image;
};
