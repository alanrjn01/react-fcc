class Chancho{
    propiedad = 'mi propiedad'
    //para declarar propiedades privadas se utiliza '#'
    #hambre = false
    static propEstatica = 10
    constructor(estado = 'triste',hambre){
        this.estado=estado
        this.#hambre = hambre
    }

    hablar(){
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con hambre' : 'lleno'}`)
    }

    //metodos estaticos : se puede acceder a traves de la clase y no hace falta crear una instancia de esta
    //los metodos estaticos no pueden acceder a las propiedades de una clase, a no ser que sean 
    //propiedades estaticas
    static comer(){
        console.log(this,'estoy comiendo', this.propEstatica)
    }

}

const chancho1 = new Chancho('triste',true)
chancho1.hablar( )
Chancho.comer()