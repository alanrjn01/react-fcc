const url = 'https://jsonplaceholder.typicode.com/users'

//realizando una peticion POST
// fetch(url,{
//     method: 'POST',
//     headers: {
//         'Content-Type':'application/json',
//         'Authorization':'Bearer toxen'
//     },
//     body: JSON.stringify({
//         name: 'Alan',
//         website: 'google.com'
//     })
// })
// .then((response) => response.json())
// .then(data => console.log(data))


//async await

const fn = async () =>{
    const response = await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':'Bearer toxen'
        },
        body: JSON.stringify({
            name: 'Alan',
            website: 'google.com'
        })
    })
    const data = await response.json()
    console.log(data)
}
fn()