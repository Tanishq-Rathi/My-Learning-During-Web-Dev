// console.log("Lets Start")

// let courses = [
//     { no: 1, naam: 'Tanishq' },
//     { no: 2, naam: 'Rathi' }
// ]
// let course = courses.find(
    // CallBack Function
    //predicate function
    // function (course) {
    //     return course.naam === 'Rathi'
    // }
// )
// ShortHand Notation for functions
// Upper function can also be written as:-
//Arrow functions
// let course=courses.find(course=>{
//     return course.naam==='Tanishq'
// })
// console.log(course)

// let arr = [9,48,32,-56,64]
// for(let value of arr){
//     console.log(value)
// }
// arr.forEach(number=>{
//     console.log(number)
// })
// let num=arr.filter(function(value){
//     return value >=0
// })
// console.log(num);

// function sum(a, b) {
//     console.log(arguments)
//     return a+b
// }
// let ans = sum(1,2,3,4,5,6,7)

//Function for taking infinite arguments
// function infiSum(a,b) {
//     let total =0
//     for(let value of arguments){
//         total=total+value
//     }
//     return total
// }
// let ans2 = infiSum(1,2,3,4,5,6,7)
// console.log(ans2)

//function number(num,val, ...args) {
    //without num and val it is also valid
//     console.log(args)    
// }
// sum(1,2,3,4,5,6);

// let person ={
//     fName:'Tanishq',
//     lName:'Rathi',
//     get fullName(){
//         return `${person.fName} ${person.lName}`
//     },
//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error("You have not sent a string")
//         }
//         let parts = value.split(' ')
//         this.fName=parts[0]
//         this.lName=parts[1]
//     }
// }
// try {

//     person.fullName=true
    
// } catch (e) {

//      alert(e)
    // console.log('You have enter boolean in fullName')
// }
// console.log(person.fullName)

//Reduce array 
let arr=[1,2,34,4,5,6]

let totalSum = arr.reduce((accumulator, currentValue) => accumulator+currentValue,0)
console.log(totalSum)