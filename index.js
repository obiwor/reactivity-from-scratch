
import { score } from "./data.js"
import { Reactor } from "./reactor.js";
import {create, get} from "./framework.js"

const num1 = new Reactor(0);

const inputOptions = {
    rejectOn : isNaN, 
    mutator : Number
}


const input1 = create("input").bind('value', num1, inputOptions)
const h1 = create("h1").bind('textContent', num1)

score.subscribe(val =>{
    h1.textContent = `score ${val}`
})


get('body')
.append(input1)
.append(h1)


