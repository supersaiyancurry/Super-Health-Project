import PatientConstant from './PatientConstant';

const initState = {
    index: 0,
    isHome: true,
    patient: [],
    errorArray: [],
};

//converting actions into states
export default function PatientReducer(state = initState, action) {
    switch (action.type) {
        case PatientConstant.ADD_PATIENT_PENDING: {
            return state;
        }
        case PatientConstant.ADD_PATIENT_SUCCESS: {
            return state;
        }
        case PatientConstant.REMOVE_PATIENT_PENDING: {
            return state;
        }
        case PatientConstant.REMOVE_PATIENT_SUCCESS: {
            return state;
        }
        case PatientConstant.SET_PATIENT_PENDING: {
            return state;
        }
        case PatientConstant.SET_PATIENT_SUCCESS: {
            return { ...state, patient: action.data };
        }
        case PatientConstant.UPDATE_PATIENT_PENDING: {
            return state;
        }
        case PatientConstant.UPDATE_PATIENT_SUCCESS: {
            return state;
        }
        case PatientConstant.REDIRECT_PENDING: {
            return { ...state, 
                index: action.index
            };
        }
        case PatientConstant.REDIRECT_SUCCESS: {
            return { ...state, 
                isHome: false 
            };
        }
        case PatientConstant.REDIRECT_BACK_PENDING: {
            return state;
        }
        case PatientConstant.REDIRECT_BACK_SUCCESS: {
            return { ...state,
                isHome: true
            };
        }
        case PatientConstant.SET_ERROR_SUCCESS: {
            return {
                ...state,
                errorArray: action.errorArray
            };
        }
        default: {
            return state;
        }
    }
}
