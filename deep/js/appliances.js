// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAQg1yPIwVR5-ENfPWSRK20Sdd13TYW93I",
	authDomain: "fir-webapp-b7a0c.firebaseapp.com",
	databaseURL: "https://fir-webapp-b7a0c-default-rtdb.firebaseio.com",
	projectId: "fir-webapp-b7a0c",
	storageBucket: "fir-webapp-b7a0c.appspot.com",
	messagingSenderId: "802147609266",
	appId: "1:802147609266:web:42ee2fa877c10b4f7cf7ab",
	measurementId: "G-RFFD0ST5MK"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
	var database = firebase.database();
	var LED_STATUS;
	var LED_STATUS2;
	var LED_STATUS3;
	var LED_STATUS4;
	database.ref().on("value", function(snap){
		LED_STATUS = snap.val().LED_STATUS;
		LED_STATUS2 = snap.val().LED_STATUS2;
		LED_STATUS3 = snap.val().LED_STATUS3;
		LED_STATUS4 = snap.val().LED_STATUS4;
		if(LED_STATUS == "1"){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
		if(LED_STATUS2 == "1"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
		}
		if(LED_STATUS3 == "1"){
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
		} else {
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
		}
		if(LED_STATUS4 == "1"){
			document.getElementById("unact3").style.display = "none";
			document.getElementById("act3").style.display = "block";
		} else {
			document.getElementById("unact3").style.display = "block";
			document.getElementById("act3").style.display = "none";
		}
	});

	$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("LED_STATUS");
		if(LED_STATUS == "1"){
			firebaseRef.set("0");
			LED_STATUS = "0";
		} else {
			firebaseRef.set("1");
			LED_STATUS = "1";
		}
	})
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref().child("LED_STATUS2");
		if(LED_STATUS2 == "1"){
			firebaseRef.set("0");
			LED_STATUS2 = "0";
		} else {
			firebaseRef.set("1");
			LED_STATUS2 = "1";
		}
	})
	$(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref().child("LED_STATUS3");
		if(LED_STATUS3 == "1"){
			firebaseRef.set("0");
			LED_STATUS3 = "0";
		} else {
			firebaseRef.set("1");
			LED_STATUS3 = "1";
		}
	})
	$(".toggle-btn3").click(function(){
		var firebaseRef = firebase.database().ref().child("LED_STATUS4");
		if(LED_STATUS4 == "1"){
			firebaseRef.set("0");
			LED_STATUS4 = "0";
		} else {
			firebaseRef.set("1");
			LED_STATUS4 = "1";
		}
	})
});