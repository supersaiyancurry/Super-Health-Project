import React from 'react';
import PropTypes from 'prop-types';

//inputs for creating patient
const CreateEncounter = (props) => {
    return (
        <div className="Wrapper">
            <h1>Create Encounter:</h1>
            <div id="patient">
                <form onSubmit={props.handleAdd}>
                    <label>
          Notes:
                        <input type="text" name="notes" />
                    </label>
                    <label>
          Visit Code:
                        <input type="text"  name="visitCode"/>
                    </label>
                    <label>
          Insurance Provider:
                        <input type="text" name="provider"  />
                    </label>
                    <label>
          Billing Code:
                        <input type="text" name="billingCode"/>
                    </label>
                    <label>
          ICD10:
                        <input type="text"  name="icd10"/>
                    </label>
                    <label>
          Total Cost:
                        <input type="text"  name="totalCost"/>
                    </label>
                    <label>
          Copay:
                        <input type="text"  name="copay"/>
                    </label>
                    <label>
          Chief Complaint:
                        <input type="text"  name="chiefComplaint"/>
                    </label>
                    <label>
          Pulse:
                        <input type="text"  name="pulse"/>
                    </label>
                    <label>
          Systolic:
                        <input type="text"  name="systolic"/>
                    </label>
                    <label>
          Diastolic:
                        <input type="text" name="diastolic"/>
                    </label>
                    <label>
          Date:
                        <input type="text" name="date"/>
                    </label>
                    <button type="submit" className="big-button" >Submit</button>
                </form>
            </div>
        </div>
    );
};

CreateEncounter.propTypes = {
    handleAdd: PropTypes.func.isRequired,
    redirect: PropTypes.bool.isRequired
};

export default CreateEncounter;