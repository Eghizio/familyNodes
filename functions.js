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

// const childNodes = [6,6,6,6,6,6];
// recursiveBirth(Parent, childNodes);

//maybe we should destructure the Parent with children[] prop 
//and createChild() *generation[gen] for every empty childless Parent


function rec(obj, arr, radiusik){
    let generation = 1;
    while(generation <= arr.length){
        if(!obj.children.length){
            for(let i=0; i<arr[generation-1]; i++){
                let x = radiusik * Math.cos( (i* ( 360/arr[generation-1] )) * Math.PI / 180);
                let y = radiusik * Math.sin( (i* ( 360/arr[generation-1] )) * Math.PI / 180);
                obj.createChild(x,y);
            }
        }else{
            obj.children.forEach(child => {
                for(let i=0; i<arr[generation-1]; i++){
                    let x = radiusik * Math.cos( (i* ( 360/arr[generation-1] )) * Math.PI / 180);
                    let y = radiusik * Math.sin( (i* ( 360/arr[generation-1] )) * Math.PI / 180);
                    child.createChild(x,y);
                    //how do we pass the child children to the function
                }
            });
        }
        generation++;
        radiusik = radiusik*0.5;
        //radius hardcoded for now, 
        //maybe will reduce by some percentage after testing how it scales furtherto sizes and readability
    }
}

// const childNodes = [5,5];
// rec(Parent, childNodes, 200);


//NEW APPROACH
// i=0 => x=radius, y=0
// let x = radius * Math.cos( (i* ( 360/childrenInThisGeneration )) * Math.PI / 180);
// let y = radius * Math.sin( (i* ( 360/arr[generation-1] )) * Math.PI / 180);
// 0 => howManyGenerations for ex: [5,5] 0 1 

// Pattern
// createChild => createChild until last gen cap
// get to the start
// check if childrenInThisGeneration reached (probably not)
// createChild => createChild until last gen cap 
//get to start
//repeat

const recursiveBirth = (parent, generations, radius, g = 0) => {
    if(g == generations.length) return;
        let x = radius * Math.cos( (generations[g]* ( 360/generations[g] )) * Math.PI / 180);
        let y = radius * Math.sin( (generations[g]* ( 360/generations[g] )) * Math.PI / 180);
        console.log(`${x} & ${y}`)
        recursiveBirth(parent.createChild(x,y), generations, radius*0.5, g+1);
}



