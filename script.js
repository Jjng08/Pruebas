let persona = {
    nombre : "pepe",
    edad : 18,
    peso : 80,
    altura : 1.82,
    imc : function(){
        p = this.peso,
        a = this.altura
        return p / (a*a)
    },
    mostrar : function(){
        console.log("Nombre : " + this.nombre + 
            "\nEdad: " + this.edad +
            "\nPeso: " + this.peso +
            "\nAltura: " + this.altura +
            "\nIMC: " + this.imc() + "\n"
        )
    }
}

persona.mostrar()