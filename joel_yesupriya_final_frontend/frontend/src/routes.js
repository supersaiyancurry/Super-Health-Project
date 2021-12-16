import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Patient from './Patient/Patient';
import PatientDetail from './PatientDetail/PatientDetail';
import NotFound from './NotFound';

const Routes = () => {
    return (
        <div>
            <div className="Body">
                <Switch>
                    <Route exact path="/" component={Patient} />
                    <Route exact path="/patientDetails" component={PatientDetail} />
                    <Route component={NotFound} />
                </Switch>
            </div>
       
        </div>
    );
};

export default Routes;