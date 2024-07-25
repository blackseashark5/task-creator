const email = document.getElementById("email")
const password = document.getElementById("password")
const signBtn = document.getElementById("signup")
signBtn.addEventListener("click", function(){
    console.log("signup button has been clicked")
    const emaildeet = email.value
    const passworddeet = password.value
    console.log(emaildeet)
    console.log(passworddeet)
    signUp(emaildeet, passworddeet)
})

// const signupBtn = document.getElementById("signup");

// signupBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     registerUser();
// });

// const checkPassword = (password, confirmPassword) => password === confirmPassword

// const isMailUnique = (email) => {
//     // get all user
//     const allRecord = JSON.parse(localStorage.getItem("Users"))
//     if (allRecord){
//         const filtered = allRecord.filter(user => user.email.toLowerCase() == email.toLowerCase());
//     return filtered.length === 0;
//     }
//     return false;
// }

// const registerUser = () => {
//     const firstName = document.getElementById("firstName"),
//         lastName = document.getElementById("lastName"),
//         email = document.getElementById("email"),
//         password = document.getElementById("password"),
//         confirmPassword = document.getElementById("confirmPassword"),
        
//         container = document.getElementsByClassName("container");
    
//     if (
//         firstName.value.length < 2 ||
//         lastName.value.length < 2 ||
//         email.value.length < 2 ||
//         password.value.length < 2 ||
//         confirmPassword.value.length < 2
//     ) {
//         alert("All fields are required!");
//         return;
//     }

//     if (!checkPassword(password.value, confirmPassword.value)) {
//         alert("Password and confirm password must match!");
//         return;
//     }

//     if (!isMailUnique(email.value)) {
//         alert("Email already exist!");
//         return;
//     }

//     const newUser = {
//         firstName: firstName.value,
//         lastName: lastName.value,
//         email: email.value,
//         password: password.value,
//     };

//     // get existing users
//     const existingRecords = JSON.parse(localStorage.getItem("Users"));
//     if (existingRecords != null && existingRecords.length > 0) {
//         localStorage.setItem("Users", JSON.stringify([...existingRecords, newUser]));
//         container[0].innerHTML = `
//             ${newUser.firstName} signup successful! <br />
//             <a href="./account.html">Proceed to Login...</a>
//         `;
//         return
//     }

//     localStorage.setItem("Users", JSON.stringify([newUser]));
//     container[0].innerHTML = `${newUser.firstName} signup successful;`;
// }