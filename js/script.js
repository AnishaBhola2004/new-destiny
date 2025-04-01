// Get auth instance
const auth = firebase.auth();

// DOM Elements
const loginBtn = document.getElementById('login-btn');
const mainContainer = document.querySelector('.main-container');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const googleSignIn = document.getElementById('google-signin');
const forgotPassword = document.getElementById('forgot-password');
const userInfo = document.querySelector('.user-info');
const userName = document.getElementById('user-name');
const userAvatar = document.getElementById('user-avatar');
const logoutBtn = document.getElementById('logout-btn');

// Toggle modal
loginBtn.addEventListener('click', () => {
    if (!auth.currentUser) {
        mainContainer.classList.add('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    }
});

// Close modal when clicking outside
mainContainer.addEventListener('click', (e) => {
    if (e.target === mainContainer) {
        mainContainer.classList.remove('active');
    }
});

// Toggle between login and signup forms
showSignup.addEventListener('click', () => {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
});

showLogin.addEventListener('click', () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
});

// Handle Login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log('User logged in:', userCredential.user);
        loginForm.reset();
        mainContainer.classList.remove('active');
    } catch (error) {
        alert(error.message);
    }
});

// Handle Sign Up
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        await userCredential.user.updateProfile({
            displayName: name
        });
        console.log('User signed up:', userCredential.user);
        signupForm.reset();
        mainContainer.classList.remove('active');
    } catch (error) {
        alert(error.message);
    }
});

// Handle Google Sign In
googleSignIn.addEventListener('click', async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        const result = await auth.signInWithPopup(provider);
        console.log('Google sign-in result:', result.user);
        mainContainer.classList.remove('active');
    } catch (error) {
        alert(error.message);
    }
});

// Handle Forgot Password
forgotPassword.addEventListener('click', async () => {
    const email = prompt('Enter your email to reset password:');
    if (email) {
        try {
            await auth.sendPasswordResetEmail(email);
            alert('Password reset email sent! Check your inbox.');
        } catch (error) {
            alert(error.message);
        }
    }
});

// Handle Logout
logoutBtn.addEventListener('click', async () => {
    try {
        await auth.signOut();
        console.log('User signed out');
    } catch (error) {
        alert(error.message);
    }
});

// Update UI based on auth state
function updateUI(user) {
    if (user) {
        // User is signed in
        mainContainer.classList.remove('active');
        userInfo.classList.add('active');
        userName.textContent = user.displayName || 'User';
        if (user.photoURL) {
            userAvatar.src = user.photoURL;
        } else {
            // Generate avatar based on name or email
            const nameOrEmail = user.displayName || user.email;
            userAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(nameOrEmail)}&background=random`;
        }
    } else {
        // User is signed out
        userInfo.classList.remove('active');
    }
}

// Auth State Observer
auth.onAuthStateChanged((user) => {
    console.log(user ? 'User is signed in' : 'No user is signed in');
    updateUI(user);
}); 


// Swiper Slider Initialization
const initSwiper = () => {
    if (typeof Swiper === "undefined") return;

    new Swiper(".review-slider", {
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    new Swiper(".brand-slider", {
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 2500, disableOnInteraction: false },
        breakpoints: {
            450: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            991: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
        },
    });
};

initSwiper();

// Video Interaction
const videoBtns = document.querySelectorAll(".vid-btn");
const videoElement = select("#video-slider");

videoBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        select(".controls .active")?.classList.remove("active");
        this.classList.add("active");
        const newSrc = this.getAttribute("data-src");

        if (newSrc) {
            videoElement.setAttribute("src", newSrc);
            videoElement.load();
            videoElement.play();
        }
    });
});

// Navbar & Search Bar Interactions
const searchBtn = select("#search-btn");
const searchBar = select(".search-bar-container");
const menu = select("#menu-bar");
const navbar = select(".navbar");

window.addEventListener("scroll", () => {
    searchBtn?.classList.remove("fa-times");
    searchBar?.classList.remove("active");
    menu?.classList.remove("fa-times");
    navbar?.classList.remove("active");
    loginForm?.classList.remove("active");
});

menu?.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar?.classList.toggle("active");
});

searchBtn?.addEventListener("click", () => {
    searchBtn.classList.toggle("fa-times");
    searchBar?.classList.toggle("active");
});

// Booking Form Handling
const bookingForm = select("#bookingForm");
const successModal = select("#successModal");

bookingForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (successModal) successModal.style.display = "flex";
    bookingForm.reset();
});

successModal?.addEventListener("click", () => {
    successModal.style.display = "none";
});

// Image Preview
window.previewImage = (event) => {
    const files = event.target.files;
    const imagePreview = select("#imagePreview");

    Array.from(files).forEach((file) => {
        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement("img");
                img.src = e.target.result;
                imagePreview.appendChild(img);
                showModal();
            };
            reader.readAsDataURL(file);
        }
    });
};

// Show Success Modal
const showModal = () => {
    if (successModal) {
        successModal.style.display = "block";
        setTimeout(() => (successModal.style.display = "none"), 2000);
    }
};

function showReviewForm() {
var form = document.getElementById("reviewForm");
form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";
}

const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});