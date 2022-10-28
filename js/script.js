const email = document.getElementById("email");
const addbtn = document.getElementById("btn");

const database = firebase.database();
const rootRef = database.ref('users');

addbtn.addEventListener('click', (e) => {
    e.preventDefault();
    rootRef.child(email.value).set({
        email: email.value,
    });
});

function keep() {
    email = document.getElementById("email").value;
    firebase.datebase().ref("/").child(Name).update({
        email : email,
        pupose : "adding gmail"
    });
}

// var messagesRef = firebase.database().ref('Collected Data')
//         document.getElementById('contactForm').addEventListener('submit', submitForm);
//         function submitForm(e) {
//             e.preventDefault();

//             // Get values
//             var email = getInputVal('email');

//             saveMessage(email);
//             document.getElementById('contactForm').reset();
//         }

//         // Function to get get form values
//         function getInputVal(id) {
//             return document.getElementById(id).value;
//         }

//         // Save message to firebase
//         function saveMessage(email) {
//             var newMessageRef = messagesRef.push();
//             newMessageRef.set({
//                 email: email,
//             });
//         }


// $(".btn").click(function(){
//     var email = $("#email").val();
//     var rootRef = firebase.datebase().ref().child("user");
//     var userId = firebase.auth().currentUser.uid;
//     var userRef = rootRef.child(userId);

//     if ( email !=""){
//         var userData = {
//             "email" : email,
//         };
//         userRef.set(userData, function(error){
//             if(error){
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 console.log(errorCode);
//                 console.log(errorMessage);
//                 window.alert("message: " + errorMessage);
//             }else{
//                 window.location.href = "index.html";
//             }
//         });
//     }
//     else
//     {
//         window.alert("forn is incomplete. please fill out");
//     }
// });

//vailation

    function validate (){
        var email = document.getElementById("email").value;
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
        if (email.match(regex)) {         
               alert("You have provided a valid Email ID")
               return true;

        }
        else{
            alert("sorry incorrect Email ID")
            return false ;
        }

    }
