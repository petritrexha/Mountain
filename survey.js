function submitSurvey() {
  // Check if any question is unanswered
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

  // Show thank-you message
  alert("Thank you for completing the survey!");

  // Optionally, you can reset the form or perform other actions here

  // Hide the survey container
  document.getElementById("survey-container").style.display = "none";
}
 localStorage.setItem("surveyCompleted", "true");

// Redirect to index.html
window.location.href = "index.html";
