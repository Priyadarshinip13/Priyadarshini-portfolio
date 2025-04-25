const words = ["AIML Developer", "Web Developer", "Tech Enthusiast"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterText = document.querySelector(".typewriter-text");

function typeEffect() {
    const currentWord = words[index];
    let displayText = currentWord.substring(0, charIndex);
    
    typewriterText.textContent = displayText;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) index = (index + 1) % words.length;
        setTimeout(typeEffect, 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("intro").classList.add("slide-out");

        // Show header smoothly after intro slides out
        setTimeout(() => {
            document.querySelector(".header-container").classList.add("visible");
        }, 1000); // Delays header reveal slightly for smooth effect

    }, 2000); // Shows intro for 2 seconds before transition
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight * 0.85;

            if (sectionTop < windowHeight) {
                section.classList.add("active");
            }
        });
    }

    // Run on scroll and load
    window.addEventListener("scroll", revealSections);
    revealSections(); // Run initially to animate visible sections
});

document.getElementById("sayHelloBtn").addEventListener("click", function() {
    window.location.href = "mailto:your-ppriyadarshini2003@gmail.com?subject=Hello!";
});




// Smooth Scroll Animation
const skillsSection = document.querySelector('#skills');
const skillIcons = document.querySelectorAll('.skill');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillsSection.classList.add('show');
            skillIcons.forEach((icon, index) => {
                setTimeout(() => {
                    icon.classList.add('show');
                }, index * 200);
            });
        }
    });
}, { threshold: 0.2 });

observer.observe(skillsSection);
