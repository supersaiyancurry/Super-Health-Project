import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as PatientAction from '../Patient/PatientAction';
import * as EncounterAction from '../PatientDetail/EncounterAction';
import PropTypes from 'prop-types';
import EncounterTable from './EncounterTable';
import { validateEncounter, validatePatient } from '../Validation';
import EditEncounter from './EditEncounter';
import CreateEncounter from './CreateEncounter';
import EditPatient2 from './EditPatient2';

class PatientDetail extends Component {
    //constant for patient we're retrieving details and encounters from
    specificPatient = (this.props.patient[this.props.index])
    
    //function for adding encounters to the encounters table. If the inputs pass validation (errorArray.length being 0), post the encounter.
    handleAdd = event => {
        event.preventDefault();
        let encounter = {
            notes: event.target.notes.value,
            visitCode: event.target.visitCode.value,
            provider: event.target.provider.value,
            billingCode: event.target.billingCode.value,
            icd10: event.target.icd10.value,
            totalCost: event.target.totalCost.value,
            copay: event.target.copay.value,
            chiefComplaint: event.target.chiefComplaint.value,
            pulse: event.target.pulse.value,
            systolic: event.target.systolic.value,
            diastolic: event.target.diastolic.value,
            date: event.target.date.value,
            patient: {
                id: this.specificPatient.id
            }
        };
        let errorArray = validateEncounter(encounter);
        if (errorArray.length > 0) {
            this.props.dispatch(PatientAction.setErrorArray(errorArray));
        }
        else {
            this.props.dispatch(EncounterAction.addEncounterPending(encounter));
        }
        window.scrollTo(0, 1100);
    };
    
//clears the error section and then removes an encounter from the database (depending on which button was pushed)
handleRemove = encounterId => {
    let errorArray = [];
    this.props.dispatch(PatientAction.setErrorArray(errorArray));
    this.props.dispatch(EncounterAction.removeEncounterPending(encounterId));
};

//clears the error section and then dispatches to change the isHome variable- which will cause the page to change back to the home page
handleBackToPatients(isHome) {
    let errorArray = [];
    this.props.dispatch(PatientAction.setErrorArray(errorArray));
    this.props.dispatch(PatientAction.redirectBackPending(isHome));
}

//clears the error section and then dispatches to get ALL the encounters from the database
componentDidMount() {
    this.props.dispatch(EncounterAction.setEncounterPending());
}

//filters through all the encounters for the encounters of my specific patient. This new array is what will be displayed on the table.
getSpecificEncounters() {
    var encounterArray = this.props.encounter;
    var specificPatient = (this.props.patient[this.props.index]);
    var newArray = encounterArray.filter(function (el) {
        return el.patient.id === specificPatient.id;
    });
    return newArray;
}

//function for updating encounters. If the inputs pass validation (errorArray.length being 0), update using the encounter and button ID that was passed
handleUpdate = encounterId => {
    let encounter = {
        notes: document.getElementById('notes').value,
        visitCode: document.getElementById('visitCode').value,
        provider: document.getElementById('provider').value,
        billingCode: document.getElementById('billingCode').value,
        icd10: document.getElementById('icd10').value,
        totalCost: document.getElementById('totalCost').value,
        copay: document.getElementById('copay').value,
        chiefComplaint: document.getElementById('chiefComplaint').value,
        pulse: document.getElementById('pulse').value,
        systolic: document.getElementById('systolic').value,
        diastolic: document.getElementById('diastolic').value,
        date: document.getElementById('date').value,
        patient: {
            id: this.specificPatient.id
        }
    };
    let errorArray = validateEncounter(encounter);
    if (errorArray.length > 0) {
        this.props.dispatch(PatientAction.setErrorArray(errorArray));
    }
    else {
        this.props.dispatch(EncounterAction.updateEncounterPending(encounterId, encounter));
    }
    window.scrollTo(0, 1100);
}

//function for updating the specific patient. After update, user will be redirected back to the home page.
handleUpdatePatient() {
    let patient = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        ssn: document.getElementById('ssn').value,
        age: document.getElementById('age').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        insurance: document.getElementById('insurance').value,
        gender: document.getElementById('gender').value,
        address: {
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            postal: document.getElementById('postal').value
        }
    };
    let patientId = this.specificPatient.id;
    let errorArray = validatePatient(patient);
    if (errorArray.length > 0) {
        this.props.dispatch(PatientAction.setErrorArray(errorArray));
    }
    else {
        this.props.dispatch(PatientAction.updatePatientPending(patientId, patient));
        this.handleBackToPatients();
    }
    window.scrollTo(0, 1100);
}

