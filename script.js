/* =========================================================
   DEV KUMAR PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   EDIT YOUR PERSONAL INFORMATION HERE
========================================================= */

const CONFIG = {

    name: "Dev Kumar",

    profession: "Freelance Data Analyst",

    email: "dev876175@gmail.com",

    phone: "+91 9511046227",

    whatsapp: "+91 9511046227",

    location: "Lucknow Uttar Pradesh",

    startingPrice: "1000",

    linkedin: "",

    github: "",

    instagram: "https://www.instagram.com/data_analyst_0001?igsi=NWZtZDc1YzhvejY5",

    profileImage: "image/profile.png",

    resume: "image/resume.pdf"

};


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializePersonalInformation();

    initializeNavigation();

    initializeTheme();

    initializeParticles();

    initializeScrollReveal();

    initializeTiltCards();

    initializeCursor();

    initializeWorkflow();

    initializeProjectModal();

    initializeRipple();

    initializeDashboard();

    initializeBackToTop();

    initializeImageFallback();

});


/* =========================================================
   PERSONAL INFORMATION
========================================================= */

function initializePersonalInformation() {

    /*
       ABOUT
    */

    const aboutName =
        document.getElementById("aboutName");

    const aboutProfession =
        document.getElementById("aboutProfession");

    const aboutLocation =
        document.getElementById("aboutLocation");

    const aboutEmail =
        document.getElementById("aboutEmail");

    const aboutPhone =
        document.getElementById("aboutPhone");


    if (aboutName) {

        aboutName.textContent =
            CONFIG.name;
    }


    if (aboutProfession) {

        aboutProfession.textContent =
            CONFIG.profession;
    }


    if (aboutLocation) {

        aboutLocation.textContent =
            CONFIG.location;
    }


    if (aboutEmail) {

        aboutEmail.textContent =
            CONFIG.email;
    }


    if (aboutPhone) {

        aboutPhone.textContent =
            CONFIG.phone;
    }


    /*
       PRICE
    */

    const priceDisplay =
        document.getElementById(
            "priceDisplay"
        );

    if (priceDisplay) {

        priceDisplay.textContent =
            `₹${CONFIG.startingPrice}`;
    }


    /*
       EMAIL
    */

    const emailButton =
        document.getElementById(
            "emailButton"
        );

    const footerEmail =
        document.getElementById(
            "footerEmail"
        );


    if (emailButton) {

        emailButton.href =
            `mailto:${CONFIG.email}`;

        const emailText =
            emailButton.querySelector("strong");

        if (emailText) {

            emailText.textContent =
                CONFIG.email;
        }
    }


    if (footerEmail) {

        footerEmail.href =
            `mailto:${CONFIG.email}`;
    }


    /*
       WHATSAPP
    */

    const whatsappButton =
        document.getElementById(
            "whatsappButton"
        );

    const footerWhatsApp =
        document.getElementById(
            "footerWhatsApp"
        );


    /*
       WhatsApp number should be
       entered without +, spaces or -
       
       Example:
       919511046227
    */

    const cleanWhatsApp =
        CONFIG.whatsapp
            .replace(/\D/g, "");


    if (
        whatsappButton &&
        cleanWhatsApp &&
        !CONFIG.whatsapp.includes("YOUR")
    ) {

        whatsappButton.href =
            `https://wa.me/${cleanWhatsApp}`;
    }


    if (whatsappButton) {

        const whatsappText =
            whatsappButton.querySelector(
                "strong"
            );

        if (whatsappText) {

            whatsappText.textContent =
                CONFIG.whatsapp;
        }
    }


    if (
        footerWhatsApp &&
        cleanWhatsApp &&
        !CONFIG.whatsapp.includes("YOUR")
    ) {

        footerWhatsApp.href =
            `https://wa.me/${cleanWhatsApp}`;
    }


    /*
       PHONE
    */

    const phoneButton =
        document.getElementById(
            "phoneButton"
        );

    const footerPhone =
        document.getElementById(
            "footerPhone"
        );


    const cleanPhone =
        CONFIG.phone.replace(
            /[^\d+]/g,
            ""
        );


    if (
        phoneButton &&
        cleanPhone &&
        !CONFIG.phone.includes("YOUR")
    ) {

        phoneButton.href =
            `tel:${cleanPhone}`;
    }


    if (footerPhone) {

        if (
            cleanPhone &&
            !CONFIG.phone.includes("YOUR")
        ) {

            footerPhone.href =
                `tel:${cleanPhone}`;
        }
    }


    /*
       SOCIAL LINKS
    */

    setupSocialLink(
        "linkedinLink",
        CONFIG.linkedin
    );

    setupSocialLink(
        "githubLink",
        CONFIG.github
    );

    setupSocialLink(
        "instagramLink",
        CONFIG.instagram
    );

}


