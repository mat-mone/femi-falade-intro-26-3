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

// create variable to select the form by its name attribute
const messageForm = document.forms["leave_message"];

// handle form submissions: prevent page from reloading every time, also retrieve and log input values from form fields
messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = event.target.usersName.value;
    let email = event.target.usersEmail.value;
    let message = event.target.usersMessage.value;

    console.log(name, email, message);

    // build the message entry and locate the list it belongs to
    let messageSection = document.querySelector("#messages");
    let messageList = messageSection.querySelector("ul");

    let newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
                            <span>${message}</span>`;
    
    // create and attach a remove button to delete the message entry
    let removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function () {
        let entry = removeButton.parentNode;
        entry.remove();
    });
    
    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    // reset form for next submission
    messageForm.reset();
});

// API fetch
const projectSection = document.getElementById("Projects")
const projectList = projectSection.querySelector("ul");


fetch("https://api.github.com/users/mat-mone/repos")
    .then(response => response.json())
    .then(function(repositories) {
        for(let i = 0; i < repositories.length; i++) {
            const project = document.createElement("li");
            project.textContent = repositories[i].name;
            projectList.appendChild(project);
        }
        console.log(repositories)
    })
    .catch(error => console.error("Error:", error))