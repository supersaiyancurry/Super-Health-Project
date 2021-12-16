import PatientReducer from './Patient/PatientReducer';
import EncounterReducer from './PatientDetail/EncounterReducer';

import { combineReducers } from 'redux';

/*eslint no-undef: 0*/

const defaultReducers = combineReducers({
    patient: PatientReducer,
    encounter: EncounterReducer
});

export default defaultReducers;