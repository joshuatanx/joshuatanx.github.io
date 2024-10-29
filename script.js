function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const options = {
    root: document.getElementById("heading__profession-list"),
    rootMargin: "0px",
    threshold: 1.0,
};

const observer = new IntersectionObserver(handleIntersection, options);

const profession = document.getElementById("profession");
const professions = {
    text: ["a university student",
        "a wannabe software engineer",
        "studying math and CS for AI",
        "a guitarist",
        "learning web development",
        "a music producer",
        "an occasional fashion designer",
        "an aspiring game developer"],
    counter: 0,
    cooldown: 30
};

const array = ["hi", "helo"];

const pastProjectsSection = document.getElementById("section__past-projects");
const pastProjects = Array.from(document.getElementsByClassName("project wrapper"));

document.addEventListener("mousemove", (event) => {
    /* console.log(event.clientX, event.clientY); */
    pastProjects.forEach((element) => {
        const box = element.getBoundingClientRect();
        const x = event.clientX - box.left;
        const y = event.clientY - box.top;

        element.style.setProperty("--opacity__blob", "1");
        element.style.setProperty("--x__cursor", x + "px");
        element.style.setProperty("--y__cursor", y + "px");
        console.log(element);
    });
    
});


pastProjectsSection.addEventListener("mousemove", (event) => {
        /* const box = event.target.getBoundingClientRect();
        const x = event.clientX - box.left;
        const y = event.clientY - box.top;

        event.target.style.setProperty("--opacity__blob", "1");
        event.target.style.setProperty("--x__cursor", x + "px");
        event.target.style.setProperty("--y__cursor", y + "px"); */
    /* if (event.target.classList.contains("project")) {
        const box = event.target.getBoundingClientRect();
        const x = event.clientX - box.left;
        const y = event.clientY - box.top;

        event.target.style.setProperty("--opacity__blob", "1");
        event.target.style.setProperty("--x__cursor", x + "px");
        event.target.style.setProperty("--y__cursor", y + "px");
    } */
});
        

/* pastProjectsSection.addEventListener("mouseout",(event) => {
    if (event.target.classList.contains("project") && event.target.classList.contains("wrapper")) {
        event.target.style.setProperty("--opacity__blob", "0");
    }
}); */

function followCursor() {

}

observer.observe(profession);
profession.addEventListener("animationiteration", () => {
    cycleProfession(document.getElementById("profession"), professions, 40);
});

function typewrite(element, text) {
    if (element.innerHTML == text) {
        return true;
    }

    let length = element.innerHTML.length;

    if (text.search(element.innerHTML) != 0) {
        element.innerHTML = element.innerHTML.substr(0, length - 1);
        return false;
    }

    if (text.search(element.innerHTML) == 0) {
        element.innerHTML = element.innerHTML.concat(text[length]);
        return false;
    }
}

function cycleProfession(element, professions, cooldown) {
    if (typewrite(element, professions.text[professions.counter])) {
        if (professions.cooldown >= 0) {
            professions.cooldown--;
            return;
        }

        professions.counter = (professions.counter + 1) % professions.text.length;
        professions.cooldown = cooldown;
    }
}





function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.5) {
            
        }
        
    });
}