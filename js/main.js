function validatePatient(weight, height) {
    if(weight < 0 || weight > 600 || height < 0 || height > 3){        
        return false;    
    }
    return true;
}

function getBMI(weight, height) {
    if(validatePatient(weight, height)) return (weight/(height*height)).toFixed(2);
    return "Invalid BMI"; 
}

let patients = document.querySelectorAll(".patient");

patients.forEach((patient) => {    
    let patientWeight = patient.querySelector(".weight-info").textContent;
    let patientHeight = patient.querySelector(".height-info").textContent;

    if(validatePatient(patientWeight, patientHeight)) {
        let patientBMIValue = getBMI(patientWeight,patientHeight);
        let patientBMI = patient.querySelector(".bmi-info");
        patientBMI.textContent = patientBMIValue;
    } else {
        let patientBMI = patient.querySelector(".bmi-info");
        patientBMI.textContent = "Invalid BMI";
        patient.classList.add('invalid-patient');   
    }
});