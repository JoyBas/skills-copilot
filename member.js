function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("memberSkills");
  var memberView = document.getElementById("memberView");

  member.addEventListener("click", function() {
    memberSkills.style.display = "block";
    memberView.style.display = "none";
  });
}