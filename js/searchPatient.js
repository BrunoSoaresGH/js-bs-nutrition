let searchInput = document.getElementById("filter-table");

searchInput.addEventListener("input", function () {
    let patients = document.querySelectorAll(".patient"); 

    if(this.value.length > 0) {
        patients.forEach(patient => {
            let tdName = patient.querySelector(".name-info");
            let name = tdName.textContent;
            let expression = new RegExp(this.value, "i");
            if(!expression.test(name)){
                patient.classList.add("invisible");
            } else {
                patient.classList.remove("invisible");
            }
        });
    } else {
        patients.forEach(patient => {
            patient.classList.remove("invisible");
        });
    }
});