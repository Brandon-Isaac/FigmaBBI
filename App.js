//create a serrver-side script called "submit.php"
function validateForm() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
      alert("All fields must be filled out");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    // Additional validation logic can be added here

    return true;
  }

  function submitForm() {
    var formData = new FormData(document.getElementById("signupForm"));
    if (validateForm()) {
      alert("Form submitted successfully!");
      fetch("submit.php", {
        method: "POST",
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then(data => {
        // Handle successful form submission
        alert(data);
        // Optionally, perform any additional actions after form submission
      })
      .catch(error => {
        // Handle errors
        console.error("There was a problem with your form submission:", error.message);
      });
    }
else
alert("Invalid Form Details");
  }