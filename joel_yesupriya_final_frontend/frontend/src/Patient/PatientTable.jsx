import React from 'react';
import PropTypes from 'prop-types';

//rendering table if data
const PatientTable = props => {
    return (
        <tr>
            <td>
                <span>{props.id}</span>
            </td>
            <td>
                <span>{props.firstName}</span>
            </td>
            <td>
                <span>{props.lastName}</span>
            </td>
            <td>
                <span>{props.age}</span>
            </td>
            <td>
                <span>{props.gender}</span>
            </td>
            <td>
                <button onClick={() => props.handleAllDetails(props.index)}>View</button>
            </td>
            <td>
                <button onClick={() => props.handleUpdate(props.id)}>Edit</button>
            </td>
            <td>
                <button onClick={() => props.handleRemove(props.id)}>Remove</button>
            </td>
        </tr>

    );
};

PatientTable.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    handleAllDetails: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
};


export default PatientTable;