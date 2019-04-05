//Canvas Setup
var canvas = document.getElementById('canvasik');
var c = canvas.getContext('2d');
c.canvas.width = window.innerWidth;
c.canvas.height = window.innerHeight;
//lets just keep it here instead of doing calc over and over again later
c.translate(canvas.width/2, canvas.height/2); 

//better visibility with odd generations
//Population = 1 + 5^1 + ... + 5^n

//Modify gen array and radius for different output
const gen = [3,3,3,3,3,3,3,3,3,3];
const radius = 200;

recursiveBirth(new Person(), gen, radius);

window.addEventListener('DOMContentLoaded', (e) => {
    document.body.style.margin = 0;

    //maybe we shall try currying?
    document.body.onmousemove = (position = {x: e.clientX, y: e.clientY}) => 
        hover(position);

    Population.forEach(parent => parent.connectChildren());
});



