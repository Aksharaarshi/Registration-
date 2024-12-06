document.getElementById("submitBtn").addEventListener("click", function () {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;

    // Validation (basic)
    if (!name || !email || !phone || !gender || !dob) {
        alert("Please fill in all required fields.");
        return;
    }

    // Save data in localStorage
    const formData = {
        name,
        email,
        phone,
        gender,
        dob,
        address,
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    // Redirect to result page
    window.location.href = "result.html";
});
