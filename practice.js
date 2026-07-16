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

                          //  NON prime numbers sum

//  let a = [1,2,3,4,5,6,7,8,9]

// let sum = 0;

//  for(let i = 0;i<a.length;i++){
//      let num = a[i]
//      let isPrime = true
     
//      if(num<=1){
//          isPrime = false
//      }
      
//       for(let j = 2;j<num;j++){
//           if(num%j==0){
//               isPrime = false
//               break
//           }
//       }
      
//        if(!isPrime){
//            sum+=num
//        }
     
//  }

// console.log(sum)                    

                         // reverse a string

// let a = [1,2,3,4,5];

// for(let i = 0;i<a.length/2;i++){
//     let temp = a[i]
//     a[i] = a[a.length-1-i]
//     a[a.length-1-i] = temp
// }

// console.log(a)                    

                           //  moving zeros to begining of the array
 
//  let a = [1,2,3,0,4,5,6,0];

// let zero = []
// let nonzero = []

//  for(let i = 0;i<a.length;i++){
//      if(a[i] === 0){
//          zero.push(a[i])
//      }else{
//          nonzero.push(a[i])
//      }
//  }


// let total = [...zero,...nonzero]

// console.log(total)


                         //  closure example

//  function outer(){
//     let a = "Hello world"
    
//     function inner(){
//         console.log(a)
//     }
//     return inner
    
// }

// const log = outer()
// log()                        


                            // currying example

//         function sum(a){
//     return function(b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }

// console.log(sum(10)(10)(10))                    
                           

                                //  Palindrome finding in string

//  function isPalindrome(str){
    
// let a = str
// let b = str.split("").reverse().join("")

// if(a===b){
//     return "isPalindrome"
// }else{
//     return "not a palindrome"
// }
    
    
// }

// console.log(isPalindrome("malayalam"))   


                       //  shallow Copy

//  let a = {
//     name:"abindev",
//     age:20,
//     address:{
//         place:'kannur'
//     }
// }

//  let b = {...a}
 
//  b.address.place = "kochi"
 
//  console.log(a)
//  console.log(b)                      

                       // Deep Copy

// let a = {
//     name:"abinndev",
//     age:20,
//     address:{
//         place:"kannur"
//     }
// }

// let b = JSON.parse(JSON.stringify(a))

// b.address.place = "kochi"

// console.log(a)
// console.log(b)      


                  // printing 1 to 10 , 1 sec delay in setTimeout

//  for(let i = 0;i<=10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },i*1000)
// }                 


               // printing 1 to 10 ,1 sec delay in setInterval

//  let i = 1;

// let interval = setInterval(()=>{
//     console.log(i)
//        i++
       
//       if(i>10){
//           clearInterval(interval)
//       }  
// },1000)              


                  // Sum of first 5 multples of 3 using while Loop

//  let i = 1;
// let sum = 0;

// while(i<=5){
//     sum = sum+(i*3)
//      i++
// }
// console.log(sum)                 


                    // Remove Duplicates in forloop 

//   let a = [1,2,2,1]
 
//   let nondup = []
  
//  for(let i = 0;i<a.length;i++){
//      let isDuplicate = false
//      for(let j = 0;j<nondup.length;j++){
//          if(a[i] === nondup[j]){
//              isDuplicate = true
//              break;
             
//          }
//      }
//        if(!isDuplicate){
//            nondup[nondup.length] = a[i]
//        }
//  }
 
//  console.log(nondup)                



                      
                     