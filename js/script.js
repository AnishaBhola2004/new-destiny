document.addEventListener("DOMContentLoaded", function () {
    // Helper function to check element existence
    const select = (selector) => document.querySelector(selector);

    // Login Form Elements
    const formBtn = select("#login-btn");
    const loginForm = select(".login-form-container");
    const formClose = select("#form-close");
    const loginSubmit = select("#login-submit");

    // Modal Elements
    const discoverBtn = select(".home .btn");
    const modal = select("#travelModal");
    const closeBtn = select(".close-btn");

    // Open/Close Modal Functions
    const openModal = () => modal && (modal.style.display = "flex");
    const closeModal = () => modal && (modal.style.display = "none");

    // Modal Event Listeners
    discoverBtn?.addEventListener("click", (event) => {
        event.preventDefault();
        openModal();
    });

    closeBtn?.addEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });

    // Login Form Handling
    formBtn?.addEventListener("click", () => loginForm?.classList.add("active"));

    formClose?.addEventListener("click", () => loginForm?.classList.remove("active"));

    window.addEventListener("scroll", () => loginForm?.classList.remove("active"));

    loginSubmit?.addEventListener("click", (event) => {
        event.preventDefault();
        const email = select("#login-email")?.value.trim();
        const password = select("#login-password")?.value.trim();

        if (!email || !password) {
            alert("Enter the full information");
        } else {
            alert("Successfully Logged in");
            loginForm?.classList.remove("active");
        }
    });

    // Register and Forgot Password Alerts
    select("#register-now")?.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Server is busy");
    });

    select("#forgot-password")?.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Server is busy");
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
});


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