import React from 'react';
import PropTypes from 'prop-types';

const EncounterTable = props => {
    return (
        <tr>
            <td>
                <span>{props.id}</span>
            </td>
            <td>
                <span>{props.notes}</span>
            </td>
            <td>
                <span>{props.visitCode}</span>
            </td>
            <td>
                <span>{props.provider}</span>
            </td>
            <td>
                <span>{props.billingCode}</span>
            </td>
            <td>
                <span>{props.icd10}</span>
            </td>
            <td>
                <span>{props.totalCost}</span>
            </td>
            <td>
                <span>{props.copay}</span>
            </td>
            <td>
                <span>{props.chiefComplaint}</span>
            </td>
            <td>
                <span>{props.pulse}</span>
            </td>
            <td>
                <span>{props.systolic}</span>
            </td>
            <td>
                <span>{props.diastolic}</span>
            </td>
            <td>
                <span>{props.date}</span>
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

EncounterTable.propTypes = {
    id: PropTypes.number.isRequired,
    notes: PropTypes.string.isRequired,
    visitCode: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    billingCode: PropTypes.string.isRequired,
    icd10: PropTypes.string.isRequired,
    totalCost: PropTypes.number.isRequired,
    copay: PropTypes.number.isRequired,
    chiefComplaint: PropTypes.string.isRequired,
    pulse: PropTypes.number.isRequired,
    systolic: PropTypes.number.isRequired,
    diastolic: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    handleUpdate: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
};


export default EncounterTable;