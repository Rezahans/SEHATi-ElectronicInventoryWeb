import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC0pXj-8RpYNBxpz0wrMXx0a3lBQ9UnVyM",
  authDomain: "electronic-376ca.firebaseapp.com",
  projectId: "electronic-376ca",
  storageBucket: "electronic-376ca.appspot.com",
  messagingSenderId: "584222301731",
  appId: "1:584222301731:web:a36b4fe881b5898beb9b96",
  measurementId: "G-BH2BL1MY1Y"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase();

const signupButton = document.getElementById("sign-up");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const signupUsernameIn = document.getElementById("username-signup"); // New username field
const createacctbtn = document.getElementById("create-acct-btn");

var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword, signupUsername;

createacctbtn.addEventListener("click", function() {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail !== confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword !== confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  signupUsername = signupUsernameIn.value; // Get the value of the username field
  if (!signupUsername) {
    window.alert("Please enter a username.");
    isVerified = false;
  }

  if (!signupEmail || !confirmSignupEmail || !signupPassword || !confirmSignUpPassword) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    const userId = user.uid;

    // Store user data in Realtime Database
    const userData = {
      email: signupEmail,
      username: signupUsername // Ganti dengan username yang diinginkan
      // Add other user data if needed
    };
    set(ref(database, `electronic/admin/${userId}`), userData)
      .then(() => {
        window.alert("Success! Account created.");
      })
      .catch((error) => {
        window.alert("Error occurred while storing user data in the database. Try again.");
      });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert("Error occurred while creating the account. Try again.");
  });

});
