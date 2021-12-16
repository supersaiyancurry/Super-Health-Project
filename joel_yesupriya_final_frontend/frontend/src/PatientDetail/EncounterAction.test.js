import * as EncounterAction from './EncounterAction';

/*eslint no-undef: 0*/

////////////////////////////////////////////////////////////////////

describe('Tests encounter actions and their return type', () => {
    it('should return ADD_ENCOUNTER_PENDING', () => {
        var result = EncounterAction.addEncounterPending().type;
        expect(result).toBe('ADD_ENCOUNTER_PENDING');
    });
});

describe('Tests encounter actions and their return type', () => {
    it('should return ADD_ENCOUNTER_SUCCESS', () => {
        var result = EncounterAction.addEncounterSuccess().type;
        expect(result).toBe('ADD_ENCOUNTER_SUCCESS');
    });
});

/////////////////////////////////////////////////////////////////////

describe('Tests encounter actions and their return type', () => {
    it('should return SET_ENCOUNTER_PENDING', () => {
        var result = EncounterAction.setEncounterPending().type;
        expect(result).toBe('SET_ENCOUNTER_PENDING');
    });
});

describe('Tests encounter actions and their return type', () => {
    it('should return SET_ENCOUNTER_SUCCESS', () => {
        var result = EncounterAction.setEncounterSuccess().type;
        expect(result).toBe('SET_ENCOUNTER_SUCCESS');
    });
});

//////////////////////////////////////////////////////////////////////

describe('Tests encounter actions and their return type', () => {
    it('should return REMOVE_ENCOUNTER_PENDING', () => {
        var result = EncounterAction.removeEncounterPending().type;
        expect(result).toBe('REMOVE_ENCOUNTER_PENDING');
    });
});

describe('Tests encounter actions and their return type', () => {
    it('should return REMOVE_ENCOUNTER_SUCCESS', () => {
        var result = EncounterAction.removeEncounterSuccess().type;
        expect(result).toBe('REMOVE_ENCOUNTER_SUCCESS');
    });
});

///////////////////////////////////////////////////////////////////////

describe('Tests encounter actions and their return type', () => {
    it('should return UPDATE_ENCOUNTER_PENDING', () => {
        var result = EncounterAction.updateEncounterPending().type;
        expect(result).toBe('UPDATE_ENCOUNTER_PENDING');
    });
});

describe('Tests encounter actions and their return type', () => {
    it('should return UPDATE_ENCOUNTER_SUCCESS', () => {
        var result = EncounterAction.updateEncounterSuccess().type;
        expect(result).toBe('UPDATE_ENCOUNTER_SUCCESS');
    });
});

/////////////////////////////////////////////////////////////////////////