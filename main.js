screen_width = 0;
screen_height = 0;

apple = "";

speak_data = "";   

to_number = "";

x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  apple = loadImage('apple.png');
}

function start()
{
  document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  to_number = Number(content);

  if(Number.isInteger(to_number)){
    console.log("se dibujo una manzana 🍎");
    draw_apple = ("set");
  } else {
    console.log("No se reconocio un numero");

  }

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "La voz se reconoció como: " + content; 

}

function setup() {
  screen_width = window.innerWidth(); 
  screen_height = window.innerHeight();

  canvas =  createCanvas(screen_width, screen_height - 150);
  canvas.position = (0, 150);


  
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " manzanas dibujadas";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
