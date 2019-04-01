const Population = []; //if it would be static member variable how do we init it to 0

class Person{
    constructor(x, y, radius = 10){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = rngColor();
        this.children = [];

        Population.push(this);
        drawCircle(this.x, this.y, radius, this.color);
    }
    
    createChild(x,y){
        let newChild = new Person(x, y);
        this.children.push(newChild);

        drawLine(newChild.color, newChild.x, newChild.y, this.x, this.y);
        return newChild;
    }
};

/*
*circles are covered by lines ( nodes are covered by edges )
*we can make the lines draw first and then the circles with promise
*
*
*
*
*
*/