

//Canvas Setup
var canvas = document.getElementById('canvasik');
var c = canvas.getContext('2d');
//lets just keep it here instead of doing calc over and over again later
c.translate(canvas.width/2, canvas.height/2); 

//Inital simulation values
const parentNodes = 5;
const radius = 150;

// drawCircle(0,0,150);
// let angle = 360/parentNodes;

let Parent = new Person(0, 0);

for(let i = 0; i < parentNodes; i++){
    //x and y are 0,0 center wise
    let x = radius * Math.cos( (i* 360/5) * Math.PI / 180);
    let y = radius * Math.sin( (i* 360/5) * Math.PI / 180);
    Parent.createChild(x +Parent.x, y + Parent.y);
}

//children shouldnt have kids xd where is this world goin?
//also take care when ur googling how to kill parent without killing the children in css or smthing xD
//Federals might knock on ur doors some day

Parent.children.forEach(child => {
    for(let i = 0; i < 6; i++){
        let x = 50 * Math.cos( (i* (360/6) ) * Math.PI / 180);
        let y = 50 * Math.sin( (i* (360/6) ) * Math.PI / 180);
        child.createChild(x + child.x, y + child.y);
    }
});













