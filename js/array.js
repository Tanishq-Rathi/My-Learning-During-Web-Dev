console.log("Lets Start")

let courses = [
    { no: 1, naam: 'Tanishq' },
    { no: 2, naam: 'Rathi' }
]
// CallBack Function
// let course = courses.find(
    //predicate function
//     function (course) {
//         return course.naam === 'Rathi'
//     }
// )
// ShortHand Notation for functions
// Upper function can also be written as:-
//Arrow functions
let course=courses.find(course=>{
    return course.naam==='Tanishq'
})
console.log(course)