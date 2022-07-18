//el rest operator lo que hace es obtener todos los argumentos que recibamos por parametro
const rest = (a,...argumentos) => {
    console.log(a)
    console.log(argumentos)
}

rest(1,2,3) //1 | [2,3]

//destructuramiento de objeto con rest
const obj = {
    a:1,b:2,c:3,d:4
}
//const {a,b, ...restoObj} = obj
//console.log(a,b,restoObj)

//desestrucutarmiento de array
const arr = [1,2,3,4,5]
const [a,b,...r] = arr

