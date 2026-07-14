                     // callback 

// function a(name,callback){
//     console.log('hy'+name)
//     callback()
// }


// function b(){
//     console.log("good morning")
// }

// a("abindev",b)


                      // Promise 

//  let a = new Promise((resolve,reject)=>{
//     let i = true
//     if(i === true){
//         resolve("this is promise")
//     }else{
//         reject("not a  promise")
//     }
    
// })

// .then((success)=>{
//     console.log(success)
// })

// .catch((error)=>{
//     console.log(error)
// })


                   // Generator function ex

//      function*generator(){
//     for(let i = 0;i<=10;i++){
//         yield i
//     }
// }

//  const gen = generator()
 
//  for( let i of gen){
//      console.log(i)
//  }            

                   // optional chaining

//       let a = {
//     name:"abindev",
//     age:20
// }

//  console.log(a.address?.city)             


                   // nullish operator

//       let a = null
//  let b = a ?? "abindev"
 
//   console.log(b)            


                  // find unique element in array


//    let a = [1,2,3,4,1,2,3,4,5]
 
//  let uniq = []
 
//   for(let i = 0;i<a.length;i++){
//       let count = 0;
//       for(let j = 0;j<a.length;j++){
//           if(a[i] === a[j]){
//               count++
//           }
//       }
//       if(count === 1){
//           uniq[uniq.length] = a[i]
//       }
//   }
  
//    console.log(uniq)                