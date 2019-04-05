//Exporting functions, will probably get messy with time. 
//I'll try to split it in different files as much as I can

//we can also do the spectrum, which in OOP version will be better looking and trackable
const rngColor = () => {
    var Color = "#";
    for(let t = 0; t < 3; t++)
    {
        let c = Math.round(Math.random()*255).toString(16);
        if (c.length % 2)
            c = "0" + c;
        Color += c;
    }
    return Color;
}

//c is a canvas context
const drawLine = (color, endX, endY, startX = 0, startY = 0) => {
    c.strokeStyle = color;
    c.beginPath();
    c.moveTo(startX, startY);
    c.lineTo(endX, endY);
    c.closePath();
    c.stroke();
}

const drawCircle = (x, y, radius = 10, color = rngColor()) => {
    c.fillStyle = color;
    c.beginPath();
    c.arc(x,y, radius, 0, Math.PI*2);
    c.closePath();
    c.fill();
}
//c is no longer a canvas context

const recursiveBirth = (parent, generations, radius, g = 0) => {
    if(g == generations.length) return;
    for(let i=0; i<generations[g]; i++){
        let x = radius * Math.cos( (i * ( 360/generations[g] )) * Math.PI / 180);
        let y = radius * Math.sin( (i * ( 360/generations[g] )) * Math.PI / 180);
        // console.log(`${x} & ${y} : ${generations[g]}`)
        recursiveBirth(parent.createChild(x,y), generations, radius*0.5, g+1);
    }
}


//document.body.onmousemove = e => trackMousePosition(e) => hover(position);
/*

*/
const trackMousePosition = (e) => ( { x: e.clientX, y: e.clientY } );

//destructure and modify? filter?
const translatePosition = (e) => translatedPosition = {
    x: trackMousePosition(e).x - window.innerWidth,
    y: trackMousePosition(e).y - window.innerHeight
}

const hover = (e) => {
    console.log(`${trackMousePosition(e).x } : ${trackMousePosition(e).y}`);
}
