function clearCookie(){
  document.cookie = 'quiz=; score=; question=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
}

function readCookie(itemToRead){
  var textLen;
  var itemNum;
  switch(itemToRead){
    case "quiz":
      textLen = "quiz=".length;
      itemNum = 0;
      break;
    case "score":
      textLen = " score=".length;
      itemNum = 1;
      break;
    case "question":
      textLen = " question=".length;
      itemNum = 2;
      break;
    default:
      textLen = 5;
      itemNum = 0;
  }
  var cookieItems = document.cookie.split(";");
  return cookieItems[itemNum].substring(textLen, cookieItems[itemNum].length);
}

function returnToWelcome(){
  location.href = "quiz-welcome.html";
}

function getQuizName(){
  var quizTitle;
  switch(quizNum){
    case 0:
      quizTitle = "Abstract Quiz";
      break;
    case 1:
      quizTitle = "Developer Quiz";
      break;
    default:
      quizTitle= "";
  }
  return quizTitle;
}

//GLOBAL VARIABLES
var quizNum = Number(readCookie("quiz"));
var questionNum = Number(readCookie("question"));
var quizName = getQuizName();