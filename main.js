let names = ['moody', 'saaed', 'DoDo','lolo','roma','yoya','koki','Jamal'];
let colors =['#f6bd60','#caf0f8','#f5cac3','#ecf39e','#fbf8cc','#cfbaf0']
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center'

function createCards(name , color){
// create element
// بقوله كل حاجه هتكون عبارة عن اايه
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let image = document.createElement('img');

// create content
let head = document.createTextNode(name);
let ageContent = document.createTextNode('age');
// image.src ='https://plus.unsplash.com/premium_photo-1723672941904-dcd84fb8feda?q=80&w=1455&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
image.src = '/Avatars-Bakar.png'
title.appendChild(head)
age.appendChild(ageContent)

// style
container.style.display = 'flex'
card.style.width = '200px'; // ensure equal width and height for a circle
card.style.height = '200px'; 
// card.style.width = '15rem'
card.style.padding = '10px'
card.style.background = color;
card.style.margin = '10px'
card.style.flexWrap = 'wrap'
card.style.borderRadius = '50%'
title.style.margin = '0px'
image.style.width = '70%'


card.appendChild(title)
card.appendChild(age)
card.appendChild(image)
container.appendChild(card)
}
//  let color ;

// for (let index = 0; index < colors.length; index++) {
//     color = colors[index];
//     card.style.background = color
// }

// TODO: If the names array has more items than the colors
for(i = 0 ; i< names.length ; i++){
    let color = colors[i % colors.length];
    createCards(names[i], color);
}
