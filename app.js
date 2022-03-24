const mole = document.querySelector('.mole');
const squares = document.querySelectorAll('.square');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const replay = document.querySelector('#play');
const starter = document.querySelector('#start');

const moleStart = squares[4].classList.add('mole');
let result = 0;
let hitPosition;
let currentTime = 30;
let timerId = null;


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
};

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++;
            score.innerHTML = result
            hitPosition = null
        }
    })
});


function moveMole() {
    starter.addEventListener('click', () => {
        if (true) {
            countDownTimerId = setInterval(countDown, 1000)
            timerId = setInterval(randomSquare, 700)
            starter.style.visibility = 'hidden';   
        } 
    })
};

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    
    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert(`GAME OVER! Your final score is ${result}`)
        replay.style.display = 'initial'
        starter.style.display = 'none'
    }
    
    replay.addEventListener('click', () => {
        if (currentTime === 0 && result >= 0) {
            document.location.reload()
        }
    })
};


