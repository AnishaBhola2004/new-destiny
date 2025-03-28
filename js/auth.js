// Select elements
const formBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector(".login-form-container");
const formClose = document.querySelector("#form-close");
const authForm = document.querySelector("#auth-form");
const formTitle = document.querySelector("#form-title");
const nameField = document.querySelector("#user-name");
const emailField = document.querySelector("#login-email");
const passwordField = document.querySelector("#login-password");
const loginSubmit = document.querySelector("#login-submit");
const googleSignInButton = document.querySelector("#google-signin");
const toggleAuthLink = document.querySelector("#toggle-auth");
const forgotPasswordLink = document.querySelector("#forgot-password");

let isSignUp = false; // Toggle between login and signup

// Open login/signup form
formBtn.addEventListener("click", () => {
    loginForm.classList.add("active");
});

// Close form
formClose.addEventListener("click", () => {
    loginForm.classList.remove("active");
});

// Toggle between Login and Signup
toggleAuthLink.addEventListener("click", (event) => {
    event.preventDefault();
    isSignUp = !isSignUp;

    if (isSignUp) {
        formTitle.innerText = "Sign Up";
        loginSubmit.value = "Sign Up";
        toggleAuthLink.innerHTML = 'Already have an account? <a href="#">Login now</a>';
        nameField.style.display = "block";
    } else {
        formTitle.innerText = "Login";
        loginSubmit.value = "Login Now";
        toggleAuthLink.innerHTML = 'Don\'t have an account? <a href="#">Register now</a>';
        nameField.style.display = "none";
    }
});

// Handle Login/Signup
authForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const password = passwordField.value.trim();

    if (!email || !password || (isSignUp && !name)) {
        alert("Please fill in all fields");
        return;
    }

    if (isSignUp) {
        // Sign up user
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return db.collection("users").doc(user.uid).set({
                    name: name,
                    email: user.email,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            })
            .then(() => {
                alert("Account created successfully! You can now log in.");
                isSignUp = false;
                formTitle.innerText = "Login";
                loginSubmit.value = "Login Now";
                toggleAuthLink.innerHTML = 'Don\'t have an account? <a href="#">Register now</a>';
                nameField.style.display = "none";
                authForm.reset();
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    } else {
        // Log in user
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert("Successfully logged in! Welcome, " + userCredential.user.email);
                authForm.reset();
                loginForm.classList.remove("active");
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });
    }
});

// Google Sign-In
googleSignInButton.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            const userRef = db.collection("users").doc(user.uid);

            return userRef.get().then((doc) => {
                if (!doc.exists) {
                    return userRef.set({
                        name: user.displayName,
                        email: user.email,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                }
            });
        })
        .then(() => {
            alert("Signed in as " + auth.currentUser.displayName);
            loginForm.classList.remove("active");
        })
        .catch((error) => {
            alert("Google Sign-In Error: " + error.message);
        });
});

// Forgot Password
forgotPasswordLink.addEventListener("click", () => {
    const email = prompt("Enter your email for password reset:");
    if (email) {
        auth.sendPasswordResetEmail(email)
            .then(() => alert("Password reset email sent! Check your inbox."))
            .catch((error) => alert("Error: " + error.message));
    }
});

// Close form on scroll
window.addEventListener("scroll", () => {
    loginForm.classList.remove("active");
});
