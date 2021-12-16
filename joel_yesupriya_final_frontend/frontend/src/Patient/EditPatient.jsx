import React from 'react';

//inputs for editing the customer
const EditPatient = props => {
    return (
        <div>
            <h1>Edit Patient:</h1>
            <form >
                <input type="hidden" id="id" />
                <label>
          First Name:
                    <input type="text" id="firstName"/>
                </label>
                <label>
          Last Name:
                    <input type="text"  id="lastName"/>
                </label>
                <label>
          SSN:
                    <input type="text" id="ssn"  />
                </label>
                <label>
          Street:
                    <input type="text" id="street"/>
                </label>
                <label>
          City:
                    <input type="text"  id="city"/>
                </label>
                <label>
          State:
                    <input type="text"  id="state"/>
                </label>
                <label>
          Postal Code:
                    <input type="text"  id="postal"/>
                </label>
                <label>
          Age:
                    <input type="text"  id="age"/>
                </label>
                <label>
          Height:
                    <input type="text"  id="height"/>
                </label>
                <label>
          Weight:
                    <input type="text"  id="weight"/>
                </label>
                <label>
          Insurance:
                    <input type="text"  id="insurance"/>
                </label>
                <label>
          Gender:
                    <input type="text"  id="gender"/>
                </label>
            </form>
        </div>
    );
};
export default EditPatient;
