// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');                     
// creates a new div referenced in the variable 'p'
p.style.color = 'red';                                      
// adds the indicated style rule
p.style.cssText = 'color: red; background: white;';          
// adds several style rules
p.setAttribute('style', 'color: blue; background: white;');    
// adds several style rules