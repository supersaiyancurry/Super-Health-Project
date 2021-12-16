import React from 'react';
import PropTypes from 'prop-types';

//inputs for creating patient on submit
const CreatePatient = (props) => {
    return (
        <div className="Wrapper">
            <h1>Create Patient:</h1>
            <div id="patient">
                <form onSubmit={props.handleAdd}>
                    <label>
          First Name:
                        <input type="text" name="firstName" />
                    </label>
                    <label>
          Last Name:
                        <input type="text"  name="lastName"/>
                    </label>
                    <label>
          SSN:
                        <input type="text" name="ssn"  />
                    </label>
                    <label>
          Street:
                        <input type="text" name="street"/>
                    </label>
                    <label>
          City:
                        <input type="text"  name="city"/>
                    </label>
                    <label>
          State:
                        <input type="text"  name="state"/>
                    </label>
                    <label>
          Postal Code:
                        <input type="text"  name="postal"/>
                    </label>
                    <label>
          Age:
                        <input type="text"  name="age"/>
                    </label>
                    <label>
          Height:
                        <input type="text"  name="height"/>
                    </label>
                    <label>
          Weight:
                        <input type="text"  name="weight"/>
                    </label>
                    <label>
          Insurance:
                        <input type="text"  name="insurance"/>
                    </label>
                    <label>
          Gender:
                        <input type="text"  name="gender"/>
                    </label>
                    <button type="submit" className="big-button" >Submit</button>
                </form>
            </div>
        </div>
    );
};

CreatePatient.propTypes = {
    handleAdd: PropTypes.func.isRequired,
    redirect: PropTypes.bool.isRequired
};

export default CreatePatient;