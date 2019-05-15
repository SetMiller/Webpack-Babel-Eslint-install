import 'babel-polyfill'
import Timer from './timer.js'

import {gen} from './generator.js'

window.onload = function(){
   const element = document.querySelector(".timer")
   let timer = new Timer(element, 200)
   console.log(timer)
   timer.start()

   // используем генератор
   let someGen = gen (1, 5)
   for(let value of someGen) {
      console.log(value)
   }
}