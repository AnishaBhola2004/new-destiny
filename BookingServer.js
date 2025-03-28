 const hotels = [
    {
        name: "Hotel Paradise",
        description: "A luxurious retreat with stunning views and world-class amenities.",
        price: "$200",
        image: "Images/hotel1.PNG", // Path to local image
        rating: 5,
    },
    {
        name: "Seaside Hotel",
        description: "Relax at this beachfront property with premium rooms and dining options. Wake up to the sound of waves crashing against the shore .",
        price: "$180",
        image: "Images/hotel2.PNG",
        rating: 4,
    },
    {
        name: "Urban Oasis",
        description: "Perfect for business trips, featuring modern decor and high-speed Wi-Fi.",
        price: "$150",
        image: "Images/hotel3.PNG",
        rating: 4,
    },
    {
        name: "Mountain Escape",
        description: "Surrounded by scenic beauty, ideal for nature lovers. Whether you're looking to unwind with a spa treatment",
        price: "$220",
        image: "Images/hotel4.PNG",
        rating: 5,
    },
    {
        name: "City Center Inn",
        description: "Conveniently located in the heart of the city with budget-friendly prices.",
        price: "$100",
        image: "Images/hotel5.PNG",
        rating: 3,
    },
    {
        name: "Heritage Stay",
        description: "A taste of history with elegant rooms and antique decor.",
        price: "$170",
        image: "Images/hotel6.PNG",
        rating: 4,
    },
    {
        name: "Lakeview Lodge",
        description: "Peaceful retreat with breathtaking views of the lake.",
        price: "$190",
        image: "Images/hotel7.PNG",
        rating: 4,
    },
    {
        name: "Budget Haven",
        description: "Affordable and comfortable rooms for budget-conscious travelers.",
        price: "$80",
        image: "Images/hotel8.PNG",
        rating: 3,
    },
    {
        name: "Eco Resort",
        description: "Environmentally friendly resort with green initiatives and organic meals.",
        price: "$250",
        image: "Images/hotel9.PNG",
        rating: 5,
    },
    {
        name: "Luxury Suites",
        description: "Exquisite suites with private pools and personalized services.",
        price: "$300",
        image: "images/hotel10.jpg",
        rating: 5,
    },
];

const homestays = [
    {
        name: "Coorg Coffee Estate Homestay (Coorg, Karnataka)",
        description:"Nestled amidst lush coffee plantations this homestay offers a serene retreat in nature's lap. Guests can enjoy cozy cottages,traditional Coorgi meals,guided estate walks. Ideal for coffee enthusiasts and nature lovers.",
        price: "$90",
        image: "Images/homestay1.PNG",
        rating: 4.5,
    },
   
    {
        name: "The Himalayan Chalet (Manali, Himachal Pradesh)",
        description: "Set in the picturesque Himalayas, this chalet-style homestay boasts wooden interiors, breathtaking mountain views, and a warm, homely atmosphere. Perfect for adventure seekers and peace lovers..",
        price: "$60",
        image: "Images/homestay2.PNG",
        rating: 5,
    },

    {
        name: "Goa Beachside Retreat (North Goa, Goa)",
        description: "Located just a stone’s throw from the beach, this vibrant homestay offers a laid-back vibe with tropical gardens and Portuguese-style architecture. Guests can enjoy fresh seafood and sunset walks on the shore..",
        price: "$70",
        image: "Images/homestay3.PNG",
        rating: 4,
    },

    {
        name: "Rajasthan Haveli Stay (Jaipur, Rajasthan)",
        description: "Experience royal living at this restored haveli, complete with ornate architecture and traditional Rajasthani hospitality. Guests can explore Jaipur’s rich culture and savor authentic local cuisine.",
        price: "$80",
        image: "Images/homestay4.PNG",
        rating: 3.5,
    },

    {
        name: "Tea Garden Bungalow (Munnar, Kerala)",
        description: "Perched in the heart of sprawling tea estates, this charming bungalow offers tranquil stays with panoramic views of the hills. Guests can enjoy plantation tours, tea tasting, and refreshing hikes..",
        price: "$120",
        image: "Images/homestay5.PNG",
        rating: 4,
    },

    {
        name: "Kumaon Heritage Homestay (Nainital, Uttarakhand",
        description: "A heritage property with colonial charm, this homestay offers a peaceful escape in the Kumaon region. Guests can indulge in home-cooked meals, stroll through apple orchards, and enjoy breathtaking valley views..",
        price: "$190",
        image: "Images/homestay6.PNG",
        rating: 3,
    },

    {
        name: "The Bengal Village Homestay (Shantiniketan, West Bengal)",
        description: "Immerse yourself in rural Bengal’s culture with this rustic homestay near Rabindranath Tagore’s university. Guests can experience local crafts, folk music, and traditional Bengali meals",
        price: "$150",
        image: "Images/homestay7.PNG",
        rating: 3.9,
    },

    {
        name: " Sundarbans Mangrove Retreat (Sundarbans, West Bengal)",
        description: "Located amidst the Sundarbans mangroves, this eco-friendly homestay offers a unique wildlife experience. Guests can enjoy boat safaris, spot Bengal tigers, and savor locally sourced seafood..",
        price: "$70",
        image: "Images/homestay8.PNG",
        rating: 4,
    },

    {
        name: "Leh Ladakh Mountain Homestay (Leh, Ladakh)",
        description: "Situated in the cold desert of Ladakh, this homestay provides a cozy refuge for travelers. Guests can enjoy local Ladakhi cuisine, explore monasteries, and marvel at the stunning landscapes.",
        price: "$80",
        image: "Images/homestay9.PNG",
        rating: 4.8,
    },
];
 

