export function validatePatient(patient) {
    //accessing panel to access error section of HTML
    var errorArray = [];  
    //REQUIRED for first name
    if (!checkRequired(patient.firstName)) {
        errorArray.push('First name is required.');
    }
    //REQUIRED for last name
    if (!checkRequired(patient.lastName)) {
        errorArray.push('Last name is required.');
    }
    //REQUIRED for social security number
    if (!checkRequired(patient.ssn)) {
        errorArray.push('Social security number is required.');
    }
    //REQUIRED for street
    if (!checkRequired(patient.address.street)) {
        errorArray.push('Street is required.');
    }
    //REQUIRED for city
    if (!checkRequired(patient.address.city)) {
        errorArray.push('City is required.');
    }
    //REQUIRED for state
    if (!checkRequired(patient.address.state)) {
        errorArray.push('State is required.');
    }
    //REQUIRED for postal code
    if (!checkRequired(patient.address.postal)) {
        errorArray.push('Postal code is required.');
    }
    //REQUIRED for age
    if (!checkRequired(patient.age)) {
        errorArray.push('Age is required.');
    }
    //REQUIRED for height
    if (!checkRequired(patient.lastName)) {
        errorArray.push('Last name is required.');
    }
    //REQUIRED for weight
    if (!checkRequired(patient.weight)) {
        errorArray.push('Weight is required.');
    }
    //REQUIRED for insurance
    if (!checkRequired(patient.insurance)) {
        errorArray.push('Insurance is required.');
    }
    //REQUIRED for gender
    if (!checkRequired(patient.gender)) {
        errorArray.push('Gender is required.');
    }
    //NAME for name
    if (checkName(patient.firstName)) {
        errorArray.push('First name must be alphabetic- hyphens and apostrophes are allowed.');
    }
    //NAME for name
    if (checkName(patient.lastName)) {
        errorArray.push('Last name must be alphabetic- hyphens and apostrophes are allowed.');
    }
    //GENDER for gender
    if (checkGender(patient.gender)) {
        errorArray.push('Gender must be one of these: male, female, or other.');
    }
    //SSN for social security number
    if (checkSSN(patient.ssn)) {
        errorArray.push('Social Security Number must meet this format: 217-45-4050');
    }
    //NUMERIC for age
    if (checkNumeric(patient.age)) {
        errorArray.push('Age must be a number.');
    }
    //NUMERIC for height
    if (checkNumeric(patient.height)) {
        errorArray.push('Height must be a number.');
    }
    //NUMERIC for weight
    if (checkNumeric(patient.weight)) {
        errorArray.push('Weight must be a number.');
    }
    //POSTAL CODE for postal
    if (checkZipCode(patient.address.postal)) {
        errorArray.push('Postal code must be a valid zip code.');
    }
    //STATE for state
    if (validateState(patient.address.state)) {
        errorArray.push('State must be a valid state.');
    }
    return errorArray;
}

