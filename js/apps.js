function check() {

    var question1 =document.quiz.question1.value;
    var question2 =document.quiz.question2.value;
    var question3 =document.quiz.question3.value;
    // var question4 =document.quiz.question4.value;
    // var question5 =document.quiz.question5.value;
    // var question6 =document.quiz.question6.value;
    var correct= 0;

      if (question1 == " The Ravagers") {
        correct ++;
      }
      if (question2 == "Awesome Mix Vol.1") {
        correct++;
      }
        if (question3 == "Yandue") {
          correct++;
      }

  document.getElementById("once_checked").style.visibility = "visible";
  document.getElementById("number_correct").innerHTML = "You got " + correct + "correct.";
}
