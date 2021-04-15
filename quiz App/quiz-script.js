const startButton = document.getElementById('play');
const nextButton = document.getElementById('next-btn')
const restartButton = document.getElementById('restart-btn')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer')
const startElement = document.getElementById('start-page')
const gameElement = document.getElementById('play-game')
const endElement = document.getElementById('game-end')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
    startElement.classList.add('hide')
    gameElement.classList.remove('hide')
    generateQuestion()
}

function generateQuestion(){
    nextButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.floor(Math.random()-0.5)) /*using Array.sort to generate a sorted array each time*/
    currentQuestionIndex = 0
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}

// function resetGame(){
//     clearStatusClass(document.body)
    
//     while(answerButtonsElement.firstChild){ /*If there is a child in the answer button we remove it */
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     }
// }
function showQuestion(question){
    questionElement.innerHTML= question.question;
    question.answers.forEach(answer => {
        const newButton = document.createElement('button') /*create a new button elements for the answers*/
        newButton.classList.add('btn')
        newButton.innerHTML = answer.text
        if(answer.correct){
            newButton.dataset.correct = answer.correct /*check if the answer is right or wrong */
        }
        answerButtonsElement.appendChild(newButton)
        newButton.addEventListener('click', checkAnswer)
    })
}

function checkAnswer(ans){
    const selectedButton = ans.target;
    const answer = selectedButton.dataset.correct /*Chechinkg if the answer is right or wrong using data attributes*/
    if (answer && shuffledQuestions.length > currentQuestionIndex + 1){/*Chech if the answer is correct or wrong and if there are still questions unanswered*/
        selectedButton.classList.add('correct')
        setTimeout(nextquestion, 1500)
    } else if (!answer) {
        selectedButton.classList.add('wrong')
        //Looping through the answers button

        Array.from(answerButtonsElement.children).forEach(button =>{
            setStatusClass(button, button.dataset.correct)
        })
        setTimeout(gameOver, 1500)
    }
    else {
        selectedButton.classList.add('correct')
        setTimeout(gameOver, 1500)
    }
}

function setStatusClass(element, correct){
    // clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } 
}


function nextquestion(){
    currentQuestionIndex++
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function resetState(){
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function gameOver(){
    gameElement.classList.add('hide')
    endElement.classList.remove('hide')
}

restartButton.addEventListener('click', restartGame)

function restartGame(){
    resetState()
    startGame()
}


const questions = [
    {
        question: 'What is 2 + 2?',
        answers:[
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    },
    {
        question: 'Is Web Development Fun?',
        answers:[
            {text: 'Kinda', correct: false},
            {text: 'Yes', correct: true},
            {text: 'Um no', correct: false},
            {text: 'IDK', correct: false}
        ]
    },
    {
        question: 'Where is Sapele?',
        answers:[
            {text: 'UK', correct: false},
            {text: 'Nigeria', correct: true},
            {text: 'Canada', correct: false},
            {text: 'USA', correct: false}
        ]
    }
]