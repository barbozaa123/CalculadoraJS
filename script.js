const display = document.querySelector("#display")
const botones = document.querySelectorAll("button")
const calculadora = document.querySelector("#calculadora")
botones.forEach((boton) => {
  boton.addEventListener('click', ()=>{ 
    if(boton.id === "="){
      display.value = eval(display.value);
    }
    else if(boton.id === "AC"){
      display.value = "";
    }
    else if(boton.id === "DE"){
      display.value = display.value.slice(0, -1)
    }
    else {
      display.value += boton.id
    }
  })
  addEventListener("keydown", function(key){
    if(key.key == "Enter"){
      display.value = eval(display.value);
    }
    else if(key.key == "Escape"){
      display.value = "";
    }
  })
} )

