const loginBtn = document.getElementById("login-form-submit");

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    loginUser();
});

const loginUser = () => {
    const username = document.getElementById("username-field"),
        password = document.getElementById("password-field"),
        container = document.getElementById("main-holder");
    
    if (
        username.value.length < 2 ||
        password.value.length < 2
    ) {
        alert("All fields are required!");
        return;
    }

    // get all record and find user
    const userRecord = JSON.parse(localStorage.getItem("Users"))
    if(userRecord){
    const accountRecord = userRecord.find(
        user => user.email.toLowerCase() == username.value.toLowerCase() &&
            user.password.toLowerCase() == password.value
    )
    return accountRecord
    }

    if (userRecord) {
        container.innerHTML = `${userRecord.firstName} logged in successfully!`
    } else {
        container.innerHTML = "Invalid login credentials!";
    }
    window.location.href ="/account.html"
}
