// function print() {
//     console.log('Hi')
// }
// document.addEventListener('click',print)
// document.removeEventListener('click',print)
// let content = document.querySelector('#wrapper')
// content.addEventListener('click', function(event) {
//     console.log(event)
// })
// let myDiv = document.createElement('div');
// function demo(event){
//     console.log('Para '+event.target.textContent);
// }
// myDiv.addEventListener('click',demo);
// for(let i=1; i<=100; i++){
//     let newElement= document.createElement('p');
//     newElement.textContent = 'This is para'+i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
let element = document.querySelector('#wrapper')
element.addEventListener('click',function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('Clicked on span'+ event.target.textContent)
    }
})