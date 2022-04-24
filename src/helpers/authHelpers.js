import auth from "@react-native-firebase/auth"

// Signs a user up through Firebase with an email and a password provided
export async function userSignUp(email, password) {
  const results = auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      return "success"
    })
    .catch(error => {
      let signUpError
      switch(error.code) {
        case "auth/email-already-in-use": // Email in use
          console.log("ERROR :: Email already in use")
          signUpError = "That email is already in use. Try loggging in!"
          break
        case "auth/invalid-email": // Invalid email
          console.log("ERROR :: Invalid email")
          signUpError = "That email seems to be invalid, please try again"
          break
        default: // Catch all other errors
          console.log("ERROR :: ", error)
          signUpError = error
          break
      }
      return signUpError
    })
  return results
}

// Checks whether or not a user is currently signed into the app
export async function checkUserStatus() {
  const user = await auth().currentUser
  console.log(user)
  if (user) {
    return true
  } else {
    return false
  }
}