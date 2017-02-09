var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
makeImage("http://wallpapercave.com/wp/tCqNOtn.jpg",0,0,200,100,1)
makeImage("http://bestanimations.com/Animals/Fish/animated-stingray.gif",75,0,50,60)
makeImage("http://freepngimages.com/wp-content/uploads/2015/10/clown-fish-transparent-background.png",40,60,10,20)
makeImage("http://bestanimations.com/Animals/Fish/goldfish/goldfish-swimming-animated-gif-10.gif",60,60,50,50)
makeImage("http://static.wixstatic.com/media/ec6126_4de390b195bd47a09a822bbb6c5ed267.gif_srz_966_483_85_22_0.50_1.20_0.00_gif_srz",40,10,30,30)
makeImage("http://aquarium-source.com/images/clownfish-animated3.gif",150,50,12,6)
makeCircle(150,40,10,"Black",0.25)
makeCircle(155,40,5,"White",0.3)
makeCircle(156,40,2,"Black",0.3)
makeEllipse(154,47,3,2,"Black",0.05)
makePolygon("145,40 135,50 135,30", "Black", 0.15)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
  makeImage("https://i.ytimg.com/vi/VMLjLDr6k1A/maxresdefault.jpg",0,0,200,100,1)
  makeImage("http://dnr2.maryland.gov/fisheries/PublishingImages/horseshoe_crab.gif",100,90,20,10)
  makeImage("https://68.media.tumblr.com/bfff0fb03c077c5b433d082fd6829829/tumblr_ojw2z6Vp2d1w3x7tyo1_500.gif",70,10,70,40)
  makeImage("http://www.few.vu.nl/~nva800/Multimedia%20Authoring/fish/img/crab.gif",70,85,25,15)
  makeImage("http://24.media.tumblr.com/89be2d347971643110ed9e6dd52e59d7/tumblr_mkafx05ehO1rcruuno1_400.gif",80,40,50,50)
  makeCircle(120,30,5,"Blue",0)
  makeCircle(124,30,1,"White",0)
  makeCircle(124.5,30,0.4,"Black",0)
  makeEllipse(123,32,1,0.5,"Black",0)
  makePolygon("120,30 109,40 109,28", "Blue",0)

}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
  makeImage("https://i.ytimg.com/vi/MiZCeD0EobY/maxresdefault.jpg",0,0,200,100,1)
  makeImage("http://bestanimations.com/Animals/Fish/Sharks/sharkanimation-6.gif",30,60,100,50)
  makeImage("http://www.lataco.com/wp-content/uploads/tumblr_mfbj88PfgA1r39x51o1_500.gif",30,10,100,50)
  makeCircle(150,40,10,"Red",0.95)
  makeCircle(155,40,5,"White",1)
  makeCircle(156,40,2,"Black",1)
  makeEllipse(154,47,3,2,"Black",0.75)
  makePolygon("145,40 135,50 135,30", "Red", 0.85 )

}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var RanNumber = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(RanNumber < 0.33){
    createFirstScene()
}
else {
  if(RanNumber < 0.67){
    createSecondScene()
  }
  else {
    createThirdScene()
  }
}

    // Else, if the number is less than 0.67, call the function to create your second scene.



    // Else, call the function to create your third scene.



}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}
