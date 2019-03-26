function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;

    var i = 0;
// questions and answers//
      if (question1 === "The Ravagers") {
        i += 1;
      }
      if (question2 === "Awesome Mix Vol.1") {
        i += 1;
      }
        if (question3 === "Yandue") {
          i += 1;
      }
      if (question4 ==="Rocket") {
        i += 1 ;
    }
    if (question5 === "Raccoon"){
        i += 1;
    }
    // message alert [0,2,1] and if then statement, if variable i is less than or
  // equal to the alert You know nothing will appear and so forth..//
    var messages = [ "You Rocked It!", "I've seen worse", "It gets better"];
    var range;
// this was really confusing but made sense eventually,after I will add more questions//
    if ( i <= 1) {
        range = 2;
      }
      if (i > 1 && i <=4) {
        range = 1;
      }
      if (i> 4) {
        range = 0;
      }


// Document method- once_checked(clicked by user) the box with numbers correct
// will appear as well as the
// message and specific message in the array will be called and displayed in the
// p id div-below quiz with a message from the variable messages array box based on its range

    document.getElementById('once_checked').style.visibility = "visible";

    document.getElementById("messages").innerHTML = messages[range];

    document.getElementById("number_correct").innerHTML = "You got " +  i  + " correct.";
  }
