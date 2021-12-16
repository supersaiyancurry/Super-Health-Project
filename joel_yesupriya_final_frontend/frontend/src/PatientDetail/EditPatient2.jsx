import React from 'react';

//inputs for editing the customer
const EditPatient2 = props => {
    return (
        <div>
            <h1>Edit Patient:</h1>
            <form >
                <input type="hidden" id="id" />
                <label>
          First Name:
                    <input type="text" id="firstName" defaultValue={props.patient.firstName}/>
                </label>
                <label>
          Last Name:
                    <input type="text"  id="lastName" defaultValue={props.patient.lastName}/>
                </label>
                <label>
          SSN:
                    <input type="text" id="ssn" defaultValue={props.patient.ssn}/>
                </label>
                <label>
          Street:
                    <input type="text" id="street" defaultValue={props.patient.address.street}/>
                </label>
                <label>
          City:
                    <input type="text"  id="city" defaultValue={props.patient.address.city}/>
                </label>
                <label>
          State:
                    <input type="text"  id="state" defaultValue={props.patient.address.state}/>
                </label>
                <label>
          Postal Code:
                    <input type="text"  id="postal" defaultValue={props.patient.address.postal}/>
                </label>
                <label>
          Age:
                    <input type="text"  id="age" defaultValue={props.patient.age}/>
                </label>
                <label>
          Height:
                    <input type="text"  id="height" defaultValue={props.patient.height}/>
                </label>
                <label>
          Weight:
                    <input type="text"  id="weight" defaultValue={props.patient.weight}/>
                </label>
                <label>
          Insurance:
                    <input type="text"  id="insurance" defaultValue={props.patient.insurance}/>
                </label>
                <label>
          Gender:
                    <input type="text"  id="gender" defaultValue={props.patient.gender}/>
                </label>
            </form>
        </div>
    );
};
export default EditPatient2;
