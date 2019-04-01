//Exporting functions, will probably get messy with time. 
//I'll try to split it in different files as much as I can

//we can also do the spectrum, which in OOP version will be better looking and trackable
function rngColor(){
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
function drawLine(color, endX, endY, startX = 0, startY = 0){
    c.strokeStyle = color;
    c.beginPath();
    c.moveTo(startX, startY);
    c.lineTo(endX, endY);
    c.closePath();
    c.stroke(); 
}

function drawCircle(x, y, radius = 10, color = rngColor()){
    c.fillStyle = color;
    c.beginPath();
    c.arc(x,y, radius, 0, Math.PI*2);
    c.closePath();
    c.fill();
}