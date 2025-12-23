class Enemy{
 
    constructor(width){
        this.direction={
            x:1,
            y:1
        }
        this.position={
            x:Math.floor(Math.random()*width-100+50),
            y:0
            
        }
        this.speed={
            x:1,
            y:1
        }
        this.direction={
            x:1,
            y:1
        }
        this.size={
            width:50,
            height:50
        }
        this.image=new Image()
        this.image.src="./pics/enemy.png"
        this.audio=new Audio('./audio/animated-cartoon-explosion-impact-352744.ogg')

        
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
    draw(ctx){
        ctx.beginPath()
        ctx.drawImage(this.image,0,0,326,388,this.position.x,this.position.y,this.size.width,this.size.height)
        

    }
    update(){     
        this.position.y+=this.speed.x*this.direction.y
    }
   
   




}



export default Enemy