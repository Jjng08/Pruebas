import  Ipersona  from './Ipersona.js';



class persona extends Ipersona {
    constructor(nombre, edad, peso, estatura, pais, idioma) {
        super();
        this._nombre = nombre;
        this._edad = edad;
        this._peso = peso;
        this._estatura = estatura;
        this._pais = pais;
        this._idioma = idioma;
    }

    get nombre() { return this._nombre; }
    set nombre(nombre) { this._nombre = nombre; }

    get edad() { return this._edad; }
    set edad(edad) { this._edad = edad; }

    get peso() { return this._peso; }
    set peso(peso) { this._peso = peso; }

    get estatura() { return this._estatura; }
    set estatura(estatura) { this._estatura = estatura; }

    get pais() { return this._pais; }
    set pais(pais) { this._pais = pais; }

    get idioma() { return this._idioma; }
    set idioma(idioma) { this._idioma = idioma; }

    saludar() {
        const esaludos = {
            'Español': 'Hola',
            'Inglés': 'Hello',
            'Francés': 'Salut',
            'Italiano': 'Ciao'
        };
        const saludos = new Map(Object.entries(esaludos));
        return saludos.get(this.idioma);
    }

    comida() {
        console.log('Un plato italiano');
    }
}

const p1 = new persona('Pepe', 12, 60, 1.60, 'Chile', 'Español');
const p2 = new persona('Tulio', 22, 83.3, 1.99, 'Chile', 'Francés');

console.log(p1.saludar());
p1.comida();
console.log(p2.saludar());
p2.comida();