let patients = document.querySelectorAll(".patient");

patients.forEach((patient) => {
    let validWeight = true;
    let validHeight = true;

    let patientWeight = patient.querySelector(".weight-info").textContent;
        
    if(patientWeight < 0 || patientWeight > 600){        
        validWeight = false;
    }

    let patientHeight = patient.querySelector(".height-info").textContent;
    
    if(patientHeight < 0 || patientHeight > 3){
        validHeight = false;
    }

    if(validWeight && validHeight) {
        let patientBMIValue = (patientWeight / (patientHeight*patientHeight)).toFixed(2);
        let patientBMI = patient.querySelector(".bmi-info");
        patientBMI.textContent = patientBMIValue;
    } else {
        let patientBMI = patient.querySelector(".bmi-info");
        patientBMI.textContent = "Invalid BMI";
        patient.classList.add('invalid-patient');   
    }
});