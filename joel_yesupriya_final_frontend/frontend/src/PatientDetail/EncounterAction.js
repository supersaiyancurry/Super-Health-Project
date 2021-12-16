import EncounterConstant from './EncounterConstant.js';

//turning objects into actions by assigning a type
export const addEncounterPending = (encounter) => {
    return {
        type: EncounterConstant.ADD_ENCOUNTER_PENDING,
        encounter: encounter
    };
};

export const addEncounterSuccess = () => {
    return {
        type: EncounterConstant.ADD_ENCOUNTER_SUCCESS,
    };
};
//////////////////////////////////////////////////////////////////////
export const removeEncounterPending = (encounterId) => {
    return {
        type: EncounterConstant.REMOVE_ENCOUNTER_PENDING,
        encounterId: encounterId
    };
};

export const removeEncounterSuccess = () => {
    return {
        type: EncounterConstant.REMOVE_ENCOUNTER_SUCCESS,
    };
};
//////////////////////////////////////////////////////////////////////
export const setEncounterPending = () => {
    return {
        type: EncounterConstant.SET_ENCOUNTER_PENDING
    };
};

export const setEncounterSuccess = (data) => {
    return {
        type: EncounterConstant.SET_ENCOUNTER_SUCCESS,
        data: data
    };
};
//////////////////////////////////////////////////////////////////////
export const updateEncounterPending = (encounterId, encounter) => {
    return {
        type: EncounterConstant.UPDATE_ENCOUNTER_PENDING,
        encounterId: encounterId,
        encounter: encounter
    };
};

export const updateEncounterSuccess = () => {
    return {
        type: EncounterConstant.UPDATE_ENCOUNTER_SUCCESS,
    };
};