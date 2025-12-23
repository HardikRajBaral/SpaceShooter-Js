import Bullet from "./Bullet.js"

class Player{
    constructor(canvas){
        this.hp=3
        this.direction={
            x:1,
            y:1
        }
        this.position={
            x:canvas.width/2,
            y:canvas.height-100
        }
        this.speed={
            x:5,
            y:5
        }
        this.size={
            width:50,
            height:50
        }
        this.direction={
            x:1,
            y:1
        }
        this.image=new Image()
        this.image.src="./pics/ship.png"

        this.checkdown=this.checkdown.bind(this)
        this.checkup=this.checkup.bind(this)
        document.addEventListener('keydown',this.checkdown)
        document.addEventListener('keyup',this.checkup)
        
        this.key={
            w:false,
            a:false,
            s:false,
            d:false
        }
        
    }

     get left(){
        return this.position.x
    }
    get right(){
        return this.position.x+this.size.width
    }
    get top(){
        return this.position.y
    }
    get bottom(){
        return this.position.y+this.size.height
    }
    checkdown(event){
       if(event.key=="w"){
        this.key.w=true
       }
       if(event.key=="a"){
        this.key.a=true
       }
       if(event.key=="s"){
        this.key.s=true
       }
       if(event.key=="d"){
        this.key.d=true
       }
        
    }
    checkup(event){
         if(event.key=="w"){
        this.key.w=false
       }
       if(event.key=="a"){
        this.key.a=false
       }
       if(event.key=="s"){
        this.key.s=false
       }
       if(event.key=="d"){
        this.key.d=false
       }     
    }
    




    draw(ctx){
        ctx.beginPath()
        ctx.drawImage(this.image,0,0,188,177,this.position.x,this.position.y,this.size.width,this.size.height)
      
    }
    update(ctx){
        
        if(this.key.w){
            this.position.y-=this.speed.y
        }


        if(this.key.a){
            this.position.x-=this.speed.x
        }


        if(this.key.s){
            this.position.y+=this.speed.y
        }


        if(this.key.d){
            this.position.x+=this.speed.x
        }


        if(this.hp==0){
            
            this.speed.x=0
            this.speed.y=0
            if(this.hp==0){
            ctx.beginPath()
            ctx.fillStyle="red"
            ctx.font = "80px serif"
            ctx.fillText("You Loose",canvas.width/2-150,canvas.height/2)
        }
        }
    }

}

export default Player