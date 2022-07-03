
import { Shape } from './shapes.js'

class App extends HTMLElement {
  connectedCallback() {

    this.innerHTML = 
    `
      <canvas id="canvas"></canvas>
    `

  }
}

class AppRender {
  constructor() {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1

    console.log(window.devicePixelRatio);

    window.addEventListener('resize', this.resize.bind(this), false)
    this.resize()
    this.init()

    window.requestAnimationFrame(this.animate.bind(this))
  }
  init () {
  }
  resize() {
    this.stageWidth = document.body.clientWidth
    this.stageHeight = document.body.clientHeight


    this.canvas.width = this.stageWidth * this.pixelRatio
    this.canvas.height = this.stageHeight * this.pixelRatio
    this.ctx.scale(this.pixelRatio, this.pixelRatio)

    this.face = new Shape(
      this.stageWidth / 2, // 가로 정렬
      this.stageHeight / 2, // 세로 정렬
      this.stageHeight / 5, // 도형 크기
      60, // 변의 갯수,
      '#332FF5', // 색
      'face' // type
    )

    console.log(this.face);

    this.leftEye = new Shape(
      this.face.x - this.face.radius/3, // 가로 정렬
      this.face.y - this.face.radius/5, // 세로 정렬
      this.face.y / 16, // 도형 크기
      60, // 변의 갯수,
      '#F16363' // 색
    )
    this.rightEye = new Shape(
      this.face.x + this.face.radius/3, // 가로 정렬
      this.face.y - this.face.radius/5, // 세로 정렬
      this.face.y / 16, // 도형 크기
      60, // 변의 갯수,
      '#D1E16F' // 색
    )
  }

  animate () {
    window.requestAnimationFrame(this.animate.bind(this))
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

    this.face.animate(this.ctx)
    this.leftEye.animate(this.ctx)
    this.rightEye.animate(this.ctx)
  }
}

window.onload = () => {
  new AppRender()
}


customElements.define('kbb-app', App)