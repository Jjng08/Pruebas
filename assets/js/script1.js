var parrafo = document.getElementById('parrafo');
parrafo.innerHTML = 'Hola Mundo';
parrafo.setAttribute('style', 'color: red;');

var btn1 = document.getElementById('btn1');

btn1.value = "Caja qlia";
btn1.type = "text";


var span = document.createElement('span');
let texto = document.createTextNode('Un lorem upso');
span.appendChild(texto);
document.body.appendChild(span);


var caja = document.getElementById('box');
var btn2 = document.createElement('input');
btn2.setAttribute('type', 'button');
btn2.setAttribute('value', 'Boton nuevo');
document.body.replaceChild(btn2, caja);

let box = document.getElementById('box');
box.addEventListener('click', function(){ alert('Hola mundo'); });

box.addEventListener('mouseover', function(){ alert('cambio'); });

box.addEventListener('mouseout', function(){ alert('cambio denuevo'); });


