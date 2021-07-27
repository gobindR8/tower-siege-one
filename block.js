class block{
constructor(x,y,width,height){
var options={
friction:1,
density:0.5,
restitution:5
}
this.x=x
this.y=y
this.width=width
this.height=height

this.body=Bodies.rectangle(this.x,this.y,this.width,this.height)
this.image=loadImage("polygon.png")
World.add(world,this.body)
}
display(){
var pos=this.body.position
   rotate(angle)





push()
    translate(pos.x,pos.y,pos.width,pos.height)
     rotate(angle)
     image(CENTER)
     image(this.image,20,20,30,30)
     pop()








}









}