function addNewPatient(patient){
    let tr = createTr(patient);

    clearErrorMessages();

    let errors = [];

    if(validatePatient(patient.name, patient.weight, patient.height, patient.bf)){
        let tablePatients = document.getElementById("patients-table");
        tablePatients.appendChild(tr);
        reloadForm();
    } else {
        errors = getPatientErrors(patient);
        showErrorMessages(errors);    
    }
}

function getPatientErrors(patient) {
    let patientErrors = []; 
    
    if(!validateName(patient.name)) patientErrors.push("Invalid name!");
    if(!validateWeight(patient.weight)) patientErrors.push("Invalid weight!");
    if(!validateHeight(patient.height)) patientErrors.push("Invalid height!");
    if(!validateBF(patient.bf)) patientErrors.push("Invalid bf!");

    return patientErrors;
}

function showErrorMessages(errors) {
    let ul = document.querySelector("#error-messages");
    errors.forEach(error => {
        let li = document.createElement("li");
        li.classList.add("error-message");
        li.textContent = error;
        ul.appendChild(li);
    });
}

function clearErrorMessages() {
    let ul = document.querySelector("#error-messages");
    ul.innerHTML = "";
}

function getNewPatientInfo(form){

    let newPatientInfo = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        bf: form.bf.value, 
        bmi: getBMI(form.weight.value, form.height.value)
    }

    return newPatientInfo;
}

function createTd(tdContent, tdClass){
    let td = document.createElement("td");
    td.textContent = tdContent;
    td.classList.add(tdClass);
    return td;
}

function createTr(patient){
    let tr = document.createElement("tr");
    tr.classList.add("patient");
    
    tr.appendChild(createTd(patient.name, "name-info"));
    tr.appendChild(createTd(patient.weight, "weight-info"));
    tr.appendChild(createTd(patient.height, "height-info"));
    tr.appendChild(createTd(patient.bf, "fat-info"));
    tr.appendChild(createTd(patient.bmi, "bmi-info"));

    return tr;
}

function reloadForm(){
    let form = document.getElementById("form-add-patient");
    form.reset();
}

let buttonAddPatient = document.getElementById("add-patient");

let form = document.getElementById("form-add-patient");

buttonAddPatient.addEventListener("click", (event) => {

    event.preventDefault();

    let newPatient = getNewPatientInfo(form);

    addNewPatient(newPatient);
    
});