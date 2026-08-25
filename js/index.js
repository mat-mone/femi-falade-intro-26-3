// adding content to footer
let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");
let copyright = document.createElement("p");

copyright.innerHTML = `&copy ${thisYear} Femi Falade`;
footer.appendChild(copyright);

// creating list of skills
let skills = ["Javascript", "HTML", "CSS", "GitHub", "SQL", "Tableau", "Tableau Prep" ,"Salesforce" , "Microsoft Excel", "Jira", "Confluence", "LucidChart", "UAT"];

let skillsList = document.querySelector("#Skills ul");

for(let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");

    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}
