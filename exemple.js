import { Reactor, computed } from './reactor.js';

const scores = new Reactor([]);

const highScore = computed(() => {
    let highestVal = 0;

    for (const score of scores.value) {
        if (score.value <= highestVal) continue;
        highestVal = score.value;
    }

    return highestVal;
});

highsScore.subscribe(num => console.log('high score: ' + num));
// high score: 0

scores.value = [new Reactor(0)];
// high score: 0

scores.value = [...scores.value, new Reactor(45)];
// high score: 45

scores.value = [...scores.value, new Reactor(26)];
// high score: 45

const firstScore = scores.value[0];
firstScore.value = 103;

/**
 * old way without computed
 */
// import { Reactor } from "./reactor.js";

// export const scores= new Reactor([]);
// export const highScore = new Reactor(0);

// function setHighScore(val){
//     if(typeof val !=="number"){
//         val = 0 // TODO test undefined return
//     }
//     let highestNum = val

//     for(const score of scores.value){
//         if(score.value <= highestNum) {
//             highestNum = score.value
//         }
//     }

//     highScore.value = highestNum;
// }

// export function addScore(num = 0) {
//     const score = new Reactor(num);
//     score.subscribe(setHighScore)
//     scores.value=[...scores.value,score];
// }