export function validateEncounter(encounter) {
    //accessing panel to access error section of HTML
    var errorArray = [];
    //REQUIRED for visit code
    if (!checkRequired(encounter.visitCode)) {
        errorArray.push('Office visit code is required.');
    }
    //REQUIRED for health insurance provider
    if (!checkRequired(encounter.provider)) {
        errorArray.push('Health insurance provider is required.');
    }
    //REQUIRED for date
    if (!checkRequired(encounter.billingCode)) {
        errorArray.push('Billing code is required.');
    }
    //REQUIRED for ICD10 code
    if (!checkRequired(encounter.icd10)) {
        errorArray.push('ICD10 code is required.');
    }
    //REQUIRED for total cost
    if (!checkRequired(encounter.totalCost)) {
        errorArray.push('Total cost is required.');
    }
    //REQUIRED for copay
    if (!checkRequired(encounter.copay)) {
        errorArray.push('Copay is required.');
    }
    //REQUIRED for chief complaint
    if (!checkRequired(encounter.chiefComplaint)) {
        errorArray.push('Chief complaint is required.');
    }
    //REQUIRED for date
    if (!checkRequired(encounter.date)) {
        errorArray.push('Date is required.');
    }
    //VISIT CODE for visit code
    if (checkVisitCode(encounter.visitCode)) {
        errorArray.push('Invalid visit code. Must meet this format: letter, number, letter, space, number, letter, number');
    }
    //BILLING CODE
    if (checkBillingCode(encounter.billingCode)) {
        errorArray.push('Invalid billing code. Must meet this (numeric) format: 123.456.789-12');
    }
    ///ICD10 for icd10
    if (checkICD10(encounter.icd10)) {
        errorArray.push('Invalid ICD10. Must be 1 letter followed by 2 numbers: A10');
    }
    //NUMERIC for pulse
    if (checkNumeric(encounter.pulse)) {
        errorArray.push('Pulse must be a number.');
    }
    //NUMERIC for count
    if (checkNumeric(encounter.systolic)) {
        errorArray.push('Systolic must be a number.');
    }
    //NUMERIC for count
    if (checkNumeric(encounter.diastolic)) {
        errorArray.push('Diastolic must be a number.');
    }
    //DATE for date
    if (checkDate(encounter.date)) {
        errorArray.push('Date must be a valid date. Format: 12/31/1999');
    }
    return errorArray;
}

export function validateNetwork(response) {
    //accessing panel to access error section of HTML
    var errorArray = [];
    
    if (response === 400) {
        errorArray.push('Bad information input. Fix fields and then try again.');
    }
    if (response === 404) {
        errorArray.push('Could not find data.');
    }
    if (response === 409) {
        errorArray.push('Patient with this SSN already exists.');
    }
    if (response === 500) {
        errorArray.push('Internal server error.');
    }
    if (response === 503) {
        errorArray.push('Server is not connected.');
    }
    return errorArray;
}

export function validateEncounterAmount(encounterArray) {
    var errorArray = [];    
    if (encounterArray === 0) {
        errorArray.push('Cannot delete- only patients without encounters may be deleted.');
    }
    return errorArray;
}

//checks if the input is null or an empty string
function checkRequired(input) {
    if (input === null || input === '') {
        return false;
    }
    else {
        return true;
    }
}
//checks if input is a number
function checkSpecialCharacters(input) {
    if (/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}
//checks if the zip code is a certain size
function checkZipCode(input) {
    if (/^\d{5}(-\d{4})?$/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}
//checks if the username is 8 characters
function checkEmail(input) {
    if (/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}
//checks if the state is a valid state
function validateState(stateValue) {
    let stateRegex = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/;
    if (stateRegex.test(stateValue)) {
        return false;
    }
    else {
        return true;
    }
}
//checks if the input is a number
function checkNumeric(input) {
    if (/^[0-9]*$/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}
//checks if the input is in the price format
function checkPrice(input) {
    if (/\d+\.\d{1,2}/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}
//checks if the date is in the date format
function checkDate(input) {
    if (/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}

//checks to see if the name is a valid name
function checkName(input) {
    if (/^[a-zA-Z](?:[ '.\-a-zA-Z]*[a-zA-Z])?$/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}

//checks to see if the name is a valid name
function checkGender(input) {
    if (/^(male|female|other|Male|Female|Other|MALE|FEMALE|OTHER)$/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}

//checks to see if the SSN is a valid SSN
function checkSSN(input) {
    if (/^\d{3}-\d{2}-\d{4}$/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}

//checks to see if the visit code is a valid visit code
function checkVisitCode(input) {
    if (/^[a-zA-Z][0-9][a-zA-Z] [0-9][a-zA-Z][0-9]$/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}

//checks to see if the visit code is a valid visit code
function checkICD10(input) {
    if (/^[a-zA-Z][0-9][0-9]$/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}

//checks to see if the billing code is a valid billing code
function checkBillingCode(input) {
    if (/^\d{3}.\d{3}.\d{3}-\d{2}$/.test(input)) {
        return false;
    }
    else {
        return true;
    }
}
