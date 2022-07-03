
const PI2 = Math.PI * 2

export class Shape {
  constructor(x, y, radius, sides, color, type) {
    this.x = x,
    this.y = y,
    this.radius = radius
    this.sides = sides
    this.color = color
    this.rorate = 0
    this.max = 20,
    this.cur = 0
    this.speed = 0.02
    this.type = type
  }

  animate(ctx) {
    ctx.save()
    ctx.fillStyle = this.color
    ctx.beginPath()

    const angle = PI2 / this.sides

    this.cur += this.speed
    this.facrWave = 0 + (Math.sin(this.cur) * this.max)

    ctx.translate(this.x, this.y + this.facrWave)

    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(angle * i)
      const y = this.radius * Math.sin(angle * i)

      i == 0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y)
    }




    ctx.fill()
    ctx.closePath()
    ctx.restore()
  }
}