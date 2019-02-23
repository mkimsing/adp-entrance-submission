function setCookie(quizNum, score, questionNum){
  document.cookie = "quiz=" + quizNum;
  document.cookie = "score=" + score;
  document.cookie = "question=" + questionNum;
}

function clearCookie(){
  document.cookie = 'quiz=; score=; question=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
}