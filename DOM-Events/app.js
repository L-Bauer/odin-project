// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const pRedText = document.createElement('p');                     
// creates a new p referenced in the variable 'p'
pRedText.style.color = 'Red';
pRedText.textContent = 'Hey I’m red!';

container.appendChild(pRedText);
