document.addEventListener("DOMContentLoaded", function () {
    // Navbar Toggle
    const checkBox = document.getElementById("check");
    const navLinks = document.querySelector("nav ul");
    const checkBtn = document.querySelector(".checkbtn");

    checkBtn.addEventListener("click", function () {
        checkBox.checked = !checkBox.checked;
        navLinks.classList.toggle("active");
    });

    // Smooth Scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Contact Form Validation
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("input[name='name']").value.trim();
        const email = document.querySelector("input[name='email']").value.trim();
        const phone = document.querySelector("input[name='mno']").value.trim();
        const message = document.querySelector("textarea[name='msg']").value.trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number (10 digits).");
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    // Download CV Button
    document.querySelector("button").addEventListener("click", function () {
        <a href="file:///C:/Users/SIRI/Downloads/cv.pdf.pdf"></a>; // Change this to the actual CV file path
    });

    // Social Media Icons Hover Effect
    document.querySelectorAll(".font i").forEach(icon => {
        icon.addEventListener("mouseover", function () {
            this.style.color = "#ff9800";
        });
        icon.addEventListener("mouseout", function () {
            this.style.color = "black";
        });
    });

    // Read More Button
    document.querySelector(".about_btn").addEventListener("click", function () {
        alert("More details coming soon!");
    });

    // Service Cards Click Event
    document.querySelectorAll(".service_card a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            alert("More details will be added soon.");
        });
    });
});
