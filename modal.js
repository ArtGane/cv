var modal = document.getElementById('modal');
var contact = document.getElementById('contact');

function closeModal() {
    modal.style.display = "none";
}

contact.onclick = function(event) {
   modal.style.display = "block";
}
