//Adding 100 para
// const t1= performance.now();
// for (let i = 0; i <=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent='this is Para'+i;
//     document.body.appendChild(newElement);
// }
// const t2= performance.now();
// console.log("This took "+(t2-t1)+" ms")


//optimizing a bit

// const t3= performance.now();
// let myDiv= document.createElement('div');
// for (let i = 0; i <=100; i++) {
//   let element=document.createElement('p');
//   element.textContent='This is Para'+i;
//   myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv)
// const t4= performance.now();
// console.log("This took "+(t4-t3)+" ms")


//Fragment Method

// let fragment = document.createDocumentFragment(); 
// for (let i = 0; i <=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent='this is Para'+i;
//     fragment.appendChild(newElement)
// }
// document.body.appendChild(fragment); // 1 reflow, 1 repaint

// function addPara() {
//     let para = document.createElement('p');
//     para.textContent="Js is single";
//     document.body.appendChild(para);
// }
// function appendNewMessage(){
//     let para = document.createElement('p');
//     para.textContent='Kya haal chaal'
//     document.body.appendChild(para)
// }
// addPara();
// appendNewMessage();
// let meraPromise = new Promise(function(resolve,reject){
//     setTimeout(() => {
//        console.log("I'm inside promise");
//     }, 5000);
    
//     reject(new Error('Error aa ra h'));
//    resolve(23344);
// })
// console.log("first")
// meraPromise.then((value)=>{console.log(value)},(error)=>{console.log("Recived an error")})
// meraPromise.catch((error)=>{console.log("Recived an error")})
// let promise1 = new Promise((resolve,reject)=>{
//    setTimeout(() => {
//       console.log('SetTimeOut1 started');
//    },3000);
//    resolve(true)
// })
// let output = promise1.then(()=>{
//    let promise2 = new Promise((resolve,reject)=>{
//       setTimeout(() => {
//          console.log('SetTimeOut2 started');
//       },2000);
//       resolve("Promise2 resolved");
//    })
//    return promise2
// })
// output.then((value)=>console.log(value))

// async function abcd() {
//    return 'Kya hua tera'
// }
// console.log(abcd())
//  async function utility(){
//    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//    let output= await content.json();
//    console.log(output);
//  }
//  utility();
async function helper(){

   let options= {
      method: 'POST',
      body: JSON.stringify({
        title: 'food',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
   }
   let content= await fetch('https://jsonplaceholder.typicode.com/posts',options)
   let response = content.json();
   return response
}
async function utility(){
   let ans = await helper();
   console.log(ans)
}
utility();