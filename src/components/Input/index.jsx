// components/Input.js
import React from 'react';

const Input = ({ label, type, name, value, onChange, checked, max, error }) => {
    const handleChange = (e) => {
        onChange(e);
    };

    return (
        <>
            <label>{label}</label>
            {type === 'radio' ? <input type={type} name={name} value={value} checked={checked} onChange={handleChange} />
                : <input type={type} name={name} value={value} onChange={handleChange} max={max} />}

            <span className='text-err'>{error}</span>
        </>)
};

export default Input;
