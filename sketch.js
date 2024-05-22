let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  let palavras = ["GUCCI", "Rolls Royce", "Audi"];
  
  return random(palavras);
}

function inicializaCores() {
  background("black");
  fill("gold");
  textSize(64);
  textAlign(CENTER, CENTER);
  strokeWeight(10)
  stroke("green")
  line(0, height/2 - 10, width, height/2 - 10);
  stroke("red")
  line(0, height/2, width, height/2);
  stroke("green")
  line(0, height/2 + 10, width, height/2 + 10);
  
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  
  inicializaCores();

  let texto = palavraParcial(0, width);
    
  text(texto, 200, 200);
  
}

function modoNoturno(horario) {
  if (horario > 18) {
    console.log("Você precisa ligar o modo escuro!");
  } else {
    console.log("Modo noturno não é necessário neste momento.");
  }
}

modoNoturno(15);
modoNoturno(20);
