const Population = []; //if it would be static member variable how do we init it to 0

class Person{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.color = rngColor();
        this.children = [];

        Population.push(this);
        drawCircle(this.x, this.y, 10, this.color);
    }
    
    createChild(x,y){
        let newChild = new Person(x, y);
        this.children.push(newChild);

        drawLine(newChild.color, newChild.x, newChild.y, this.x, this.y);
        return newChild;
    }
};

/*
*we can make the lines draw first and then the circles with promise
*
*
*
*
*
*/