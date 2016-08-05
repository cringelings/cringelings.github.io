//Charla de programación

//setup() se ejecuta una vez - setup = configurar
//al principio de los tiempo
function setup() {
  //camelCase, UPPERCASE, lowercase.
  
  //crear un lienzo para dibujar
  //createCanvas(dimHor, dimVer);
  //dimensiones en px
  createCanvas(800, 600);
  
  //pintar el fondo
  //background(color)
  //1: grayscale/escala de grises; 0: es negro, 255: blanco
  //2: grayscale + alpha
  //3: rgb, redgrenblue, o: nada, 255: todo
  //4: rgb +  alpha
  //alpha: 0 es transparente,  255 es solido
  //todo verde con (0, 255, 0)
  background(0, 255, 0);
}

//draw() cierre justo despues de setup()
//draw() se ejecuta 60 veces por segundo
function draw() {
  
  //definir antes de la figura para que esta figura tenga la modificación necesaria
  //definir ancho de figura
  //strokeWeight(px);
  strokeWeight(15);
  
  //Definir color del borde
  //stroke(color):
  //para que el borde no tenga color: noStroke()
  stroke(0, 0 ,255, 255/2);
  
  //definir color del relleno
  //fill(color);
  //rojo semitransparente
  fill(255, 0, 0, 100);
  
  //dibujemos elipse que siga al mouse
  //ellipse(posX, posY, width, height);
  //medidos en pixeles
  //usamos variabes de p5.js
  //mouseX, mouseY que sabe la posMouse (posición del Mouse)
  ellipse(mouseX, mouseY, 50, 50);
  
}