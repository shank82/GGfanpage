function check() {

    var question1 =document.quiz.question1.TheRavagers;
    var question2 =document.quiz.question2.value;
    var question3 =document.quiz.question3.value;
    var question4 =document.quiz.question4.value;
    // var question5 =document.quiz.question5.value;
    // var question6 =document.quiz.question6.value;
    var correct= 0;

      if (question1 == "The Ravagers") {
        correct++;
      }
    //   if (question2 == "Awesome Mix Vol.1") {
    //     correct++;
    //   }
    //     if (question3 == "Yandue") {
    //       correct++;
    //   }
    //   if (question4 == "Rocket") {
    //     correct++;
    // }

      var message = ['You Rocked it '];
      var score;
      if (correct == 4) {
        score = 4;
      }
      if (correct > 2 && correct > 4) {
        score = 3;
      }
      if (correct > 1 && correct < 3 ) {
        score = 2;
      }
      if (correct == 1) {
          score = 1;
      }

      if (correct == 0 ) {
          score = 0;
      }



  document.getElementById('once_checked').style.visibility = "visible";


  document.getElementById("message").innerHTML = message[score];
  document.getElementById("number_correct").innerHTML = "You got " + score + "correct.";
}
