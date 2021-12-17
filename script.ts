"use strict"

let canvas = <HTMLCanvasElement>document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
let pos = {
  x: 100,
  y: 100,
};
// let oh= prompt("Number of balls")
let numberOfBalls:number;
document.getElementById("save")?.addEventListener("click",startSim)
function startSim(){
    numberOfBalls=parseInt((<HTMLInputElement>document.getElementById("numBalls")).value)
    for (let index = 0; index < numberOfBalls; index++) {
        balls.push(new Ball(randomPos()));
        balls[index].drawBall();
      }
    cycle()

  }

canvas.style.backgroundColor="black"
class Ball {
  pos:any
  radius:number
  color:any
  dx:any
  dy:any
    constructor(pos:any) {
      this.pos = pos;
      this.radius = Math.floor(Math.random() * 25);
      this.color = randomColor();
      this.dx = Math.floor(Math.random() * 5 + 1);
      this.dy = -Math.floor(Math.random() * 5 + 1);
    }
  
    drawBall() {
      ctx!.beginPath();
      ctx!.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
      ctx!.fillStyle = this.color;
      ctx!.fill();
      ctx!.closePath();
    }
  
    updateBall() {
      if (
        this.pos.x + this.dx > canvas.width - this.radius ||
        this.pos.x + this.dx < this.radius
      ) {
        this.dx = -this.dx;
      }
      if (
        this.pos.y + this.dy > canvas.height - this.radius ||
        this.pos.y + this.dy < this.radius
      ) {
        this.dy = -this.dy;
      }
      this.pos.x += this.dx;
      this.pos.y += this.dy;
      ctx!.beginPath();
      ctx!.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
      ctx!.fillStyle = this.color;
      ctx!.fill();
    }
  }
  
  function randomColor() {
    const rc1 = Math.random() * 16777215;
    const rc2 = Math.floor(rc1);
    const rc3 = rc2.toString(16);
    return "#" + rc3;
  }
  
  function randomPos() {
    pos = {
      x: Math.floor(Math.random() * canvas.width),
      y: Math.floor(Math.random() * canvas.height),
    };
    return pos;
  }
  
  let balls:any = [];

    function cycle() {
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    for (let index = 0; index < numberOfBalls; index++) {
      balls[index].updateBall();
    }
    requestAnimationFrame(cycle)
  };
