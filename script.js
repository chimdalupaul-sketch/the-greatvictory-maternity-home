// THE GREATVICTORY MATERNITY HOME WEBSITE

document.addEventListener("DOMContentLoaded", function () {

    // 1. MOBILE NAVIGATION MENU
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (menuToggle && siteNav) {

        menuToggle.addEventListener("click", function () {
            const isOpen = siteNav.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        // Close the menu when a navigation link is clicked
        siteNav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                siteNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            });
        });

        // Close the menu when the screen becomes wider
        window.addEventListener("resize", function () {
            if (window.innerWidth > 680) {
                siteNav.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            }
        });
    }


    // 2. AUTOMATIC COPYRIGHT YEAR
    const yearElement = document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 3. BACK-TO-TOP BUTTON
    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        function updateBackToTopButton() {
            if (window.scrollY > 350) {
                backToTop.classList.add("visible");
            } else {
                backToTop.classList.remove("visible");
            }
        }

        window.addEventListener("scroll", updateBackToTopButton);
        updateBackToTopButton();
    }


    // 4. CONTACT FORM
    const contactForm = document.querySelector("#contact-form");
    const formStatus = document.querySelector("#form-status");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector("#name")?.value.trim();
            const email = document.querySelector("#email")?.value.trim();
            const phone = document.querySelector("#phone")?.value.trim();
            const message = document.querySelector("#message")?.value.trim();

            if (!name || !email || !message) {
                if (formStatus) {
                    formStatus.textContent =
                        "Please fill in your name, email address, and message.";
                }
                return;
            }

            // Open the visitor's email application
            const businessEmail = "chukwukaeloamara9977@gmail.com";

            const subject = encodeURIComponent(
                "Website enquiry from " + name
            );

            const body = encodeURIComponent(
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Phone: " + (phone || "Not provided") + "\n\n" +
                "Message:\n" + message
            );

            if (formStatus) {
                formStatus.textContent =
                    "Opening your email application. Please send the email there.";
            }

            window.location.href =
                "mailto:" + businessEmail +
                "?subject=" + subject +
                "&body=" + body;
        });
    }

});