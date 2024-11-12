var segundos = [180, 60, 120, 900];
var minutos = segundos.map(segundos => segundos / 60);

var superados = minutos.filter(minutos => minutos > 2);
var todoaseg = minutos.reduce((t,m)=> t += m) * 60;

console.log(minutos); 
console.log(superados);
console.log(todoaseg);
