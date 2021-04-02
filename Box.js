class Box{
constructor(x,y,a,b){
   var boptions= {restitution:1};
    this.body=Bodies.rectangle(x,y,a,b,boptions);
    this.width=a;
    this.height=b;
    World.add(abworld,this.body);
}

display(){
    rectMode(CENTER);
    push();
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle);
    fill("red");
    rect(0,0,this.width,this.height);

    pop();
}

}
