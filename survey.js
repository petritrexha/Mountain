function submitSurvey() {
  if (sessionStorage.getItem("surveyCompleted") === "true") {
    alert("You have already completed the survey.");
    return;
  }

 
  var q1 = document.querySelector('input[name="q1"]:checked');
  var q2 = document.querySelector('input[name="q2"]:checked');
  var q3 = document.getElementById("q3").value;
  var q4 = document.querySelector('input[name="q4"]:checked');
  var q5 = document.querySelector('input[name="q5"]:checked');
  var q6 = document.querySelector('input[name="q6"]:checked');

  if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6) {
    alert("Please answer all the questions before submitting.");
    return;
  }

  alert("Thank you for completing the survey!");

  


  sessionStorage.setItem("surveyCompleted", "true");

 
  window.location.href = "index.html";
}
