import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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
const auth = getAuth(app);

const resetEmailInput = document.getElementById("reset-email");
const resetSubmitButton = document.getElementById("reset-submit");

resetSubmitButton.addEventListener("click", function () {
  const resetEmail = resetEmailInput.value;
  
  sendPasswordResetEmail(auth, resetEmail)
    .then(() => {
      window.alert("Password reset email sent. Check your inbox.");
      resetEmailInput.value = ""; // Clear the input field
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    });
});
