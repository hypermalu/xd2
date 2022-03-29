class Slingshot{

constructor(bodyA,pointB){

var options = {
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    lenght:10
}
this.slingshot1=loadImage("spites/sling1.png")
this.slingshot2=loadImage("spites/sling2.png")
this.slingshot3=loadImage("spites/sling3.png")
this.pointB=pointB
this.slingshot=Constraint.create(options);
World.add(world,this.slingshot)
}
fly(){
    this.slingshot.bodyA=null
}
display(){
    image(this.slingshot1,200,20);
    image(this.slingshot2,170,20);

    if(this.slingshot.bodyA){
    var pointA=this.slingshot.bodyA.position;
    var pointB=this.pointB;
    push();

    stroke(44,22,8);
    if(pointA.x<220){
        strokeWeight(7);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
        image(this.slingshot3,pointA.x-30,pointA.y-10,15,30);
    }else{
        strokeWeight(3);
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
        image(this.slingshot3,pointA.x+25,pointA.y-10,15,30)
    }
        pop();

}
}
}
