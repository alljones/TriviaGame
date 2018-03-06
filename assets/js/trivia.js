
/*
TRIVIA LOGIC:
1. Click Start Button to Begin the Game
2. Display Timer & Questions
3. Set Timer to 30 seconds
*/


// List of 10 questions/choices/answers
var questions = [{
    "question": "What is the name of the championship trophy awarded to the winner of the NBA Finals?",
    "option1": "Larry O'Brien",
    "option2": "Larry Bird",
    "option3": "Larry Gold",
    "option4": "Walter O'Brien",
    "answer": "1",
},
{
    "question": "Which NBA player has won the most championship rings?",
    "option1": "Michael Jordan",
    "option2": "Robert Horry",
    "option3": "Bill Russel",
    "option4": "Sam Jones",
    "answer": "3",
},
{
    "question": "Who's the only collegian selected for the elite 'Dream Team' that dominated in the 1992 Olympics?",
    "option1": "Shaquille O'Neal",
    "option2": "Christian Laettner",
    "option3": "Chris Mullin",
    "option4": "Chris Webber",
    "answer": "2",
},
{
    "question": "Who is the NBA's all-time leader in points scored?",
    "option1": "Michael Jordan",
    "option2": "Wilt Chamberlain",
    "option3": "Moses Malone",
    "option4": "Kareem Abdul-Jabbar",
    "answer": "1",
},
{
    "question": "Nicknamed 'The Worm,' this player is known for his fierce defense and rebounding skills:",
    "option1": "Anthony Mason",
    "option2": "Dennis Rodman",
    "option3": "Charles Oakley",
    "option4": "John Salley",
    "answer": "2",
},
{
    "question": "Which team won the NBA championship during the two seasons Jordan was temporarily retired for the first time?",
    "option1": "Utah Jazz",
    "option2": "Detroit Pistons",
    "option3": "Los Angles Lakers",
    "option4": "Houston Rockets",
    "answer": "4",
},
{
    "question": "Which NBA team has won the most championships ever?",
    "option1": "Boston Celtics",
    "option2": "Detriot Pistons",
    "option3": "Chicago Bulls",
    "option4": "Los Angles Lakers",
    "answer": "1",
},
{
    "question": "Which player was the only one voted Most Valuable Player in both the ABA and the NBA?",
    "option1": "Moses Malone",
    "option2": "Juluis Erving",
    "option3": "Bill Russel",
    "option4": "Magic Johnson",
    "answer": "2",
},
{
    "question": "This athlete played for thirteen seasons with Boston Celtics and then served as head coach of the Indiana Pacers:",
    "option1": "Pat Riley",
    "option2": "Kevin McHale",
    "option3": "Larry Bird",
    "option4": "Robert Parish",
    "answer": "3",
},
{
    "question": "Shaquille O'Neal has won four NBA championships, three times with the LA Lakers and one time with ____?",
    "option1": "Boston Celtics",
    "option2": "Cleveland Cavs",
    "option3": "Orlando Magic",
    "option4": "Miami Heat",
    "answer": "4",
}]


var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length; //Total Question Count

var container = $("#quizContainer");
var question = $("#question");
var opt1 = $("#opt1");
var opt2 = $("#opt2");
var opt3 = $("#opt3");
var opt4 = $("#opt4");
var nextBtn = $("#nextButton");
var resultCtn = $("#result");


//Load and display questions & choices to the page
function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    question.text(q.question);
    opt1.text(q.option1);
    opt2.text(q.option2);
    opt3.text(q.option3);
    opt4.text(q.option4);
};


function loadNextQuestion(){
    //Checking selected option chosen
    var selectedOption = $('input[type=radio]').is(':checked');
    //If no selection is made, alert user to make a choice
    if(!selectedOption){
        alert("Please select your answer");
        return;
    }
    //Check selected with the correct answer
    var answer = $('input[name="option"]:checked').val();
    console.log(answer)
    //if correct add a point to the score
    if(questions[currentQuestion].answer == answer) {
        score++
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextBtn.text('FINISH');
    }

    if(currentQuestion == totQuestions) {
        container.style.display = 'none';
        resultCtn.style.display = '';
        resultCtn.text('Your Score: ' + score);
        return;
    }

    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

nextBtn.on('click', function(){
    console.log("Click");
    loadNextQuestion(currentQuestion)
});

