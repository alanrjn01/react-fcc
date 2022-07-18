//en javascript podemos crear instancias de funciones con la palabra reservada 'new'
//funciones con palabra reservada FUNCTIONS
function Fn(){
    //cuando creamos una instancia de una funcion, se crea un objeto literal -> {}
    //este objeto toma las propiedades 'this' de la función y retorna 'this' enves del return
    this.prop = 'propiedad'
    return 'hola mundo'
}

const r = new Fn()
//console.log(r)

//------

//fat arrow functions
//las arrow functions no pueden usarse con la palabra reservada new y no poseen contexto de THIS
//podemos asignar su llamada en una variable o todo su contenido y luego ejecutarlo a través de otra variable
const fatFn = () => {
    return 'hola mundo 2'
}

const r1 = fatFn
console.log(r1(2))

//------

//funciones con return implicito
const fnR = () => 2
console.log(fnR())