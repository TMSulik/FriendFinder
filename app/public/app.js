var surveyItems = [
  "I would enjoy going on crazy thrill rides at an amusement park.",
  "When faced with important decisions, I rely on logic and strategizing more than gut instincts or intuitions.",
  "I find it easy to stay calm and focused even in an emergency.",
  "I rarely worry about things that I have no control over.",
  "I can remain cool and composed when interacting with angry people.",
  "Astrological signs are informative in making romantic matches.",
  "I am careful with money, even to the point that some might consider me stingy.",
  "My physical attractiveness is above average.",
  "I’m a picky eater and prefer to avoid strange or exotic foods.",
  "I enjoy reading books, and would read more if I had the time."
];

var scale = [
  "Strongly disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly agree"
];

function presentQuestions() {
  for(var i = 0; i < surveyItems.length; i++) {
    $(".questions-view").append("<h4 class='statement'>Question " + (i + 1) + "</h4>");
    $(".questions-view").append("<label class='statement'>" + surveyItems[i] + "</label>");
    var likertScale = renderLikertScale(i + 1);
    $(".questions-view").append(likertScale); 
  }
}

function renderLikertScale(question_number) {
  var result = "<ul class='likert'>";
  for(var i = 0; i < scale.length; i++) {
    result += "<li><input type='radio' name='likert' value='q" + question_number + " a" + (i + 1) + "'><label>" + scale[i] + "</label></li>";
  }
  return result += "</ul>";
}

$(document).ready(function(){
  presentQuestions();
});

