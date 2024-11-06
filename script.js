function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const navBar = document.getElementById("nav-bar");
const navBarLinks = Array.from(navBar.children[0].children);

for (let i = 0; i < navBarLinks.length; i++)
{
    navBarLinks[i].addEventListener("click", function() {
        for (let j = 0; j < navBarLinks.length; j++)
        {
            navBarLinks[j].classList.remove("active");
            navBarLinks[j].classList.add("inactive");
        }

        navBarLinks[i].classList.remove("inactive");
        navBarLinks[i].classList.add("active");
    });
}

/* navBar.addEventListener("click", function(event) {
    if (event.target.tagName == "span")
    {
        console.log("UHL")
    }
}); */

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


const sectionObserver = new IntersectionObserver(handleSectionIntersection, {
    rootMargin: "-60% 0% -40% 0%",
    threshold: 0,
});
const sectionPastProjects = document.getElementsByTagName("section");
for (let i = 0; i < sectionPastProjects.length; i++)
{
    sectionObserver.observe(sectionPastProjects[i]);
}

function handleSectionIntersection(entries, sectionObserver) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translate(0)";
            entry.target.style.filter = "blur(0)";
            document.getElementById("heading__scroll-down").style.rotate = "180deg";
            document.getElementById("heading__scroll-down").style.opacity = "0";
            setTimeout(function() {document.getElementById("heading__scroll-down").style.visibility = "hidden";}, 300);
            
            switch (entry.target.id) {
                case "section__past-projects":
                    for (let i = 0; i < navBarLinks.length; i++)
                    {
                        if (navBarLinks[i].id == "link__work")
                        {
                            navBarLinks[i].classList.remove("inactive");
                            navBarLinks[i].classList.add("active");
                        }
                        else
                        {
                            navBarLinks[i].classList.remove("active");
                            navBarLinks[i].classList.add("inactive");
                        }
                    }
                    break;
                
                case "section__about":
                    for (let i = 0; i < navBarLinks.length; i++)
                    {
                        if (navBarLinks[i].id == "link__about")
                        {
                            navBarLinks[i].classList.remove("inactive");
                            navBarLinks[i].classList.add("active");
                        }
                        else
                        {
                            navBarLinks[i].classList.remove("active");
                            navBarLinks[i].classList.add("inactive");
                        }
                    }
                    break;

                case "section__contact":
                    for (let i = 0; i < navBarLinks.length; i++)
                    {
                        if (navBarLinks[i].id == "link__contact")
                        {
                            navBarLinks[i].classList.remove("inactive");
                            navBarLinks[i].classList.add("active");
                        }
                        else
                        {
                            navBarLinks[i].classList.remove("active");
                            navBarLinks[i].classList.add("inactive");
                        }
                    }
                    break;
            
                default:
                    break;
            }
        }
    });
}

document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const form = event.target;
    const formData = new FormData(form); // Create a FormData object
  
    // Fetch API to send form data
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json' // Expect a JSON response
        }
      });
  
      if (response.ok) {
        document.getElementById("form-response").innerHTML = "<p>Thank you! Your message has been sent.</p>";
        form.reset(); // Clear the form fields
      } else {
        document.getElementById("form-response").innerHTML = "<p>Oops! Something went wrong, please try again.</p>";
      }
    } catch (error) {
      document.getElementById("form-response").innerHTML = "<p>Error: Unable to send the message.</p>";
    }
});