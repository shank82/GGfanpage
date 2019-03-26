function check() {
// my questions are being selected based on what is in the () using the querySelector by scanning the entire document
  let question1 = document.querySelector('input[name="question1"]:checked');
  let question2 = document.querySelector('input[name="question2"]:checked');
  let question3 = document.querySelector('input[name="question3"]:checked');
  let question4 = document.querySelector('input[name="question4"]:checked');
  let question5 = document.querySelector('input[name="question5"]:checked');

// starting with 0 , for every correct answer 1 will be added, if 1 is to be added question1 the value of question1 have to equal what is quoted on the Side
// of the ===, Lots of building blocks for this quiz form

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
  if (question5 && question5.value === "Raccoon") {
    correct++;
  }
// These are the responses to once the button is clicked depending on how many answers are correct, will determine which message will appear from
// the array 0,1,2,3,4,5
  let message = [
    'Oops,',
    'Hey, I\'ve seen worse.',
    'Not too shabby.',
    'We can\'t all be Superfans',
    'You Rocked it!',
    'Super Fan!!'];
// this is looking through the document for an id withing the () once it finds it, it will perform the function on the other side of the
// === so, message is found in my HTML document above based on the amount of correct answers, the messsages are in the array are going to
// display so if a user gets 3 correct they will recieve the message in slot [2]- Not too shabby. The user will also see how many they
// correctly answered.
  document.getElementById('once_checked').style.visibility = "visible";

  document.getElementById("message").innerHTML= message[correct];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
