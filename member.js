function skillsMember() {
    var member = document.getElementById("member").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/skills", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var member = response.member;
            var skill = response.skill;
            var skillList = document.getElementById("skillList");
            var newSkill = document.createElement("li");
            newSkill.textContent = member + " : " + skill;
            skillList.appendChild(newSkill);
        }
    };
    xhr.send(JSON.stringify({member: member}));
}