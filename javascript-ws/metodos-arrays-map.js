
//filter toma los elementos de un arreglo y devuelve solo los que evaluen a true
//en este caso devuelve todos los elementos mayores a 2
const array = [-5,8,0,1,2,3,4]
const r = array.filter(elemento => elemento>2)
console.log(r)

//reduce toma todos los elementos de un arreglo y devuelve lo que querramos
//recibe un acumulador y el elemento por el cual estamos iterando. en 0 indicamos el valor del acumulador x defecto
const array2 = array.reduce((acumulador,elemento)=> acumulador+elemento,0)

const getMax = (a,b) => Math.max(a,b)
const r1= array.reduce(getMax,0)
console.log(r1)



//map toma todos los elementos de un arreglo y les aplica una funcion
const arr = [5,1,2,3,4]

//const mapped = arr.map((elemento) => `<h1>${elemento}</h1>`)
//console.log(mapped) // [ 10, 2, 4, 6, 8 ]

const users = [
    {id:1,name:'alan'},
    {id:2,name:'alan 2'},
    {id:3,name:'alan 3'},
    {id:4,name:'alan 4'},
    {id:5,name:'alan 5'}
]

const r2 = users.reduce((acumulador,elemento) => `${acumulador}, ${elemento.name}`,'')
console.log(r2)



const mapped = users.map((usuario) => `<h1>${usuario.name}</h1>`)