/* =========================================================
   SOCIAL LINK HELPER
========================================================= */

function setupSocialLink(
    elementId,
    url
) {

    const element =
        document.getElementById(
            elementId
        );

    if (!element) return;


    if (
        url &&
        url.trim() !== ""
    ) {

        element.href = url;

        element.target = "_blank";

        element.rel =
            "noopener noreferrer";

    } else {

        /*
           Don't show fake social links.
        */

        element.style.display =
            "none";
    }
}


/* =========================================================
   NAVIGATION
========================================================= */

function initializeNavigation() {

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );

    const navLinks =
        document.getElementById(
            "navLinks"
        );


    if (
        !menuToggle ||
        !navLinks
    ) return;


    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "open"
            );

        }
    );


    /*
       Close mobile menu
       after clicking a link.
    */

    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );

                }
            );

        });


    /*
       Navbar scroll effect
    */

    const navbar =
        document.getElementById(
            "navbar"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 50
            ) {

                navbar.style.boxShadow =
                    "0 15px 50px rgba(0,0,0,.20)";

            } else {

                navbar.style.boxShadow =
                    "none";
            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   THEME
========================================================= */

function initializeTheme() {

    const toggle =
        document.getElementById(
            "themeToggle"
        );


    if (!toggle) return;


    const savedTheme =
        localStorage.getItem(
            "devPortfolioTheme"
        );


    if (savedTheme === "light") {

        document.body.classList.add(
            "light"
        );

        updateThemeIcon(
            toggle,
            true
        );

    }


    toggle.addEventListener(
        "click",
        () => {

            const isLight =
                document.body.classList.toggle(
                    "light"
                );


            localStorage.setItem(
                "devPortfolioTheme",
                isLight
                    ? "light"
                    : "dark"
            );


            updateThemeIcon(
                toggle,
                isLight
            );

        }
    );

}


function updateThemeIcon(
    button,
    isLight
) {

    const icon =
        button.querySelector(
            "i"
        );


    if (!icon) return;


    icon.className =
        isLight
            ? "fas fa-sun"
            : "fas fa-moon";
}


/* =========================================================
   PARTICLES
========================================================= */

function initializeParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    if (!container) return;


    const particleCount =
        window.innerWidth < 600
            ? 20
            : 45;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "particle";


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.animationDuration =
            `${8 + Math.random() * 18}s`;


        particle.style.animationDelay =
            `${Math.random() * -20}s`;


        particle.style.opacity =
            `${.12 + Math.random() * .35}`;


        const size =
            1 + Math.random() * 3;


        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;


        container.appendChild(
            particle
        );

    }

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function initializeScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    if (!elements.length) return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .12
            }
        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   3D TILT CARDS
========================================================= */

function initializeTiltCards() {

    /*
       Disable tilt on touch devices.
    */

    if (
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) return;


    const cards =
        document.querySelectorAll(
            ".tilt-card"
        );


    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -5;


                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    5;


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-4px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   CUSTOM CURSOR
========================================================= */

function initializeCursor() {

    if (
        window.matchMedia(
            "(pointer: coarse)"
        ).matches
    ) return;


    const dot =
        document.querySelector(
            ".cursor-dot"
        );

    const outline =
        document.querySelector(
            ".cursor-outline"
        );


    if (!dot || !outline) return;


    let mouseX = 0;
    let mouseY = 0;

    let outlineX = 0;
    let outlineY = 0;


    window.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;


            dot.style.left =
                `${mouseX}px`;

            dot.style.top =
                `${mouseY}px`;

        },
        {
            passive: true
        }
    );


    function animateCursor() {

        outlineX +=
            (mouseX - outlineX) *
            .15;

        outlineY +=
            (mouseY - outlineY) *
            .15;


        outline.style.left =
            `${outlineX}px`;

        outline.style.top =
            `${outlineY}px`;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    /*
       Cursor hover effect
    */

    const interactive =
        document.querySelectorAll(
            "a, button, .tilt-card, select"
        );


    interactive.forEach(
        element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    outline.style.width =
                        "45px";

                    outline.style.height =
                        "45px";

                    outline.style.background =
                        "rgba(85,184,255,.06)";

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    outline.style.width =
                        "30px";

                    outline.style.height =
                        "30px";

                    outline.style.background =
                        "transparent";

                }
            );

        }
    );

}


