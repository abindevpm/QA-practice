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


                // frequency


//   let a = [1,2,3,4,1,2]
  
//    let freq = {};
   
//     for(let i = 0;i<a.length;i++){
//         let item = a[i]
        
//         freq[item] = (freq[item] || 0)+1
    
//     }
    
//      console.log(freq)


                // vowels count 

//       let a = "hello"

// let vowels = "aeiouAEIOU"

// let count = 0;

//  for(let i = 0;i<a.length;i++){
//       if(vowels.includes(a[i])){
//           count++
//       }
//  }
 
//  console.log(count)          


                // secondlargest element in array

// let a = [1,2,3,4,5,6,8];

// let largest = -Infinity;
// let secondlargest = -Infinity;

//  for(let i = 0;i<a.length;i++){
//       if(a[i]>largest){
//           secondlargest = largest
//           largest = a[i]
//       }else if(a[i]>secondlargest && a[i]!==largest){
//           secondlargest = a[i]
//       }
//  }


//  console.log(secondlargest)            


                          // count of words in a sentences

//   let a = "i am a developer"
// let count = 1;

// for(let  i = 0;i<a.length;i++){
//     if(a[i] === " "){
//         count++
//     }
// }

// console.log(count)


                          // odd number sum using recursion

//     let a = [1,2,3,4,5,6]

//  let b = a.reduce((acc,curr)=>{
//      if(curr%2!==0){
//          return acc+curr
//      }
//      return acc
//  },0)
 
//    console.log(b)                   

                      // largest sentences in a string

//   let str = "My name is Abindev";
// let largest = ''
// let s = str.split(" ")


// for(let i = 0;i<s.length;i++){
//     if(s[i].length>largest.length){
//         largest = s[i]
//     }
// }

// console.log(largest)                    