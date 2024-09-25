let names = ['moody', 'saaed', 'DoDo','lolo','roma','yoya','koki','Jamal'];
// let colors =['#d8f3dc','#f6bd60','#f5cac3','#ecf39e','#fbf8cc','#cfbaf0','#ffe156','#caf0f8',];
let colors =['#f6bd60','#caf0f8','#f5cac3','#ecf39e','#fbf8cc','#cfbaf0']
let avatars = ['images/Avatars-Bakar.png','images/Avatars.png','images/Avatars (5).png','images/Avatars (1).png','images/Avatars (3).png','images/Avatars (1).png','images/Avatars (3).png','images/Avatars.png']
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center'

function createCards(name , color, images){
// create element
// بقوله كل حاجه هتكون عبارة عن اايه
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let image = document.createElement('img');

// create content
let head = document.createTextNode(name);
let ageContent = document.createTextNode('age');
image.src = images
title.appendChild(head)
age.appendChild(ageContent)

// style container
container.style.display = 'flex'
container.style.flexWrap = 'Wrap'
container.style.justifyContent = 'center'

// card style

card.style.width = '200px'; 
card.style.height = '200px'; 
card.style.background = color;
card.style.margin = '10px'
card.style.borderRadius = '50%'
card.style.display = 'flex'
card.style.flexDirection = 'column'
card.style.justifyContent = 'center'
card.style.alignItems = 'center'

title.style.margin = '0px';
age.style.margin ='0px'


// image style
image.style.width = '100px'
image.style.height = '100px'
image.style.borderRadius = '50%'

// Append Elements to card

card.appendChild(title)
card.appendChild(age)
card.appendChild(image)
container.appendChild(card)
}



// TODO: If the names array has more items than the colors ==> % colors.length
for(i = 0 ; i< names.length ; i++){
    let color = colors[i % colors.length];
    let images = avatars[i]
    createCards(names[i], color,images);
}
