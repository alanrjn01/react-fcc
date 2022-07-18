const fn = (a,b,c) => console.log(a+b+c)

const arr = [1,2,3,4]

//spread operator... nos permite llamar a todos los elementos de un array
fn(...arr)


const arr1 = [5,6]

//uniendo arrays con spread operators
const arr2 = [...arr,...arr1]
console.log(arr2)

const obj1 = {a:1,b:2}
const obj2 = {b:5,c:'tiburon blanco'}
const obj3 = {...obj1}
obj1.a=10
console.log(obj3,obj1)

//spread operator reemplaza los valores de propiedades repetidas
const obj4 = {...obj1,...obj2}
console.log(obj4) //{ a: 10, b: 5, c: 'tiburon blanco' }

const obj5 = {
    ...obj1,
    loading:true,
    data:{
        prop:'lala',
        animal:'perrito'
    }
}
console.log(obj5)