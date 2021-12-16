import * as PatientAction from './PatientAction';

/*eslint no-undef: 0*/

////////////////////////////////////////////////////////////////////

describe('Tests patient actions and their return type', () => {
    it('should return ADD_PATIENT_PENDING', () => {
        var result = PatientAction.addPatientPending().type;
        expect(result).toBe('ADD_PATIENT_PENDING');
    });
});

describe('Tests patient actions and their return type', () => {
    it('should return ADD_PATIENT_SUCCESS', () => {
        var result = PatientAction.addPatientSuccess().type;
        expect(result).toBe('ADD_PATIENT_SUCCESS');
    });
});

/////////////////////////////////////////////////////////////////////

describe('Tests patient actions and their return type', () => {
    it('should return SET_PATIENT_PENDING', () => {
        var result = PatientAction.setPatientPending().type;
        expect(result).toBe('SET_PATIENT_PENDING');
    });
});

describe('Tests patient actions and their return type', () => {
    it('should return SET_PATIENT_SUCCESS', () => {
        var result = PatientAction.setPatientSuccess().type;
        expect(result).toBe('SET_PATIENT_SUCCESS');
    });
});

//////////////////////////////////////////////////////////////////////

describe('Tests patient actions and their return type', () => {
    it('should return REMOVE_PATIENT_PENDING', () => {
        var result = PatientAction.removePatientPending().type;
        expect(result).toBe('REMOVE_PATIENT_PENDING');
    });
});

describe('Tests patient actions and their return type', () => {
    it('should return REMOVE_PATIENT_SUCCESS', () => {
        var result = PatientAction.removePatientSuccess().type;
        expect(result).toBe('REMOVE_PATIENT_SUCCESS');
    });
});

///////////////////////////////////////////////////////////////////////

describe('Tests patient actions and their return type', () => {
    it('should return UPDATE_PATIENT_PENDING', () => {
        var result = PatientAction.updatePatientPending().type;
        expect(result).toBe('UPDATE_PATIENT_PENDING');
    });
});

describe('Tests patient actions and their return type', () => {
    it('should return UPDATE_PATIENT_SUCCESS', () => {
        var result = PatientAction.updatePatientSuccess().type;
        expect(result).toBe('UPDATE_PATIENT_SUCCESS');
    });
});

/////////////////////////////////////////////////////////////////////////

describe('Tests patient actions and their return type', () => {
    it('should return SET_ERROR_SUCCESS', () => {
        var result = PatientAction.setErrorArray().type;
        expect(result).toBe('SET_ERROR_SUCCESS');
    });
});

/////////////////////////////////////////////////////////////////////////

describe('Tests patient actions and their return type', () => {
    it('should return REDIRECT_PENDING', () => {
        var result = PatientAction.redirectPending().type;
        expect(result).toBe('REDIRECT_PENDING');
    });
});

describe('Tests patient actions and their return type', () => {
    it('should return REDIRECT_SUCCESS', () => {
        var result = PatientAction.redirectSuccess().type;
        expect(result).toBe('REDIRECT_SUCCESS');
    });
});

/////////////////////////////////////////////////////////////////////////

describe('Tests patient actions and their return type', () => {
    it('should return REDIRECT_BACK_PENDING', () => {
        var result = PatientAction.redirectBackPending().type;
        expect(result).toBe('REDIRECT_BACK_PENDING');
    });
});

describe('Tests patient actions and their return type', () => {
    it('should return REDIRECT_BACK_SUCCESS', () => {
        var result = PatientAction.redirectBackSuccess().type;
        expect(result).toBe('REDIRECT_BACK_SUCCESS');
    });
});

/////////////////////////////////////////////////////////////////////////