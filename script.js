const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");
const restart = document.getElementById("restart");

function isLampBroken() {
  return lamp.src.indexOf("quebrada") != -1;
  // esse indexOf faz percorrer uma string e ver se tem o nome procurado
  // caso tenha, retorna o valor 1, caso nao tenha retorna o valor -1
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
    turnOn.style.setProperty("display", "none", "important");
    turnOff.style.setProperty("display", "block", "important");
  } else{
    restart.style.setProperty("display", "block", "important")
  }


}
function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/desligada.jpg";         
    turnOn.style.setProperty("display", "block", "important");
    turnOff.style.setProperty("display", "none", "important");
  } else{
    restart.style.setProperty("display", "block", "important")
  }

}

function lampBroken() {
  if (!isLampBroken()) {
    lamp.src = "./img/quebrada.jpg";
    turnOn.style.setProperty("display", "none", "important");
    turnOff.style.setProperty("display", "none", "important");
  } else {
    restart.style.setProperty("display", "block", "important")

  }
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);
lamp.addEventListener("dblclick", lampBroken);
