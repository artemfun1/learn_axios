const myPost = {
  userId: 15,
  id: 1444,
  title: "sunt aut facere ",
  body:"jgnjrn"
}


const url = "https://jsonplaceholder.typicode.com/posts"


const sdd = axios(url)

sdd.then((data)=>{
  console.log(data.data)
})
// .then((data)=>console.log(data))


