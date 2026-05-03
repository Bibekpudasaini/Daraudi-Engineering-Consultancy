document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");

    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    }

});

// active link
const links = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

//Form validation(Contact Page)
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();

        if (name === "" || email === "") {
            alert("Please fill in all required fields.");
            e.preventDefault();
        } else {
            alert("Message sent successfully! (Demo)");
        }
    });
}