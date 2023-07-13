import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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

const submitButton = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
               
var email, password;

submitButton.addEventListener("click", function() {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Success! Welcome back!");
      window.alert("Success! Welcome back!");

      window.location.href = "../pages/dashboard.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    });
});

