

const divAlert = document.getElementById('alert');
const h2 = document.getElementById('h2Alert');
const span = document.createElement('span');

h2.style.position = "relative";
h2.className += "showAlert";
h2.textContent= 'Alert: Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
h2.appendChild(span);
span.textContent = 'x';
span.style.position = "absolute";
span.style.right = '0';
span.style.top = '-5px';
span.style.padding = '2px';
span.style.color = 'ghostwhite';
span.style.fontStyle = "light";