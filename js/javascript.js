

function scrollToContact() {

  document.getElementById("contact")
  .scrollIntoView({ behavior: "smooth" });

};

function sendMessage(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let message =
document.getElementById("message").value;

 document.getElementById("name").value = "";
 document.getElementById("email").value = "";
 document.getElementById("message").value = "";

let whatsappURL =
"https://wa.me/919069908549?text="
+ "Name: " + name + "%0a"
+ "Email: " + email + "%0a"
+ "Message: " + message;

window.open(whatsappURL,"_blank");

}

