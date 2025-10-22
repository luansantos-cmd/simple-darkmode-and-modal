
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");


var span = document.getElementsByClassName("close")[0];

// clica e abre 
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
    modal.style.display = "block";
  }
btn2.onclick = function() {
    modal.style.display = "block";
  }
btn3.onclick = function() {
    modal.style.display = "block";
  }
btn4.onclick = function() {
    modal.style.display = "block";
  }
btn5.onclick = function() {
    modal.style.display = "block";
  }
btn6.onclick = function() {
    modal.style.display = "block";
  }
btn7.onclick = function() {
    modal.style.display = "block";
  }
// clica no x e fecha
span.onclick = function() {
  modal.style.display = "none";
}

// fecha
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//MODO ESCURO

const toggleSwitch = document.querySelector('#switch input');
const body = document.body;
const storageKey = 'dark';

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem(storageKey) === 'enabled') {
    enableDarkMode();
    toggleSwitch.checked = true;
  }
});

toggleSwitch.addEventListener('change', () => {
  console.log("hyyyyyy")
  if (toggleSwitch.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add('dark');
  localStorage.setItem(storageKey, 'enabled');
}

function disableDarkMode() {
  body.classList.remove('dark');
  localStorage.setItem(storageKey, 'disabled');
}




