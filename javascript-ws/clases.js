//expresion de clase
//creando la clase R y asignandola a una constante llamada rectangulo
const Rectangulo = class R {

}

const r = new Rectangulo()

//declaración de clase
class Triangulo{

}
// HOISTING
//es cuando tomamos variables definidas con VAR o functiones definidas con FUNCTION
//y js la lleva al comienzo del archivo
function Cuadrado(){}

//console.log(Cuadrado,Rectangulo)

class Leon{
    //valores por defecto en una funcion
    estado = ''
    constructor(estado = 'feliz'){
        this.estado=estado
    }

    hablar(){
        console.log(`soy un leon ${this.estado}`)
    }
}

const l1 = new Leon("triste")
l1.hablar()