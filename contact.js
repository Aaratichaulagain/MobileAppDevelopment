// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getDatabase, ref, set, push, get, update, remove 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpRNoZrzK7PIwlNuWcumPpqY10jIbPWzg",
  authDomain: "mobileappdevelopment-927d8.firebaseapp.com",
  databaseURL: "https://mobileappdevelopment-927d8-default-rtdb.firebaseio.com",
  projectId: "mobileappdevelopment-927d8",
  storageBucket: "mobileappdevelopment-927d8.firebasestorage.app",
  messagingSenderId: "920848990970",
  appId: "1:920848990970:web:3ea7deff4eea9d841a3f43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


// Write contact form message
function writeContactMessage(name, email, message) {
  const contactRef = ref(db, "contactMessages");
  const newMessageRef = push(contactRef);

  set(newMessageRef, {
    name: name,
    email: email,
    message: message,
    date: new Date().toString()
  })
  .then(() => {
    console.log("Message Sent Successfully");
  })
  .catch((error) => {
    console.error("Error sending message:", error);
  });
}



function readContactMessages() {
  const contactRef = ref(db, "contactMessages");

  get(contactRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      console.log(childSnapshot.key, childSnapshot.val());
    });
  });
}



function updateContactMessage(messageId, updatedData) {
  const specificRef = ref(db, "contactMessages/" + messageId);

  update(specificRef, updatedData)
    .then(() => {
      console.log("Message updated successfully");
    })
    .catch((error) => {
      console.error("Error updating message:", error);
    });
}



function deleteContactMessage(messageId) {
  const specificRef = ref(db, "contactMessages/" + messageId);

  remove(specificRef)
    .then(() => {
      console.log("Message deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting message:", error);
    });
}



document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  writeContactMessage(name, email, message);

  document.getElementById("status").innerText = "Message Sent!";
  document.getElementById("contactForm").reset();
});
