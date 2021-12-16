import PatientConstant from './PatientConstant.js';

//turning objects into actions by assigning a type
export const addPatientPending = (patient) => {
    return {
        type: PatientConstant.ADD_PATIENT_PENDING,
        patient: patient
    };
};

export const addPatientSuccess = () => {
    return {
        type: PatientConstant.ADD_PATIENT_SUCCESS,
    };
};
//////////////////////////////////////////////////////////////////////
export const removePatientPending = (patientId) => {
    return {
        type: PatientConstant.REMOVE_PATIENT_PENDING,
        patientId: patientId
    };
};

export const removePatientSuccess = () => {
    return {
        type: PatientConstant.REMOVE_PATIENT_SUCCESS,
    };
};
////////////////////////////////////////////////////////////////////
export const setPatientPending = () => {
    return {
        type: PatientConstant.SET_PATIENT_PENDING,
    };
};

export const setPatientSuccess = (data) => {
    return {
        type: PatientConstant.SET_PATIENT_SUCCESS,
        data: data
    };
};
//////////////////////////////////////////////////////////////////////
export const updatePatientPending = (patientId, patient) => {
    return {
        type: PatientConstant.UPDATE_PATIENT_PENDING,
        patientId: patientId,
        patient: patient
    };
};

export const updatePatientSuccess = () => {
    return {
        type: PatientConstant.UPDATE_PATIENT_SUCCESS,
    };
};
//////////////////////////////////////////////////////////////////
export const redirectPending = (index) => {
    return {
        type: PatientConstant.REDIRECT_PENDING,
        isHome: true,
        index: index

    };
};

export const redirectSuccess = () => {
    return {
        type: PatientConstant.REDIRECT_SUCCESS
    };
};
/////////////////////////////////////////////////////////////
export const redirectBackPending = () => {
    return {
        type: PatientConstant.REDIRECT_BACK_PENDING
    };
};

export const redirectBackSuccess = () => {
    return {
        type: PatientConstant.REDIRECT_BACK_SUCCESS,
    };
};
/////////////////////////////////////////////////////////////
export const setErrorArray = errorArray => {
    return {
        type: PatientConstant.SET_ERROR_SUCCESS,
        errorArray: errorArray
    };
};
