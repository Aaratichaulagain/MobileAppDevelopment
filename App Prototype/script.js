// ================= Hamburger Menu Functions =================
window.openMenu = function () {
  const sideMenu = document.getElementById("sideMenu");
  if (sideMenu) sideMenu.style.width = "220px";
};

window.closeMenu = function () {
  const sideMenu = document.getElementById("sideMenu");
  if (sideMenu) sideMenu.style.width = "0";
};

// ================= Page Navigation =================
window.go = function (page) {
  window.location.href = page;
};

// ================= Auth & Prototype Functions =================

// Login form (login.html)
window.login = function (event) {
  event.preventDefault();

  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value.trim();

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  console.log("Login (prototype):", { email, password });
  alert("Login successful! (prototype)");
  go("index.html");
};

// Signup form (signup.html)
window.signup = function (event) {
  event.preventDefault();

  const name = document.getElementById("name")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value.trim();
  const confirmPassword = document.getElementById("confirmPassword")?.value.trim();

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  console.log("Signup (prototype):", { name, email });
  alert("Account created! (prototype)");
  go("login.html");
};

// ================= Book Now Button (Auto-fill Vehicle) =================
window.bookNow = function (vehicleName) {
  localStorage.setItem("selectedVehicle", vehicleName);
  go("booking.html");
};

// ================= Firebase Setup =================
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpRNoZrzK7PIwlNuWcumPpqY10jIbPWzg",
  authDomain: "mobileappdevelopment-927d8.firebaseapp.com",
  databaseURL: "https://mobileappdevelopment-927d8-default-rtdb.firebaseio.com",
  projectId: "mobileappdevelopment-927d8",
  storageBucket: "mobileappdevelopment-927d8.firebasestorage.app",
  messagingSenderId: "920848990970",
  appId: "1:920848990970:web:3ea7deff4eea9d841a3f43"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ================= Contact Form Submission =================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const contactRef = ref(db, "contactMessages");
    const newMessageRef = push(contactRef);

    set(newMessageRef, {
      name,
      email,
      message,
      date: new Date().toString()
    });

    const statusEl = document.getElementById("status");
    if (statusEl) statusEl.innerText = "Message Sent Successfully!";

    contactForm.reset();
  });
}

// ================= Booking Form Submission =================
const bookingForm = document.getElementById("bookingForm");

// Auto-fill vehicle if selected from Book Now
const savedVehicle = localStorage.getItem("selectedVehicle");
if (savedVehicle) {
  const vehicleSelect = document.getElementById("vehicle");
  if (vehicleSelect) vehicleSelect.value = savedVehicle;
}

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const bookingData = {
      vehicle: document.getElementById("vehicle").value,
      fullName: document.getElementById("fullName").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      email: document.getElementById("email").value.trim(),
      pickup: document.getElementById("pickup").value.trim(),
      drop: document.getElementById("drop").value.trim(),
      pickupDate: document.getElementById("pickupDate").value,
      pickupTime: document.getElementById("pickupTime").value,
      duration: document.getElementById("duration").value,
      idType: document.getElementById("idType").value,
      idNumber: document.getElementById("idNumber").value.trim(),
      payment: document.getElementById("payment").value,
      notes: document.getElementById("notes").value.trim(),
      createdAt: new Date().toString()
    };

    // Basic validation
    for (let key in bookingData) {
      if (!bookingData[key] && key !== "notes") {
        alert("Please fill in all required fields.");
        return;
      }
    }

    const bookingRef = ref(db, "bookings");
    const newBookingRef = push(bookingRef);

    set(newBookingRef, bookingData);

    const bookingStatus = document.getElementById("bookingStatus");
    if (bookingStatus) {
      bookingStatus.innerText = "Booking Confirmed Successfully!";
    }

    bookingForm.reset();
    localStorage.removeItem("selectedVehicle");
  });
}
