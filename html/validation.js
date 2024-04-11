function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var comment = document.getElementById("comment").value;

    if (firstName == "" || lastName == "" || address == "" || email == "" || contact == "" || comment == "") {
        alert("All fields must be filled out");
        return false;
    }
}