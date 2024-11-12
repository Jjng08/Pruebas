/*


class Ipersona {
    constructor() {
        if (new.target === Ipersona) {
            throw new Error('No puedes instanciar una interfaz');
        }
        if (typeof this.saludar !== 'function') {
            throw new Error('Debes implementar el método saludar');
        }
        if (typeof this.comida !== 'function') {
            throw new Error('Debes implementar el método comida');
        }
    }
}

export { Ipersona as default };
*/
var parrafo = document.getElementById("p");
parrafo.innerHTML = "Hola Mundo"; 