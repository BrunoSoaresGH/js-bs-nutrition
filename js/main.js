function validateName(name) {
    return name.length > 0;
}

function validateWeight(weight) {
    return (weight > 0 && weight < 600); 
}

function validateHeight(height) {
    return (height > 0 && height < 3); 
}

function validateBF(bf) {
    return (bf > 0 && bf < 70);
}

function validatePatient(name, weight, height, bf) {
    return validateName(name) && validateWeight(weight) && validateHeight(height) && validateBF(bf);
}

function getBMI(weight, height) {
    if(validateWeight(weight) && validateHeight(height)) return (weight/(height*height)).toFixed(2);
    return "Invalid BMI"; 
}

let patients = document.querySelectorAll(".patient");

patients.forEach((patient) => {    
    let patientWeight = patient.querySelector(".weight-info").textContent;
    let patientHeight = patient.querySelector(".height-info").textContent;

    if(validateWeight(patientWeight) && validateHeight(patientHeight)) {
        let patientBMIValue = getBMI(patientWeight,patientHeight);
        let patientBMI = patient.querySelector(".bmi-info");
        patientBMI.textContent = patientBMIValue;
    } else {
        let patientBMI = patient.querySelector(".bmi-info");
        patientBMI.textContent = "Invalid BMI";
        patient.classList.add('invalid-patient');   
    }
});