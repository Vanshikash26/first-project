document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("message").textContent = "Thanks for your message!";
});
