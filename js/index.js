console.log("Let's Start")
let rectangle={
    length:1,
    breadth:2,
    draw: function () {
        console.log('Draw')
    }
}
/////////////////////////////////////factory function //////////////////////////////////////////
// function createRectangle(){
//     return rectangle={
//         length:1,
//         breadth:2,

//         draw: function(){
//             console.log('Drawing Rectangle')
//         }
//     }
// }
// calling fuction and store in the variable
// let createRectangleobj1 = createRectangle()
// createRectangleobj1.length
// console.log(createRectangleobj1.breadth)

////////////////////////////////////////Passing parameter///////////////////////////////////////////////
// function createRectangle(len,bre){
//     return rectangle={
//         length:len,
//         breadth:bre,

//         draw: function(){
//             console.log('Drawing Rectangle')
//         }
//     }
// }
// let createRectangleobj2= createRectangle(3,5)
// console.log(createRectangleobj2.breadth)



/////////////// 2nd method constructor function//////////////////////////////////
// constructor function -> propeties Methods -> initialise/Define



// function Rectangle(len,bre) {
//     this.length=len
//     this.breadth=bre
//     this.draw=function(){
//         console.log('Drawing')
//     }
// }

// Object creation using constructor function///////////////////////
// let creatRectangleObj1 = new Rectangle(4,8);

// console.log(creatRectangleObj1)

// creatRectangleObj1.color='red'
// console.log(creatRectangleObj1)

// delete creatRectangleObj1.length
// console.log(creatRectangleObj1)
//////////////////////////////////// For In loop/////////////////////////////
// for(let key in rectangle){
//     console.log(key,rectangle[key])
// }

///#oBject cloning 1
// let dest={}
// for(let key in rectangle){
//     dest[key]= rectangle[key]
// }
// console.log(dest)

//#oBject cloning 2
let src={
    a:1,
    b:2,
    c:3
};

let dest = Object.assign({},rectangle)
console.log(dest)
rectangle.length++
console.log(dest)

//#oBject cloning 3
// let src={
//     a:10,
//     b:20,
//     c:30
// };
// let dest={...rectangle }
// console.log(dest)