function validatePatient(weight, height) {
    if(weight < 0 || weight > 600 || height < 0 || height > 3){        
        return false;    
    }
    return true;
}

function addNewPatient(name, weight, height, bf){
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.textContent = name;

    let tdWeight = document.createElement("td");
    tdWeight.textContent = weight;

    let tdHeight = document.createElement("td");
    tdHeight.textContent = height;

    let tdBF = document.createElement("td");
    tdBF.textContent = bf;

    let tdBMI = document.createElement("td");

    if(!validatePatient(weight, height)){
        tdBMI.textContent = "Invalid BMI";
        tr.classList.add('invalid-patient');        
    } else {
        tdBMI.textContent = (weight/(height*height)).toFixed(2);
    }

    tr.appendChild(tdName);
    tr.appendChild(tdWeight);
    tr.appendChild(tdHeight);
    tr.appendChild(tdBF);
    tr.appendChild(tdBMI);

    let tablePatients = document.getElementById("patients-table");

    tablePatients.appendChild(tr);
}

let patients = document.querySelectorAll(".patient");

patients.forEach((patient) => {    
    let patientWeight = patient.querySelector(".weight-info").textContent;
    let patientHeight = patient.querySelector(".height-info").textContent;

    if(validatePatient(patientWeight, patientHeight)) {
        let patientBMIValue = (patientWeight / (patientHeight*patientHeight)).toFixed(2);
        let patientBMI = patient.querySelector(".bmi-info");
        patientBMI.textContent = patientBMIValue;
    } else {
        let patientBMI = patient.querySelector(".bmi-info");
        patientBMI.textContent = "Invalid BMI";
        patient.classList.add('invalid-patient');   
    }
});

let buttonAddPatient = document.getElementById("add-patient");

buttonAddPatient.addEventListener("click", (event) => {

    event.preventDefault();

    let nameValue = document.getElementById("name").value;
    let weightValue = document.getElementById("weight").value;
    let heightValue = document.getElementById("height").value;
    let bfValue = document.getElementById("bf").value;

    addNewPatient(nameValue, weightValue, heightValue, bfValue);
});

