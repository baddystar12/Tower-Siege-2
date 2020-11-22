class Box  {
    constructor(x, y, width, height){
      var box_options ={
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,width,height,box_options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill("magenta");
        rect(position.x, position.y, this.width, this.height);
       
        if(this.body.speed<3){
           this.display();
       }
       else{
           World.remove(world, this.body);
           push();
           this.visibility = this.visibility-5;
           tint(255, this.visibility);
           pop();
       }
        
    }
  }
  