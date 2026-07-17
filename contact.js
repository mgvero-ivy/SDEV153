// Wait until the page has finished loading.
window.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contact-form");
    const formMessage = document.querySelector("#form-message");

    contactForm.addEventListener("submit", function (event) {
        // Prevent the page from refreshing.
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const reason = document.querySelector("#reason").value;
        const message = document.querySelector("#message").value.trim();

        // Check that all required fields contain information.
        if (name === "" || email === "" || reason === "" || message === "") {
            formMessage.textContent =
                "Please complete all fields before submitting the form.";

            formMessage.className = "error-message";
            return;
        }

        // Check the email using the browser's built-in email validation.
        const emailField = document.querySelector("#email");

        if (!emailField.checkValidity()) {
            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.className = "error-message";
            return;
        }

        // Display a confirmation and clear the form.
        formMessage.textContent =
            `Thank you, ${name}! Your message has been received.`;

        formMessage.className = "success-message";
        contactForm.reset();
    });
});