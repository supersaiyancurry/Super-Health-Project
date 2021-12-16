import { put, takeLatest } from 'redux-saga/effects';
import * as EncounterAction from './EncounterAction';
import EncounterConstant from './EncounterConstant.js';
import { validateNetwork } from '../Validation';
import * as PatientAction from '../Patient/PatientAction';
import * as EncounterAPI from './EncounterAPI';

/*eslint no-undef: 0*/

//waiting for an action in encounter to execute a function
// export function* watchEncounter() {
//     yield takeLatest(EncounterConstant.SET_ENCOUNTER_PENDING, getEncounters);
//     yield takeLatest(EncounterConstant.ADD_ENCOUNTER_PENDING, createEncounters);
//     yield takeLatest(EncounterConstant.REMOVE_ENCOUNTER_PENDING, deleteEncounters);
//     yield takeLatest(EncounterConstant.UPDATE_ENCOUNTER_PENDING, updateEncounters);
// }

//functions for logic, API calls, and error handling
//each function returns a success action
// function* getEncounters() {
//     let errorArray = [];
//     let encounters = [];
//     let API_URL = 'http://localhost:8080/encounter/';
//     let request = new Request(API_URL, 
//         {
//             headers: new Headers({
//                 'Access-Control-Allow-Origin': '*',
//                 'Content-Type': 'application/json'
//             }),
//         });
//     yield fetch(request)
//         .then(response => {
//             errorArray = validateNetwork(response.status);
//             return response.json();
//         })
//         .then(data => {
//             encounters = data.sort(function (a, b) {return a.id - b.id;});
//         })
//         .catch(() => {
//             errorArray = validateNetwork(503);
//         });
//     yield put(PatientAction.setErrorArray(errorArray));
//     yield put(EncounterAction.setEncounterSuccess(encounters));
// }

function* deleteEncounters(action) {
    let errorArray = [];
    let encounterId = action.encounterId;
    const fetchUrl = 'http://localhost:8080/encounter/';
    yield fetch(fetchUrl + encounterId, {
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
            errorArray = validateNetwork(503);
        }
        );
    yield put(PatientAction.setErrorArray(errorArray));
    yield put(EncounterAction.removeEncounterSuccess());
    yield put(EncounterAction.setEncounterPending());
}

function* createEncounters(action) {
    let errorArray = [];
    let encounter = action.encounter;
    const fetchUrl = 'http://localhost:8080/encounter/';
    yield fetch(fetchUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(encounter)
    })
        .then(response => {
            errorArray = validateNetwork(response.status);
        })
        .catch(() => {
            errorArray = validateNetwork(503);
        }
        );
    yield put(PatientAction.setErrorArray(errorArray));
    yield put(EncounterAction.addEncounterSuccess());
    yield put(EncounterAction.setEncounterPending());
    
}

export function* updateEncounters(action) {
    let errorArray = [];
    const fetchUrl = 'http://localhost:8080/encounter/';
    let encounter = action.encounter;
    yield fetch(fetchUrl + action.encounterId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(encounter)
    })
        .then(response => {
            errorArray = validateNetwork(response.status);
        })
        .catch(() => {
            errorArray = validateNetwork(503);
        }
        );
    yield put(PatientAction.setErrorArray(errorArray));
    yield put(EncounterAction.updateEncounterSuccess());
    yield put(EncounterAction.setEncounterPending());
}

export function* setEncounterPending() {
    try {
        const data = yield call(fetchEncounters);
        console.log(data);
        yield put(setEncounterSuccess(data));
    } 
    catch(err) {
        yield put(setErrorArray(err));
    }
}

export function* watchSetEncounterPending() {
    yield takeEvery(EncounterConstant.SET_ENCOUNTER_PENDING, setEncounterPending);
}
