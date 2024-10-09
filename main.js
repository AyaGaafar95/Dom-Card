let names = ['moody', 'saaed', 'DoDo', 'lolo', 'roma', 'yoya', 'koki', 'Jamal'];
let colors = ['#f6bd60', '#caf0f8', '#f5cac3', '#ecf39e', '#f4cae0', '#ffa5ab'];
let avatars = ['images/Avatars-Bakar.png', 'images/Avatars.png', 'images/Avatars (5).png', 
               'images/Avatars (1).png', 'images/Avatars (3).png', 'images/Avatars (1).png', 
               'images/Avatars (3).png', 'images/Avatars.png'];

let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';
container.style.display = 'flex';
container.style.flexWrap = 'wrap'; // wrap to new line if needed
container.style.justifyContent = 'center'; // center the cards

function createCards(name, color, imageSrc) {
    // Create elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let image = document.createElement('img');
    let topImage = document.createElement('img')

    // Create content
    let head = document.createTextNode(name);
    let ageContent = document.createTextNode('age');
    image.src = imageSrc;
    topImage.src = '/images/Capture.PNG'

   
    // Style card to make it circular
    card.style.width = '200px'; 
    card.style.height = '200px';
    card.style.background = color;
    card.style.margin = '10px';
    card.style.borderRadius = '50%'; // Make it circular
    card.style.overflow = 'hidden'; // Ensure no content spills out
    card.style.display = 'flex';
    card.style.flexDirection = 'column'; // Stack content vertically
    card.style.alignItems = 'center'; // Center content horizontally
    card.style.justifyContent = 'center'; // Center content vertically

    // Add the 'card' class for animation
    card.classList.add('card');

    // Style title and age
    title.style.margin = '0px';
    age.style.margin = '0px';

    // Style image
    image.style.width = '100px'; // Image smaller than card
    image.style.height = '100px';
    image.style.borderRadius = '50%'; // Make image circular too
    
    // Append elements to card
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(image);
    container.appendChild(card);
    
    title.appendChild(head);
    age.appendChild(ageContent);

card.addEventListener('click',function(){
        document.body.style.backgroundColor = color
})

    return card;
}

// Function to reveal cards one by one
function revealCards(cards) {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show'); // Add 'show' class after delay
        }, index * 500); // Delay of 500ms between each card
    });
}

// Create and store all cards in an array
let cards = [];
for (let i = 0; i < names.length; i++) {
    // TODO: If the names array has more items than the colors ==> % colors.length

    let color = colors[i % colors.length]; // Rotate colors if more names than colors
    let imageSrc = avatars[i];
    let card = createCards(names[i], color, imageSrc);
    cards.push(card);
}

// Reveal the cards one by one
revealCards(cards);






