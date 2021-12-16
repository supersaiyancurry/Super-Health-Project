import { watchEncounter } from './EncounterSaga';
import CreateEncounter from './CreateEncounter';



it('should call fetchEncounters when passed type GET_PATIENTS_ASYNC', async () => {
    const watcher = watchEncounter();
    var effect = watcher.next().value;
    expect(effect).toEqual(
        takeEvery(EncounterConstant.SET_ENCOUNTER_PENDING, getEncounters)
    );
    effect = watcher.next().value;
    expect(effect).toEqual(
        takeEvery(EncounterConstant.ADD_ENCOUNTER_PENDING, createEncounters)
    );
    effect = watcher.next().value;
    expect(effect).toEqual(
        takeEvery(EncounterConstant.REMOVE_ENCOUNTER_PENDING, deleteEncounters)
    );
    effect = watcher.next().value;
    expect(effect).toEqual(
        takeEvery(EncounterConstant.UPDATE_ENCOUNTER_PENDING, updateEncounter)
    );
});