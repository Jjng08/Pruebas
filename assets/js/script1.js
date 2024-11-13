

var dato1 = {
    nombre: 'Juan',
    edad: 25
};

var dato2 ={
    nombre: 'Maria',
    edad: 30
};

var dato3 ={
    nombre: 'Pedro',
    edad: 35
};

var dato4 = {
    nombre: 'Jose',
    edad: 40
};

var dato5 = {
    nombre: 'Carlos',
    edad: 5
};
var list = document.getElementById('lista');

var datos = [dato1, dato2, dato3, dato4, dato5];

datos.forEach(function(dato) {
    var listItem = document.createElement('li');
    listItem.textContent = `${dato.nombre}, ${dato.edad} años`  ;

    listItem.addEventListener('mouseover', function() {
        listItem.style.color = 'blue';
        if(dato.edad < 18){
            listItem.style.color = 'red';
        }
    });

    listItem.addEventListener('mouseout', function() {
        listItem.style.color = 'black';
        if(dato.edad < 18){
            listItem.style.color = 'yellow';
        }
    });

    list.appendChild(listItem);
});





