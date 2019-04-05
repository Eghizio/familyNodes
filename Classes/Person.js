const Population = []; //if it would be static member variable how do we init it to 0

class Person{
    constructor(x = 0, y = 0, radius = 10){
        this.x = x;
        this.y = y;
        this.radius = radius;//can be removed cause we use it only for drawing circle atm
        this.color = rngColor();
        this.children = [];
        this.parent = null;

        Population.push(this);
        // drawCircle(this.x, this.y, radius, this.color);
    }
    
    createChild(x,y){
        let newChild = new Person(x + this.x, y + this.y);
        newChild.parent = this;
        this.children.push(newChild);

        // drawLine(newChild.color, newChild.x, newChild.y, this.x, this.y);
        return newChild;
    }

    connectChildren(){
        if(this.children.length)
            this.children.forEach((child, i, children) => {
                if(i == children.length - 1)    i = -1;
                
                drawLine(this.color, children[i+1].x, children[i+1].y, child.x, child.y);
            });
    }
};

/*
* circles are covered by lines ( nodes are covered by edges )
* we can make the lines draw first and then the circles with promise
*/