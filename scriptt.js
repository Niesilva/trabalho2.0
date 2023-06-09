var botoes = window.document.querySelectorAll('.interaçao');
botoes.forEach(function(botao) {
  botao.addEventListener('mousemove', Entrar);
  botao.addEventListener('mouseout', Sair);
});

function Entrar() {
  this.style.background = "#373538";
  this.style.color = 'black';
}

function Sair() {
  this.style.background = 'white';
}
var mapa ;
function initMap() {
  mapa = new google.maps.Map(document.getElementById('mapa'), {
    center: {lat: -21.250475960994862, lng: -44.99931009982708},
    zoom: 16
  });
}






let count = 1 ;
document.getElementById("radio1").checked = true;


setInterval(function() {
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if (count>4) {
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

