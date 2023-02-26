import "./button.js"
import { score } from "./data.js"

const h1 = document.querySelector("h1.score");


score.subscribe(val =>{
    h1.textContent = `score ${val}`
})




