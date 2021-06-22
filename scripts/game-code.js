//  create and assign game elements
const gameElements = {
    gameWrapper: document.querySelector('.game-wrapper'),
    gameButtons: Array.from(document.querySelector('.game-wrapper').children),
    gameScore: document.querySelector('.scoreboard__box-score'),
    resultWrapper: document.querySelector('.reuslt-wrapper'),
    gameResult: document.querySelector('.game-result'),
    playerSelectionBtn: document.querySelector('.player-selection'),
    houseSelectionBtn: document.querySelector('.house-selection'),
    resultBox: document.querySelector('.result-box'),
    playAgain: document.querySelector('.btn-play-again'),
    loadingDot: document.querySelector('.loading-dot'),
    gameReset: document.querySelector('.btn-reset')
};

let houseSelection, playerSelection;
let result = false;

//  preserve the score on page refresh 
let score = localStorage.getItem('score') ? (JSON.parse(localStorage.getItem('score'))) : 0;
console.log('score: ', score); // for testing and debugging
gameElements.gameScore.textContent = score;

