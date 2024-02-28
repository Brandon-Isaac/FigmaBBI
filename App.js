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