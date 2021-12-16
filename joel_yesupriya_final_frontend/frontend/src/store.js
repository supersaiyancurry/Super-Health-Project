import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { watchPatient } from './Patient/PatientSaga';
import { watchSetEncounterPending } from './PatientDetail/EncounterSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(watchPatient);
sagaMiddleware.run(watchSetEncounterPending);

export default store;
