// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCjYyHZODgus5bnDXEdNWNUTlk8P4EEh_U",
    authDomain: "kwitter-4decf.firebaseapp.com",
    databaseURL: "https://kwitter-4decf-default-rtdb.firebaseio.com",
    projectId: "kwitter-4decf",
    storageBucket: "kwitter-4decf.appspot.com",
    messagingSenderId: "422012550679",
    appId: "1:422012550679:web:4d4692b7ae50a1a52da652"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}