const touristGuides = [
    

{
        name:"Mei Ling",
        experience:"Expertise: Culinary and cultural tours in China, including tea ceremonies and regional cuisines.Location: China",
        contact:"00215874699",
        image:"Images/ddd.PNG",
        price:"32$",
     }  ,  
    
     {
        name:"Liam Johnson",
        experience:"Expertise: Adventure and wildlife tours across Africa, including safaris and eco-tourism.Location: Kenya and South Africa.",
        contact:"0098545677",
        image:"Images/ccc.PNG",
        price:"30$",
     }  ,  
    
     {
        name:"Sophia Müller",
        experience:"Expertise: Cultural tours in Germany, Austria, and Switzerland with a focus on castles and Christmas markets.Location: Germany.",
        contact:"225463332000",
        image:"Images/bbb.PNG",
        price:"29k",
     }  ,  
    

    {
        name: "Priya Nair",
        experience: "An escort specializing in culinary and heritage tours across Goa and Kerala. Priya provides personalized recommendations for food and spices, making every tour unique.",
        contact: "9877889775",
        image: "Images/guide4.PNG",
        description: "An expert in culinary and heritage tours across Goa and Kerala.",
        price: "$8",
    
       
    },

    {
        name: "Arjun Singh",
        experience: "Specializes in adventure and wildlife tours, particularly in the Himalayan region. Arjun is a certified trek leader and a wildlife enthusiast with an eye for detail",
        contact: "9988430442",
        image: "Images/guide3.PNG",
        description: "Specializes in adventure and wildlife tours, particularly in the Himalayan region. Arjun is a certified trek leader and a wildlife enthusiast with an eye for detail.",
        price: "$10",
    },

    {
        name: "Meera Sharma",
        experience: "An expert in South India cultural tours, she offers immersive experiences in Kerala, Tamil Nadu, and Karnataka. She’s known for her friendly demeanor and fluency in multiple languages.",
        contact: "9988430411",
        image: "Images/escort2.PNG",
        description:"An expert in South India cultural tours, she offers immersive experiences in Kerala, Tamil Nadu, and Karnataka. She’s known for her friendly demeanor and fluency in multiple languages.",
        price:"5$",
    },

    {
        name: "Rajesh Kumar",
    experience: "A seasoned tour escort with 15+ years of experience specializing in North India tours, including Delhi, Jaipur, and Agra. Known for his engaging storytelling and knowledge of historical sites..",
        contact: "9646599109",
        image: "Images/guide1.PNG",
        price:"5$",

    },
     {
        name:"James Peterson",
        experience:"Historical tours in Europe, specializing in ancient Roman and Greek ruins.(Italy and Greece)",
        contact:"8545553232",
        image:"Images/aaa.PNG",
        price:"16$",
     } ,   
    
     {
        name:"David Walker",
        experience:"Expertise: Wine and culinary tours in France, specializing in Bordeaux and Burgundy regions.Location: France.",
        contact:"014785200",
        image:"Images/eee.PNG",
        price:"43$",
     }  ,  
    
     
    

];
    
        let currentHotelIndex = 0;
        let currentHomestayIndex = 0;
        let currentGuideIndex = 0;
    
        function loadDetails() {
            renderSlider("hotel-slider", hotels, currentHotelIndex);
            renderSlider("homestay-slider", homestays, currentHomestayIndex);
            renderSlider("tourist-guide-slider", touristGuides, currentGuideIndex);
        }
    
        function renderSlider(containerId, items, startIndex) {
            const slider = document.getElementById(containerId);
            slider.innerHTML = "";
            items.slice(startIndex, startIndex + 3).forEach((item, index) => {
                const div = document.createElement("div");
                div.className = "slide";
                div.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.description || item.experience}</p>
    <p>Contact: <strong>${item.contact || 'N/A'}</strong></p>
    <p>Price: ${item.price}</p>
    <div class="card-footer">
        <button class="book-btn">Book Now</button>
    </div>
`;

                
                slider.appendChild(div);
            });
    
            // Add event listeners to "Book Now" buttons
            const buttons = slider.querySelectorAll(".book-btn");
            buttons.forEach(button => {
                button.addEventListener("click", () => {
                    alert("Not available right now");
                });
            });
        }
    
        function navigateSlider(type, direction) {
            const maxIndex =
                type === "hotels"
                    ? hotels.length
                    : type === "homestays"
                    ? homestays.length
                    : touristGuides.length;
            const itemsPerPage = 3;
    
            if (type === "hotels") {
                currentHotelIndex += direction * itemsPerPage;
                if (currentHotelIndex < 0) currentHotelIndex = 0;
                if (currentHotelIndex >= maxIndex) currentHotelIndex = maxIndex - itemsPerPage;
                renderSlider("hotel-slider", hotels, currentHotelIndex);
            } else if (type === "homestays") {
                currentHomestayIndex += direction * itemsPerPage;
                if (currentHomestayIndex < 0) currentHomestayIndex = 0;
                if (currentHomestayIndex >= maxIndex) currentHomestayIndex = maxIndex - itemsPerPage;
                renderSlider("homestay-slider", homestays, currentHomestayIndex);
            } else {
                currentGuideIndex += direction * itemsPerPage;
                if (currentGuideIndex < 0) currentGuideIndex = 0;
                if (currentGuideIndex >= maxIndex) currentGuideIndex = maxIndex - itemsPerPage;
                renderSlider("tourist-guide-slider", touristGuides, currentGuideIndex);
            }
        }
    
        // Load initial details on page load
        window.onload = loadDetails;
    

    // ional hotel booking button code

    document.addEventListener("DOMContentLoaded", function () {
    // Select all special fare buttons
    const specialFareButtons = document.querySelectorAll(".special-fares button");
    
    // Add click event to show "Available soon" prompt
    specialFareButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Available soon");
        });
    });

    // Select the "Book Now" button and add an event listener
    const bookNowButton = document.querySelector(".book-BTN1");
    if (bookNowButton) {
        bookNowButton.addEventListener("click", function () {
            alert("Booking will be accepted soon");
        });
    }

    // Select the "Copy Code" button and add an event listener
    const copyCodeButton = document.querySelector(".code-section");
    if (copyCodeButton) {
        copyCodeButton.addEventListener("click", function () {
            alert("Can't copy right now");
        });
    }
});



     //flight
     document.addEventListener("DOMContentLoaded", function () {
  const tripTypeRadios = document.querySelectorAll('input[name="trip-type"]');
  const travelerClassCheckboxes = document.querySelectorAll('.travelers-class input[type="checkbox"]');
  const searchButton = document.querySelector('.search-button');
  const inputFields = document.querySelectorAll('.input');

  // Add event listeners to trip type radio buttons
  tripTypeRadios.forEach((radio) => {
    radio.addEventListener('click', function () {
      let message = '';
      if (this.value === 'one-way') {
        message = 'Please verify the details for your one-way flight.';
      } else if (this.value === 'round-trip') {
        message = 'Please verify the details for your round trip flight.';
      } else if (this.value === 'multi-city') {
        message = 'Please verify the details for your multi-city flight.';
      }
      alert(message);
    });
  });

  // Ensure only one traveler class is selected
  travelerClassCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        travelerClassCheckboxes.forEach((cb) => {
          if (cb !== this) cb.checked = false;
        });
      }
    });
  });

  // Set Economy as default selection
  const economyCheckbox = document.querySelector('.travelers-class input[type="checkbox"][value="economy"]');
  if (economyCheckbox) {
    economyCheckbox.checked = true;
  }

  // Function to check if all fields are filled
  function validateFields() {
    let allFieldsFilled = true;
    inputFields.forEach((input) => {
      if (!input.value.trim()) {
        allFieldsFilled = false;
        input.classList.add('error-border'); // Add red border
      } else {
        input.classList.remove('error-border'); // Remove red border if filled
      }
    });
    return allFieldsFilled;
  }

  // Disable the search button initially
  searchButton.disabled = true;

  // Enable search button only when all fields are filled
  inputFields.forEach((input) => {
    input.addEventListener("input", function () {
      searchButton.disabled = !validateFields();
    });
  });

  // Add event listener to the search button
  searchButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (!validateFields()) {
      alert('Please ensure all required fields are completed.');
      return;
    }

    // Show loading message
    searchButton.textContent = "Searching...";
    searchButton.disabled = true;

    setTimeout(() => {
      alert('Currently experiencing technical difficulties.');
      searchButton.textContent = "Search";
      searchButton.disabled = false;
    }, 2000);
  });
});


// trainn
document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showSlide(index) {
        sliderItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : sliderItems.length - 1;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex < sliderItems.length - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });

    // Show the first slide by default
    showSlide(currentIndex);

    // Select form fields and buttons
    const inputFields = document.querySelectorAll('.form-row-12 select, .form-row-12 input');
    const searchButton = document.querySelector('.search-btn');
    const checkStatusBtn = document.getElementById("checkStatusBtn");
    const checkStatusBtn12 = document.getElementById("checkStatusBtn12");

    // Function to check if all required fields are filled
    function validateFields() {
        let allFieldsFilled = true;
        inputFields.forEach((input) => {
            if (!input.value.trim()) {
                allFieldsFilled = false;
                input.classList.add('error-border'); // Highlight empty fields
            } else {
                input.classList.remove('error-border'); // Remove highlight if filled
            }
        });
        return allFieldsFilled;
    }

    // Random responses for Search Button
    const searchResponses = [
        "No trains available for the selected route.",
        "Train schedule is being updated. Try again later.",
        "Server is busy, please try again in a few minutes.",
        "The requested train is delayed. Check again after some time.",
        "No results found for the selected date. Try a different date."
    ];

    // Search Button Click Event
    searchButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (!validateFields()) {
            alert('Complete all the information, please.');
            return;
        }

        // Show loading state
        searchButton.textContent = "Searching...";
        searchButton.classList.add("loading");

        setTimeout(() => {
            // Show a random message from searchResponses
            const randomMessage = searchResponses[Math.floor(Math.random() * searchResponses.length)];
            alert(randomMessage);

            searchButton.textContent = "Search";
            searchButton.classList.remove("loading");
        }, 2000);
    });

    // Check PNR Status Button Click Event
    if (checkStatusBtn) {
        checkStatusBtn.addEventListener("click", function () {
            const pnrNumber = document.getElementById("pnrNumber").value;
            const travelDate = document.getElementById("pnrTravelDate").value;

            if (!pnrNumber || pnrNumber.length !== 10) {
                alert("PNR number must be 10 digits.");
                return;
            }

            if (!travelDate) {
                alert("Please select a travel date.");
                return;
            }

            alert("Not available right now.");
        });
    } else {
        console.error("Check Status button not found!");
    }

    // Live Train Status Button Click Event
    if (checkStatusBtn12) {
        checkStatusBtn12.addEventListener("click", function () {
            if (!validateFields()) {
                alert('Complete all the information, please.');
                return;
            }
            alert("Not available right now.");
        });
    } else {
        console.error("Live Train Status button not found!");
    }
});

// Add CSS for error highlighting and button states dynamically
const style = document.createElement('style');
style.innerHTML = `
  .error-border {
    border: 2px solid red !important;
  }
  .search-btn.loading {
    background: linear-gradient(45deg, #ff4500, #ffa500);
    color: white;
    cursor: progress;
  }
`;
document.head.appendChild(style);


// bus booking functionality
document.addEventListener("DOMContentLoaded", function () {
    const travelWithGroup = document.getElementById("group-travel");
    const needBus = document.getElementById("need-bus");
    const oneWayButton = document.querySelector(".trip-option.active");
    const roundTripButton = document.querySelectorAll(".trip-option")[1];
    const exploreBusesBtn = document.getElementById("exploreBusesBtn");
    const modal = document.getElementById("popupModal");
    const modalMessage = document.getElementById("modalMessage");
    const closeModal = document.querySelector(".close");

    // Function to ensure only one checkbox is selected at a time
    function toggleCheckbox(selectedCheckbox, otherCheckbox) {
        if (selectedCheckbox.checked) {
            otherCheckbox.checked = false; // Uncheck the other option
        }
    }

    // Event listeners for checkboxes
    travelWithGroup.addEventListener("change", function () {
        toggleCheckbox(travelWithGroup, needBus);
        validateSelection();
    });

    needBus.addEventListener("change", function () {
        toggleCheckbox(needBus, travelWithGroup);
        validateSelection();
    });

    // Event listeners for trip selection (One Way / Round Trip)
    oneWayButton.addEventListener("click", function () {
        setTripSelection(oneWayButton, roundTripButton);
        validateSelection();
    });

    roundTripButton.addEventListener("click", function () {
        setTripSelection(roundTripButton, oneWayButton);
        validateSelection();
    });

    // Function to set active trip option
    function setTripSelection(selectedButton, otherButton) {
        selectedButton.classList.add("active");
        otherButton.classList.remove("active");
    }

    // Function to display modal popup
    function showModal(message) {
        modalMessage.innerText = message;
        modal.style.display = "block";
    }

    // Close modal when "X" is clicked
    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    // Close modal when clicking outside modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Function to validate selection before showing modal
    function validateSelection() {
        const isOneWay = oneWayButton.classList.contains("active");
        const isRoundTrip = roundTripButton.classList.contains("active");
        const isTravelWithGroup = travelWithGroup.checked;
        const isNeedBus = needBus.checked;

        if (!isTravelWithGroup && !isNeedBus) {
            showModal("Please select 'Travel with Group' or 'Need a Bus' before proceeding.");
            return;
        }

        if (!isOneWay && !isRoundTrip) {
            showModal("Please select 'One Way' or 'Round Trip' before proceeding.");
            return;
        }

        if (isTravelWithGroup && isOneWay) {
            showModal("Fill the information for One Way Travel.");
        } else if (isTravelWithGroup && isRoundTrip) {
            showModal("Fill the information for Round Trip Travel.");
        } else if (isNeedBus && isOneWay) {
            showModal("Fill the information for One Way Bus Hire.");
        } else if (isNeedBus && isRoundTrip) {
            showModal("Fill the information for Round Trip Bus Hire.");
        }
    }

    // 🚀 Show popup when "Explore Buses" is clicked
    exploreBusesBtn.addEventListener("click", function () {
        showModal(
            "We’re currently unable to book this trip, but don’t worry—the world is full of amazing places waiting for you. Let us help you explore other incredible adventures! 🚀✨"
        );
    });
});

// code for adding functionality in cabs

document.addEventListener("DOMContentLoaded", function () {
    // Get all tab buttons
    const tabs = document.querySelectorAll(".tab");

    // Get the search button
    const searchButton = document.querySelector(".search-button11");

    // Get all modals
    const oneWayModal = document.getElementById("one-way-modal");
    const roundTripModal = document.getElementById("round-trip-modal");
    const airportTransfersModal = document.getElementById("airport-transfers-modal");
    const hourlyRentalsModal = document.getElementById("hourly-rentals-modal");
    const errorModal = document.getElementById("error-modal");
    const unavailableModal = document.getElementById("unavailable-modal");

    // Get all close buttons
    const closeButtons = document.querySelectorAll(".close-Taxi");

    // Function to open a modal
    function openModal(modal) {
        modal.style.display = "block";
    }

    // Function to close a modal
    function closeModal(modal) {
        modal.style.display = "none";
    }

    // Add event listeners to tab buttons
    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            if (tab.textContent === "Outstation One-Way") {
                openModal(oneWayModal);
            } else if (tab.textContent === "Outstation Round-Trip") {
                openModal(roundTripModal);
            } else if (tab.textContent === "Airport Transfers") {
                openModal(airportTransfersModal);
            } else if (tab.textContent === "Hourly Rentals") {
                openModal(hourlyRentalsModal);
            }
        });
    });

    // Add event listener to the search button
    searchButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form input values
        const pickupLocation = document.getElementById("pickup-location").value;
        const pickupDate = document.getElementById("pickup-date").value;
        const pickupTime = document.getElementById("pickup-time").value;

        // Check if all fields are filled
        if (!pickupLocation || !pickupDate || !pickupTime) {
            // Show the error modal if any field is empty
            openModal(errorModal);
        } else {
            // Show the unavailable modal if all fields are filled
            openModal(unavailableModal);
        }
    });

    // Add event listeners to close buttons
    closeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const modal = button.closest(".modal-Taxi");
            closeModal(modal);
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target.classList.contains("modal-Taxi")) {
            closeModal(event.target);
        }
    });
});