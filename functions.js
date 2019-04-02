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
const debug = true;
//debug to slow down the process
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

// what pronouns will we use huh? xd
// function recursiveBirth(unknownGenderParent, generations, radius){
//     let gen = generations.length;
//     let r = radius;

//     while(gen){
//         gen--;

//         for(let i = 0; i < gen; i++){

//             let x = r * Math.cos( (i* ( 360/generations[gen] )) * Math.PI / 180);
//             let y = r * Math.sin( (i* ( 360/generations[gen] )) * Math.PI / 180);

//             unknownGenderParent.createChild(
//                 x + unknownGenderParent.x, 
//                 y + unknownGenderParent.y);
//         }
//     }
// }

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

                obj.createChild(x + obj.x, y + obj.y);
            }
        }
        else{
            obj.children.forEach(child => {
                for(let i=0; i<arr[generation-1]; i++){

                    let x = radiusik * Math.cos( (i* ( 360/arr[generation-1] )) * Math.PI / 180);
                    let y = radiusik * Math.sin( (i* ( 360/arr[generation-1] )) * Math.PI / 180);

                    
                    child.createChild(x + child.x, y + child.y);
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













