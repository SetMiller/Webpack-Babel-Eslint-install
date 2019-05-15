export default class Timer {
   constructor(el, time) {
      this.el = el;
      this.time = time;
      this.interval;
      this.render()
   }
   start = () => {
      this.interval = window.setInterval(() => {
         this.tick()
      }, 1000)
   }
   stop(){
      window.clearInterval(this.interval)
   }
   render(){
      this.el.innerHTML = this.time
   }
   tick(){
      this.time--
      this.render()
      if (this.time <= 0) {
         this.stop()
      }
   }
}