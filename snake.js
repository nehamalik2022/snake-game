const gameContainer = document.getElementById('gameContainer');
const scoreBoard = document.getElementById('pointsEarned');
const GRID_SIZE = 1600;
const RENDER_INTERVAL = 100;
const GAME_ROW = 40;
let gameScore = 0;
let snakeBody = [800];
let gameOver = false;
let gameInterval;
let inputDirection = -1;
let gamePaused = false;
let foodPosition = 780;

//creating main functionality
const createBoxes = (total) => {
     for (let i = 1; i <= total; i++) {
          let box = document.createElement('div');
          if (i == foodPosition)
               box.setAttribute('class', 'food');
          box.setAttribute('id', `pixel${i}`);
          gameContainer.appendChild(box);
     }
    }