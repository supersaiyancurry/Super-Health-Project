import { put, takeLatest } from 'redux-saga/effects';
import * as PatientAction from './PatientAction.js';
import PatientConstant from './PatientConstant.js';
import { validateNetwork } from '../Validation';

/*eslint no-undef: 0*/

//waiting for an action in patient to execute a function
export function* watchPatient() {
    yield takeLatest(PatientConstant.SET_PATIENT_PENDING, getPatients);
    yield takeLatest(PatientConstant.REDIRECT_PENDING, switchPages);
    yield takeLatest(PatientConstant.REDIRECT_BACK_PENDING, switchPagesBack);
    yield takeLatest(PatientConstant.ADD_PATIENT_PENDING, createPatients);
    yield takeLatest(PatientConstant.REMOVE_PATIENT_PENDING, deletePatients);
    yield takeLatest(PatientConstant.UPDATE_PATIENT_PENDING, updatePatients);
}

//functions for logic, API calls, and error handling
//each function returns a success action
function* getPatients() {
    let patients = [];
    let API_URL = 'http://localhost:8080/patient/';
    let request = new Request(API_URL, 
        {
            headers: new Headers({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }),
        }
    );
    yield fetch(request)
        .then(response => {
            return response.json();
        })
        .then(data => {
            patients = data.sort(function (a, b) {return a.id - b.id;});
        })
        .catch(() => {
            errorArray = validateNetwork(503);
        });
    yield put(PatientAction.setPatientSuccess(patients));
}

function* createPatients(action) {
    let errorArray = [];
    let patient = action.patient;
    const fetchUrl = 'http://localhost:8080/patient/';
    yield fetch(fetchUrl, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
        .then(response => {
            errorArray = validateNetwork(response.status);
        })
        .catch(() => {
            errorArray = validateNetwork(503);
        });
    
    yield put(PatientAction.addPatientSuccess());
    yield put(PatientAction.setErrorArray(errorArray));
    yield put(PatientAction.setPatientPending());
    
}

function* deletePatients(action) {
    let errorArray = [];
    let patientId = action.patientId;
    const fetchUrl = 'http://localhost:8080/patient/';
    yield fetch(fetchUrl + patientId, {
        method: 'DELETE',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            errorArray = validateNetwork(response.status);
        })
        .catch(() => {
            errorArray = validateNetwork(500);
        });
    yield put(PatientAction.setErrorArray(errorArray));
    yield put(PatientAction.removePatientSuccess());
    yield put(PatientAction.setPatientPending());
}


function* updatePatients(action) {
    let patientId = action.patientId;
    let patient = action.patient;
    let errorArray = [];
    const fetchUrl = 'http://localhost:8080/patient/';
    yield fetch(fetchUrl + patientId, {
        method: 'PUT',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient),
    })
        .then(response => {
            errorArray = validateNetwork(response.status);
        });
    yield put(PatientAction.setErrorArray(errorArray));
    yield put(PatientAction.updatePatientSuccess());
    yield put(PatientAction.setPatientPending());
}

function* switchPages(action) {
    yield put(PatientAction.redirectSuccess(action.isHome, action.index));
}

function* switchPagesBack() {
    yield put(PatientAction.redirectBackSuccess());
}

