// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// creates a new p referenced in the variable 'p'
const pRedText = document.createElement('p');                     
pRedText.style.color = 'Red';
pRedText.textContent = 'Hey I’m red!';
container.appendChild(pRedText);

const h3BlueText = document.createElement('h3');
h3BlueText.style.color = 'Blue';
h3BlueText.textContent = "I'm a blue h3!";
container.appendChild(h3BlueText);

const colorContainer = document.createElement('div');
colorContainer.classList.add('colorContent');
colorContainer.style.backgroundColor = 'Pink';
colorContainer.style.border = '1px solid black';
container.appendChild(colorContainer);

const h1Text =  document.createElement('h1')
h1Text.textContent = "I'm in a div";
colorContainer.appendChild(h1Text);