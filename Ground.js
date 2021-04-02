class Ground{
    //Properties
//to start a property-constructor
constructor(x,y){
var options= { isStatic:true}
this.body=Bodies.rectangle(x,y,800,30,options);
World.add(abworld,this.body);
}

    //functions

display(){
   rectMode(CENTER);
    var pos=this.body.position
    rect(pos.x,pos.y,800,30);
}
}