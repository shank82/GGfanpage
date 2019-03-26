function check() {

  let question1 = document.querySelector('input[name="question1"]:checked');
  let question2 = document.querySelector('input[name="question2"]:checked');
  let question3 = document.querySelector('input[name="question3"]:checked');
  let question4 = document.querySelector('input[name="question4"]:checked');
  let question5 = document.querySelector('input[name="question5"]:checked');

  let correct = 0;
  if (question1 && question1.value === "The Ravagers") {
    correct++;
  }
  if (question2 && question2.value === "Awesome Mix Vol.1") {
    correct++;
  }
  if (question3 && question3.value === "Yandue") {
    correct++;
  }
  if (question4 && question4.value === "Rocket") {
    correct++;
  }
  if (question5 && question5.value === "Rocket") {
    correct++;
  }

  let message = [
    'Oops,',
    'Hey, I\'ve seen worse.',
    'Not too shabby.',
    'We can\'t all be Superfans',
    'You Rocked it!',
    'Super Fan!!'];

  document.getElementById('once_checked').style.visibility = "visible";

  document.getElementById("message").innerHTML= message[correct];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
