let tablePatients = document.querySelector("#table-patients");

tablePatients.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(() => {
        event.target.parentNode.remove(); 
    }, 1000);    
    
});