let buttonGetPatients = document.getElementById("get-patients");

buttonGetPatients.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", () => {

        if(xhr.status == 200) {
            let response = xhr.responseText;
            
            let patients = JSON.parse(response);
            
            patients.forEach(patient => {
                addNewPatient(patient);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();

});