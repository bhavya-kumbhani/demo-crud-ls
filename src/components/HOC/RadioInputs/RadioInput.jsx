import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({ label, type, name, value, onChange, checked, error }) => {
    return (
        <>
            <label>{label}</label>
            <input type={type} name={name} value={value} checked={checked} onChange={onChange} />
            <span className='text-err'>{error}</span>
        </>
    );
};

RadioInput.PropTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.string,
    error: PropTypes.string
};

export default RadioInput;
