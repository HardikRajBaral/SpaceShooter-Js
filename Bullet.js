class Bullet{
    constructor(x,y){
        this.size={
            width:5,
            height:10
        }
        this.position={
            x,
            y
        }
        this.speed={
            x:1,
            y:3
        }
        this.direction={
            x:1,
            y:-1
        }
        this.color="red"
        this.audio=new Audio('./audio/bullet-gunshot-impact-390253.ogg')
        
        
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
        ctx.fillStyle=this.color
        ctx.fillRect(this.position.x,this.position.y,this.size.width,this.size.height)
        ctx.closePath()
        

        
    }
    update(){
        this.position.y+=this.speed.y*this.direction.y

    }

    bulletSound(){

    }

}

export default Bullet