function addNewPatient(patient){
    let tr = createTr(patient);

    let tablePatients = document.getElementById("patients-table");

    tablePatients.appendChild(tr);
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

let buttonAddPatient = document.getElementById("add-patient");

let form = document.getElementById("form-add-patient");

buttonAddPatient.addEventListener("click", (event) => {

    event.preventDefault();

    let newPatient = getNewPatientInfo(form);

    addNewPatient(newPatient);

    form.reset();
});