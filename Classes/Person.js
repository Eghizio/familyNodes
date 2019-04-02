const Population = []; //if it would be static member variable how do we init it to 0

class Person{
    constructor(x = 0, y = 0, radius = 10){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = rngColor();
        this.children = [];
        this.parent = null;

        Population.push(this);
        drawCircle(this.x, this.y, radius, this.color);
    }
    
    createChild(x,y){
        let newChild = new Person(x + this.x, y + this.y);
        newChild.parent = this;
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