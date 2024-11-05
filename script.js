function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const profession = document.getElementById("profession");
const professions = {
    text: ["a university student",
        "studying math and CS for AI",
        "a social media manager",
        "a guitarist",
        "a wannabe software engineer",
        "learning web development",
        "a music producer",
        "an occasional fashion designer",
        "an aspiring game developer"],
    counter: 0,
    cooldown: 30
};

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

const options = {
    root: null,
    rootMargin: "-60% 0% -40% 0%",
    threshold: 0,
};

const sectionObserver = new IntersectionObserver(handleSectionIntersection, options);
const sectionPastProjects = document.getElementById("section__past-projects");
sectionObserver.observe(sectionPastProjects);
console.log(sectionPastProjects);

function handleSectionIntersection(entries, sectionObserver) {
    entries.forEach((entry) => {
        /* sectionPastProjects.style.opacity = "1"; */
        console.log("hi")
        if (entry.isIntersecting) {
            sectionPastProjects.style.opacity = "1";
            sectionPastProjects.style.transform = "translate(0)";
            sectionPastProjects.style.filter = "blur(0)";
        }
    });
}