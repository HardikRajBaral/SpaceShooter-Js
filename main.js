import Player from "./Player.js"
import Bullet from "./Bullet.js"
import Enemy from "./Enemy.js"

const canvas=document.getElementById("canvas")
canvas.width=window.innerWidth
canvas.height=window.innerHeight
const ctx=canvas.getContext('2d')

const DIRECTIONS=[1,-1]
const bullets=[]

const player=new Player(canvas)
const enemys=[]


setInterval(function(){
    enemys.push(new Enemy(canvas.width))
},2000)


canvas.addEventListener('click',function(){
    const bullet=new Bullet(player.position.x+(player.size.width/2-3),player.position.y-15)
    bullets.push(bullet)
    bullet.audio.play()
})


function gameLoop(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    requestAnimationFrame(gameLoop)

    player.draw(ctx)
    player.update(ctx,canvas)

   for(let i=0;i<enemys.length;i++){
    enemys[i].draw(ctx)
    enemys[i].update()
   }
   

   for(let i=0;i<enemys.length;i++){
        for(let j=0;j<bullets.length;j++){
            let box1=enemys[i]
            let box2=bullets[j]
            if(box1.top<box2.bottom && box1.bottom>box2.top && box1.left<box2.right && box1.right>box2.left){
                enemys[i].audio.play()
                enemys.splice(i,1)
                bullets.splice(j,1)
                
            }
        }
   }

   for(let i=0;i<enemys.length;i++){
    if (enemys[i].bottom>=canvas.height){
        player.hp-=5
        enemys.splice(i,1)
    }
    if(player.top<enemys[i].bottom && player.bottom>enemys[i].top && player.left<enemys[i].right && player.right>enemys[i].left){
        player.hp-=5 
        enemys[i].audio.play()
        enemys.splice(i,1)
        
    }
   }



   
    for(let i=0;i<bullets.length;i++){
        bullets[i].update()
        bullets[i].draw(ctx)
    }   
}
gameLoop()




 


