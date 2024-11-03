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