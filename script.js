/* const professions = document.getElementById("heading__profession-list");
professions.addEventListener("animationiteration", () => {
    professions.scrollBy(50, 0);
    console.log(`hi`);
}); */

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const options = {
    root: document.getElementById("heading__profession-list"),
    rootMargin: "0px",
    threshold: 1.0,
};

const observer = new IntersectionObserver(handleIntersection, options);
observer.observe(document.getElementById("heading__profession-item1"));

const professions = document.getElementById("heading__profession-list");
const professionQuantity = professions.children.length;

observer.observe(professions);
professions.addEventListener("animationiteration", () => {
    scrollProfession();
});

function scrollProfession() {
    for (let i = 0; i < professionQuantity; i++) {
        if (professions.children[i].classList.contains("visible") == true) {
            professions.children[i].classList.remove("visible");
            professions.children[i].classList.add("hidden");
            professions.children[i].style.animation = "hide 2s";
            
            professions.children[(i + 1) % professionQuantity].style.animation = "";
            professions.children[(i + 1) % professionQuantity].classList.remove("hidden");
            professions.children[(i + 1) % professionQuantity].classList.add("visible");
            break;
        }
    }
}

/* document.addEventListener("DOMContentLoaded", () => {
    professions = document.getElementById("heading__profession-list");
    if (professions) {
        professions.addEventListener("animationiteration", () => {
            // professions.scrollBy(convertRemToPixels(27), 0);
            //scrollProfession();
            
            observer.observe(professions);
        });
    } else {
        console.error("Element with ID 'heading__profession-list' not found");
    }
    if (document.getElementById("heading__profession-item1")) {
        observer.observe(document.getElementById("heading__profession-item1"));
    }
}); */


/* function scrollProfession() {
    console.log(professions.getBoundingClientRect().width);
    professions.scrollBy(professions.getBoundingClientRect().width, 0);
} */

function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.5) {
            
        }
        
    });
}
  


