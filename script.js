/******************************** LOAD PROJECTS *******************************/
const projectsContainer = document.querySelector(".projects-container");

projects.forEach(project => {
        projectsContainer.innerHTML += 
                `
                <div class="project">
                    <img class="icon" src="${project.icon}">   
                    <div class="project-img"><img src=${project.image}></div>

                    <div class="project-info">
                        <div class="project-name">${project.projectName}<span class="additional-info">${project.additionalInfo}</span>
                        <div class="project-stack">${project.stack}</div>
                        <div class="project-links">
                            <a target="_blank" href="${project.demo}">Demo</a>
                            <a target="_blank" href="${project.github}">Github</a>
                        </div>
                    </div>
                </div>
                `
    })

/************************* Script for email tooltip ****************************/
const email_button = document.querySelector(".email");

email_button.addEventListener("click", () => {
    navigator.clipboard.writeText("sue.su.0526@gmail.com");

    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + "sue.su.0526@gmail.com";
})

email_button.addEventListener("mouseout", () => {
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy Email";
})