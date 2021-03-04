class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2

        }
        this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("images/stone.png");
World.add(world,this.body);

    }
    display(){
var pos=this.body.position;
//rectMode(CENTER)
fill("red")
image(this.image,pos.x,pos.y,35,35);
imageMode(CENTER);
rotate(this.body.angle);
    }
}