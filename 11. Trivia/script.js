var theAnswer;
var currentQuestion;
var questions = [
  ['What colour is the sky?', 'Blue', 'Red', 'Orange', 1],
  ['What colour is the grass?', 'Orange', 'Yellow', 'Green', 3],
  ['What colour is the blood?', 'Purple', 'Red', 'Pink', 2],
  ['What colour is the smurf?', 'Blue', 'Orange', 'Red', 1],
  ['What colour is the soup?', 'Blue', 'White', 'Green', 3],
];
var correct = 0;
var wrong = 0;
function updateAnswer(num){
  theAnswer = num;
}
function trivia(){
  currentQuestion = 0;
  updateQuestion();
}
function nextQuestion(){
  tallyAnswer();
  currentQuestion++;
  if(currentQuestion == 5){
    document.getElementById("button").className = "btn btn-primary disabled";
  }
  if(currentQuestion < 5){
    updateQuestion();
  }
}
function updateQuestion(){
  document.getElementById("theForm").reset();
  document.getElementById("question").innerHTML = questions[currentQuestion][0];

  var answers = document.getElementsByClassName("answers");
  for(var i = 1; i < 4; i++){
    answers[i-1].innerHTML = questions[currentQuestion][i];
  }
}
function tallyAnswer(){
  if(theAnswer == questions[currentQuestion][4]){
    correct++;
  }else{
    wrong++;
  }
  document.getElementById("correct").innerHTML = ("Correct=" + correct);
  document.getElementById("wrong").innerHTML = ("Wrong=" + wrong);
}