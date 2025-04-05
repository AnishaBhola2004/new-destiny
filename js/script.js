// ---------------- AUTH ----------------

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

loginBtn?.addEventListener('click', () => {
    if (!auth.currentUser) {
        mainContainer.classList.add('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    }
});

mainContainer?.addEventListener('click', (e) => {
    if (e.target === mainContainer) {
        mainContainer.classList.remove('active');
    }
});

showSignup?.addEventListener('click', () => {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
});

showLogin?.addEventListener('click', () => {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
});

loginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        loginForm.reset();
        mainContainer.classList.remove('active');
    } catch (error) {
        alert(error.message);
    }
});

signupForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        await userCredential.user.updateProfile({ displayName: name });
        signupForm.reset();
        mainContainer.classList.remove('active');
    } catch (error) {
        alert(error.message);
    }
});

googleSignIn?.addEventListener('click', async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        await auth.signInWithPopup(provider);
        mainContainer.classList.remove('active');
    } catch (error) {
        alert(error.message);
    }
});

forgotPassword?.addEventListener('click', async () => {
    const email = prompt('Enter your email to reset password:');
    if (email) {
        try {
            await auth.sendPasswordResetEmail(email);
            alert('Password reset email sent!');
        } catch (error) {
            alert(error.message);
        }
    }
});

logoutBtn?.addEventListener('click', async () => {
    try {
        await auth.signOut();
    } catch (error) {
        alert(error.message);
    }
});

function updateUI(user) {
    if (user) {
        userInfo?.classList.add('active');
        userName.textContent = user.displayName || 'User';
        userAvatar.src = user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email)}&background=random`;
    } else {
        userInfo?.classList.remove('active');
    }
}

auth.onAuthStateChanged((user) => {
    updateUI(user);
});

// ---------------- BOOKING ----------------

function validateDates(arrival, departure) {
    const arrivalDate = new Date(arrival);
    const departureDate = new Date(departure);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (arrivalDate < today) {
        alert("Arrival date cannot be in the past");
        return false;
    }
    if (departureDate <= arrivalDate) {
        alert("Departure date must be after arrival date");
        return false;
    }
    return true;
}

document.getElementById('bookingForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const arrival = e.target.arrival.value;
    const departure = e.target.departure.value;

    if (!validateDates(arrival, departure)) return;

    const formData = {
        destination: e.target.destination.value,
        guests: parseInt(e.target.guests.value),
        arrival,
        departure,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
        await db.collection('bookings').add(formData);
        document.getElementById('successModal').style.display = 'block';
        e.target.reset();
    } catch (error) {
        console.error('Error adding booking: ', error);
        alert('Error submitting booking. Please try again.');
    }
});

const dateInputs = document.querySelectorAll('input[type="date"]');
const todayDate = new Date().toISOString().split('T')[0];
dateInputs.forEach(input => input.min = todayDate);

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
