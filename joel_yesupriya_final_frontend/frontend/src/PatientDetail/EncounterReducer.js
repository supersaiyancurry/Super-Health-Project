import EncounterConstant from './EncounterConstant';

const initState = {
    encounter: [
        {
            patient: []
        }
    ],
    patient: {
        firstName: '',

    }
};

//converting actions into states
export default function EncounterReducer(state = initState, action) {
    switch (action.type) {
        case EncounterConstant.ADD_ENCOUNTER_PENDING: {
            return state;
        }
        case EncounterConstant.ADD_ENCOUNTER_SUCCESS: {
            return state;
        }
        case EncounterConstant.REMOVE_ENCOUNTER_PENDING: {
            return state;
        }
        case EncounterConstant.REMOVE_ENCOUNTER_SUCCESS: {
            return state;
        }
        case EncounterConstant.SET_ENCOUNTER_PENDING: {
            return state;
        }
        case EncounterConstant.SET_ENCOUNTER_SUCCESS: {
            return { ...state, encounter: action.data };
        }
        case EncounterConstant.UPDATE_ENCOUNTER_PENDING: {
            return state;
        }
        case EncounterConstant.UPDATE_ENCOUNTER_SUCCESS: {
            return state;
        }
        default: {
            return state;
        }
    }
}
