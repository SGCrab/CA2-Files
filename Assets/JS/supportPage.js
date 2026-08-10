const supportForm = document.getElementById("supportForm");

supportForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("supportName").value.trim();
    const email = document.getElementById("supportEmail").value.trim();
    const issue = document.getElementById("supportIssue").value.trim();

    const message = document.getElementById("supportMessage");


    // Check name
    if (name === "") {

        message.style.color = "red";
        message.textContent = "Name is required to be entered.";

        return;
    }


    // Check email
    if (email === "") {

        message.style.color = "red";
        message.textContent = "Email is required to be entered.";

        return;
    }


    // Check issue
    if (issue === "") {

        message.style.color = "red";
        message.textContent = "Please describe the issue.";

        return;
    }


    // Everything is filled in
    message.style.color = "lime";
    message.textContent = "Your support request has been submitted successfully!";


    // Clear the form
    supportForm.reset();


    // Remove message after 5 seconds
    setTimeout(function() {

        message.style.opacity = "0";

        setTimeout(function() {
            message.textContent = "";
            message.style.opacity = "1";
        }, 500);

    }, 5000);

});