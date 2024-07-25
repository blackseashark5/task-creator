function signUp(email,password){
    console.log("signing up user")
    firebase.auth().createUserWithEmailAndPaaword(email,password).then((userCredential)=>{
   console.log("successfull signed up")
}).catch( (error)=>{
    var errorCode = error.code
    var errorMessage = error.message
    console.log(errorMessage)
})
}   