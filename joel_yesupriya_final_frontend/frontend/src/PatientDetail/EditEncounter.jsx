import React from 'react';
//inputs for editing a patient
const EditEncounter = props => {
    return (
        <div>
            <h1>Edit Encounter:</h1>
            <form >
                <input type="hidden" id="id" />
                <label>
          Notes:
                    <input type="text" id="notes" />
                </label>
                <label>
          Visit Code:
                    <input type="text"  id="visitCode"/>
                </label>
                <label>
          Insurance Provider:
                    <input type="text" id="provider"  />
                </label>
                <label>
          Billing Code:
                    <input type="text" id="billingCode"/>
                </label>
                <label>
          ICD10:
                    <input type="text"  id="icd10"/>
                </label>
                <label>
          Total Cost:
                    <input type="text"  id="totalCost"/>
                </label>
                <label>
          Copay:
                    <input type="text"  id="copay"/>
                </label>
                <label>
          Chief Complaint:
                    <input type="text"  id="chiefComplaint"/>
                </label>
                <label>
          Pulse:
                    <input type="text"  id="pulse"/>
                </label>
                <label>
          Systolic:
                    <input type="text"  id="systolic"/>
                </label>
                <label>
          Diastolic:
                    <input type="text" id="diastolic"/>
                </label>
                <label>
          Date:
                    <input type="text" id="date"/>
                </label>
            </form>
        </div>
    );
};
export default EditEncounter;
