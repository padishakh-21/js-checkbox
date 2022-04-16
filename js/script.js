var elCheckDiscipline = document.querySelector("#discipline");
var elCheckIelts = document.querySelector("#ielts");
var elCheckExperience = document.querySelector("#experience");

var elBtn = document.querySelector(".btn");
var elJob = document.querySelector(".job");
var message = "";

elBtn.addEventListener("click", function(e) {
    e.preventDefault();
    var discipline = elCheckDiscipline.checked;
    var ielts = elCheckIelts.checked;
    var experience = elCheckExperience.checked;


    if ((discipline && !ielts) || (discipline && experience && !ielts)) {
        message = "Ishga qabul qilindingiz.😉"
    } else {
        message = "Afsuski siz ishga qabul qilinmadingiz"
    }
    elJob.textContent = message
})