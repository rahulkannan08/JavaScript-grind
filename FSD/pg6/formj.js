function validateForm() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;



    

    if(name === "" && email === "" && password === "") {
        alert("Please fill out all fields");
        return false;
    }

    if (name === "") {
        alert("Username must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    if (password === "") {
        alert("Password must be filled out");
        return false;
    } 
    else if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    
    else {
        alert("Form submitted successfully!");
        return true;
    }
}

