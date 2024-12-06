// Retrieve data from localStorage
const formData = JSON.parse(localStorage.getItem("formData"));

if (formData) {
    // Display the data
    const outputDiv = document.getElementById("resultOutput");
    outputDiv.innerHTML = `
        <h2>Details Submitted:</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Gender:</strong> ${formData.gender}</p>
        <p><strong>Date of Birth:</strong> ${formData.dob}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
    `;
}

// Function to go back to the form
function goBack() {
    window.location.href = "index.html";
}