/* =========================================================
   WORKFLOW INTERACTION
========================================================= */

function initializeWorkflow() {

    const steps =
        document.querySelectorAll(
            ".workflow-step"
        );


    steps.forEach(step => {

        step.addEventListener(
            "click",
            () => {

                steps.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                step.classList.add(
                    "active"
                );

            }
        );

    });

}


/* =========================================================
   PROJECT MODAL
========================================================= */

function initializeProjectModal() {

    const modal =
        document.getElementById(
            "projectModal"
        );

    const closeButton =
        document.getElementById(
            "modalClose"
        );

    const overlay =
        document.querySelector(
            ".modal-overlay"
        );

    const title =
        document.getElementById(
            "modalTitle"
        );


    const projectButtons =
        document.querySelectorAll(
            ".project-btn"
        );


    if (!modal) return;


    projectButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const projectName =
                        button.dataset.project ||
                        "Project";


                    title.textContent =
                        projectName;


                    modal.classList.add(
                        "show"
                    );


                    document.body.style.overflow =
                        "hidden";

                }
            );

        }
    );


    function closeModal() {

        modal.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "";

    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeModal
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeModal
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeModal();

            }

        }
    );

}


/* =========================================================
   RIPPLE EFFECT
========================================================= */

function initializeRipple() {

    const buttons =
        document.querySelectorAll(
            ".ripple"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    const ripple =
                        document.createElement(
                            "span"
                        );


                    ripple.className =
                        "ripple-effect";


                    const rect =
                        button.getBoundingClientRect();


                    ripple.style.left =
                        `${event.clientX - rect.left}px`;

                    ripple.style.top =
                        `${event.clientY - rect.top}px`;


                    button.appendChild(
                        ripple
                    );


                    setTimeout(
                        () => {

                            ripple.remove();

                        },
                        600
                    );

                }
            );

        }
    );

}


/* =========================================================
   DASHBOARD
========================================================= */

function initializeDashboard() {

    const filter =
        document.getElementById(
            "dashboardFilter"
        );

    const sales =
        document.getElementById(
            "dashSales"
        );


    if (!filter || !sales) return;


    /*
       This is only a visual demo.
       Replace these values with your
       actual dashboard data if required.
    */

    const demoData = {

        "All Regions":
            "₹84,254",

        "West":
            "₹27,840",

        "East":
            "₹21,560",

        "Central":
            "₹18,420",

        "South":
            "₹16,434"

    };


    filter.addEventListener(
        "change",
        () => {

            const value =
                filter.value;


            sales.textContent =
                demoData[value] ||
                "₹84,254";

        }
    );

}


/* =========================================================
   BACK TO TOP
========================================================= */

function initializeBackToTop() {

    const button =
        document.getElementById(
            "backToTop"
        );


    if (!button) return;


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY >
                500
            ) {

                button.classList.add(
                    "show"
                );

            } else {

                button.classList.remove(
                    "show"
                );

            }

        },
        {
            passive: true
        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

function initializeImageFallback() {

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(
        image => {

            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";

                }
            );

        }
    );

}


/* =========================================================
   HERO MOUSE PARALLAX
========================================================= */

if (
    !window.matchMedia(
        "(pointer: coarse)"
    ).matches
) {

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    if (heroVisual) {

        heroVisual.addEventListener(
            "mousemove",
            event => {

                const rect =
                    heroVisual.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left -
                        rect.width / 2
                    ) /
                    rect.width;


                const y =
                    (
                        event.clientY -
                        rect.top -
                        rect.height / 2
                    ) /
                    rect.height;


                const card =
                    heroVisual.querySelector(
                        ".analytics-card"
                    );


                if (!card) return;


                card.style.transform =
                    `rotateX(${y * -8}deg)
                     rotateY(${x * 10}deg)
                     translateZ(10px)`;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                const card =
                    heroVisual.querySelector(
                        ".analytics-card"
                    );


                if (card) {

                    card.style.transform =
                        "rotateX(5deg) rotateY(-7deg)";

                }

            }
        );

    }

}


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%c Dev Kumar Portfolio ",
    "background:#55b8ff;color:#061019;padding:8px 12px;border-radius:6px;font-weight:bold;"
);

console.log(
    "Portfolio initialized successfully."
);