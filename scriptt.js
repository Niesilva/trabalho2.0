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



let count = 1 ;
document.getElementById("radio1").checked = true;


setInterval(function() {
    nextImage();
}, 10000)

function nextImage(){
    count++;
    if (count>4) {
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}


document.getElementById('btnScrollToBottom').addEventListener('click', function() {
  window.scrollTo(0, document.body.scrollHeight);
});
