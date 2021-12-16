/* import statements */
import React, { Component } from 'react';
import EditPatient from './EditPatient';
import CreatePatient from './CreatePatient';
import { connect } from 'react-redux';
import * as PatientAction from './PatientAction.js';
import * as EncounterAction from '../PatientDetail/EncounterAction';
import PatientTable from './PatientTable';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { validatePatient } from '../Validation';

class Patient extends Component {
//new functions are simplified to just create objects and send them to be made into actions
//all functions are set to pending
// function for adding patients. If the object created on CreatePatient's submit passes validation (errorArray.length = 0), dispatch patient to 
// be added to the database. Otherwise, update the error section of the page with errors.
handleAdd = event => {
    event.preventDefault();
    let patient = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        ssn: event.target.ssn.value,
        address: 
            {
                street: event.target.street.value,
                city: event.target.city.value,
                state: event.target.state.value,
                postal: event.target.postal.value
            },
        age: event.target.age.value,
        height: event.target.height.value,
        weight: event.target.weight.value,
        insurance: event.target.insurance.value,
        gender: event.target.gender.value
    };
    let errorArray = validatePatient(patient);
    if (errorArray.length > 0) {
        this.props.dispatch(PatientAction.setErrorArray(errorArray));
    }
    else {
        this.props.dispatch(PatientAction.addPatientPending(patient));
    }
    window.scrollTo(0, 600);
};

//function for removing patients. Check the encounter database for how many encounters are for a specific patient (ID of remove button). If this
//amount is 0, then reset the error section of the page and remove the patient. Otherwise, update the error section with a message because only
//patients without encounters may be removed.
handleRemove = patientId => {
    var errorArray = [];
    var encounterArray = this.props.encounter;
    var newArray = encounterArray.filter(function (el) {
        return el.patient.id === patientId;
    });
    if (newArray.length === 0) {
        this.props.dispatch(PatientAction.setErrorArray(errorArray));
        this.props.dispatch(PatientAction.removePatientPending(patientId));
    }
    else {
        errorArray.push('Cannot remove- only patients without encounters may be removed.');
        this.props.dispatch(PatientAction.setErrorArray(errorArray));
    }
};

//function for updating patients. If the patient made from the EditPatient form passes validation (errorArray.length = 0), dispatch for the patient
//selected (id of edit button) to be updated with input details. Otherwise, update the error section of the page with errors.
handleUpdate = patientId => {
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
    let errorArray = validatePatient(patient);
    if (errorArray.length > 0) {
        this.props.dispatch(PatientAction.setErrorArray(errorArray));
    }
    else {
        this.props.dispatch(PatientAction.updatePatientPending(patientId, patient));
    }
    window.scrollTo(0, 600);
}

//function for redirecting to the patient details page. The patient details page will be based on which patient's view button was clicked (index).
//The dispatched action also causes isHome to be changed to false- which causes the page to change to the patient details page.
handleAllDetails = (index) => {
    let errorArray = [];
    this.props.dispatch(PatientAction.setErrorArray(errorArray));
    this.props.dispatch(PatientAction.redirectPending(index));
}

//for populating BOTH databases (patient AND encounter) on start-up.
componentDidMount() {
    this.props.dispatch(PatientAction.setPatientPending());
    this.props.dispatch(EncounterAction.setEncounterPending());
}
 

//rendering the web page
render() {
    if (this.props.isHome === false) {
        return (
            <div>
                <Redirect to="/patientDetails" />
            </div>
        );
    }
    else 
        return (
            <div>
                <h1 className="header">Super Health Inc.</h1>
                <h1>Current Patients:</h1>
                <table align="center">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">All Details</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    <tbody>{this.props.patient.map((patient, index) => (
                        <PatientTable
                            {...patient}
                            key={index}
                            index={index}
                            handleRemove={this.handleRemove}
                            handleUpdate={this.handleUpdate}
                            handleAllDetails={this.handleAllDetails}
                        />
                    ))}</tbody>
                </table>
                <div id="errorBox">
                    <div style={{ color: 'red' }}>
                        {this.props.errorArray.map(errors => (
                            <p key={errors.id}>{errors}</p>
                        ))}
                    </div>
                </div>
                <EditPatient/>
                <CreatePatient
                    handleAdd={this.handleAdd}/>
            </div>
        );
}    
}

Patient.propTypes = {
    dispatch: PropTypes.func.isRequired,
    patient: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    errorArray: PropTypes.array.isRequired,
    encounter: PropTypes.array.isRequired,
    filter: PropTypes.func.isRequired,
    isHome: PropTypes.bool.isRequired
};

//converting state to props, so that props can be used everywhere
const mapStateToProps = state => {
    return {
        index: state.patient.index,
        patient: state.patient.patient,
        isHome: state.patient.isHome,
        encounter: state.encounter.encounter,
        errorArray: state.patient.errorArray,
        networkError: state.patient.networkError
    };
};

export default connect(mapStateToProps)(Patient);