//rendering the web page
render() {
    if (this.props.isHome) {
        return (
            <div>
                <Redirect to="/" />
            </div>
        );
    }
    else 
        return (
            <div>
                <h1 className="header">Super Health Inc.</h1>
                <button className="big-button" onClick={() => this.handleBackToPatients(this.props.isHome)}>Back to All Patients</button>
                <h1>{this.specificPatient.firstName} {this.specificPatient.lastName}: Patient Details</h1>
                <detail>
                    <bold>ID: </bold> <p>{this.specificPatient.id}</p>
                    <br></br>
                    <bold>Social Security Number: </bold> <p>{this.specificPatient.ssn}</p>
                    <br></br>
                    <bold>Street Address: </bold> <p>{this.specificPatient.address.street}</p>
                    <br></br>
                    <bold>City: </bold> <p>{this.specificPatient.address.city}</p>
                    <br></br>
                    <bold>State: </bold> <p>{this.specificPatient.address.state}</p>
                    <br></br>
                    <bold>Postal Code: </bold> <p>{this.specificPatient.address.postal}</p>
                    <br></br>
                    <bold>Age: </bold> <p>{this.specificPatient.age}</p>
                    <br></br>
                    <bold>Height: </bold> <p>{this.specificPatient.height}</p>
                    <br></br>
                    <bold>Weight: </bold> <p>{this.specificPatient.weight}</p>
                    <br></br>
                    <bold>Insurance: </bold> <p>{this.specificPatient.insurance}</p>
                    <br></br>
                    <bold>Gender: </bold> <p>{this.specificPatient.gender}</p>
                    <br></br>
                    <br></br>
                </detail>
                
                
                <h1>{this.specificPatient.firstName} {this.specificPatient.lastName}: Encounters</h1>
                <table align="center">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>  
                            <th scope="col">Notes</th>
                            <th scope="col">Visit Code</th>
                            <th scope="col">Provider</th>
                            <th scope="col">Billing Code</th>
                            <th scope="col">ICD10</th>
                            <th scope="col">Total Cost</th>
                            <th scope="col">Co-pay</th>
                            <th scope="col">Chief Complaint</th>
                            <th scope="col">Pulse</th>
                            <th scope="col">Systolic</th>
                            <th scope="col">Diastolic</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getSpecificEncounters().map((encounter, index) => (
                            <EncounterTable
                                {...encounter}
                                key={index}
                                index={index}
                                handleUpdate={this.handleUpdate}
                                handleRemove={this.handleRemove}
                            />
                        ))}
                    </tbody>
                </table>
                <div>
                    <div style={{ color: 'red' }}>
                        {this.props.errorArray.map(errors => (
                            <p key={errors.id}>{errors}</p>
                        ))}
                    </div>
                </div>
                <EditEncounter/>
                <CreateEncounter
                    handleAdd={this.handleAdd}/>
                <br></br>
                <EditPatient2 patient={this.specificPatient}/>
                <button className="edit-button" onClick={() => this.handleUpdatePatient()}>Edit Patient</button>
                <br></br>
                <br></br>
                <button className="big-button" onClick={() => this.handleBackToPatients(this.props.isHome)}>Back to All Patients</button>
            </div>
        );
}
}


PatientDetail.propTypes = {
    dispatch: PropTypes.func.isRequired,
    patient: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    isHome: PropTypes.bool.isRequired,
    encounter: PropTypes.array.isRequired,
    filter: PropTypes.func.isRequired,
    errorArray: PropTypes.array.isRequired
};

//converting state to props, so that props can be used everywhere
const mapStateToProps = state => {
    return {
        index: state.patient.index,
        encounter: state.encounter.encounter,
        isHome: state.patient.isHome,
        patient: state.patient.patient,
        errorArray: state.patient.errorArray
    };
};

export default connect(mapStateToProps)(PatientDetail);
