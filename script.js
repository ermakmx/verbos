const showVerb = document.getElementById('showVerb');
const showImage = document.getElementById('showImage');
const showAudio = document.getElementById('showAudio');
const firstVerb = document.getElementById('firstVerb');
const secondVerb = document.getElementById('secondVerb');
const thirdVerb = document.getElementById('thidVerb');
const fourthVerb = document.getElementById('fourthVerb');
//const next = document.getElementById('next'); 
const verbsCounter = document.getElementById('verbsCounter');
const allRightCounter = document.getElementById('allRightCounter');
const verbsContainer = document.getElementById('verbsContainer');
const numberOfVerbs = verbs.length

let answerRoullete = [0,1,1,1];
let everyNumberOfVerb = [];
let rightAnswer;
let allRightAnswers;

next.addEventListener('click', function(){
    next.style.display ='none'; 
});

showVerb.innerHTML = 'Inserta coin';

makeRandomList();

let lastPosition = everyNumberOfVerb = length-1;

function makeRandomList(){
    for(var i=0; i <numberOfVerbs;i++){
        everyNumberOfVerb.push(i);
    }
    everyNumberOfVerb = everyNumberOfVerb.sort(()=>Math.random()-0.5);
}

function buttonEffect(itsRigth, button){
    if(itsRigth){
        button.classList.add('rigthAnswer')
        setTimeout(function(){
            button.classList.remove('rightAnswer');
        },1000);
        rightAnswerCounter = rightAnswerCounter + 1;
    }else{
        button.classList.add('wrongAnswer');
        setTimeout(function(){
            button.classList.remove('wrongAnswer');
        },1000);
    }
    setTimeout(function(){
        ponerVerbo()
    },1000);
}

first.addEventListener('click', function(){
    buttonEffect(isItRigth_(first.innerHTML), this);
});
second.addEventListener('click', function(){
    buttonEffect(isItRigth_(second.innerHTML), this);
});
third.addEventListener('click', function(){
    buttonEffect(isItRigth_(third.innerHTML), this);
});
fourth.addEventListener('click', function(){
    buttonEffect(isItRigth_(fourth.innerHTML), this);
});

function shuffleAnswers(array){
    let numberOfVerbsButtons = array.length;
    let randomIndex;

    while(numberOfAnswerButtons != 0){
        randomIndex = Math.floor(Math.random()*numberOfAnswerButtons);
        numberOfAnswerButtons--;
        [array[numberOfAnswerButtons], array[randomIndex]] = [array[randomIndex], array[numberOfVerbsButtons]];
        }
        return array;


}

function isItRigth_(answer){
    return answer == rightAnswer?true:false;
}
function randomVerbo (noThisOne){
    theOne = Math.floor(Math.random()*verbsContainer.length)
    return theOne = noThisOne?randomVerbo(noThisOne):theOne;
}

function ponerVerbo(){

    answerRoullete = shuffleAnswers(answerRoullete);
    let randomPosition = everyNumberOfVerb(lastPosition);
    let imgTest = "<img src= 'img/'"+verbs[randomPosition]+".jpg' height = '140px' width='160px'>";


    first.classList.add("btn", "btn-outline-primary", "btn-md");
    second.classList.add("btn", "btn-outline-primary", "btn-md");
    third.classList.add("btn", "btn-outline-primary", "btn-md");
    fourth.classList.add("btn", "btn-outline-primary", "btn-md");

    if (lastPosition >=0) {
        var just_position = lastPosition +1;
        verbsCounter.innerHTML = ''+just_position+' / '+ numberOfVerbs;
        allRightCounter.innerHTML = "Right Answers: "+rightAnswerCounter;

        showVerb.innerHTML = verbs[randomPosition];
        showAudio.src = "audio/"+verbs[randomPosition]+".mp3";
        showAudio.onplay();
        first.innerHTML = !answerRoullete[0]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
        second.innerHTML = !answerRoullete[0]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
        third.innerHTML = !answerRoullete[0]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];
        fourth.innerHTML = !answerRoullete[0]?verbos[randomPosition]:verbos[randomVerbo(randomPosition)];

        rightAnswer = verbos[randomPosition];
        lastPosition = lastPosition-1;

        
    }else{
        verbsCounter.innerHTML = "0 / "+numberOfVerbs;
        allRightAnswers.innerHTML = "Right Answers: "+rightAnswerCounter;
        showVerb.innerHTML = "thank you!";
        verbsContainer.innerHTML = "";
    }

}


