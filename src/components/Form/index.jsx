// components/Form.js
import React, { useState, useEffect } from 'react';
import './Form.scss';
import Input from '../Input';
import moment from 'moment/moment';

const Form = ({ onSubmit, initialData }) => {

    const [formData, setFormData] = useState(initialData || {});
    const [errors, setErrors] = useState({})
    const todayDate = moment(new Date()).format("yyyy-MM-DD");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    useEffect(() => {
        setFormData(initialData || {});
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const validation = () => {
        let error = {};
        let FormValid = true;
        if (!formData.firstname || formData.firstname === "") {
            FormValid = false
            error["firstname"] = "Please select firstname"
        }
        if (!formData.lastname || formData.lastname === "") {
            FormValid = false
            error["lastname"] = "Please select lastname"
        }
        if (!formData.hobbies || formData.hobbies === "") {
            FormValid = false
            error["hobbies"] = "Please select hobbies"
        }
        // Email validation using a simple regex pattern
        if (!emailPattern.test(formData.email)) {
            FormValid = false
            error["email"] = "Please enter a valid email address."
        }

        // Phone number validation using a simple regex pattern
        if (!phonePattern.test(formData.phoneno)) {
            FormValid = false
            error["phoneno"] = "Please enter a valid 10-digit phone number."
        }
        if (!formData.gender || formData.gender === "") {
            FormValid = false
            error["gender"] = "Please select gender"
        }
        setErrors(error)
        return FormValid
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validation()) return
        onSubmit(formData);
        setFormData({}); // Clear the form fields after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Input label="First Name:" type="text" name="firstname" value={formData.firstname || ''} onChange={handleChange} error={errors.firstname} />
            </div>
            <div>
                <Input label="Last Name:" type="text" name="lastname" value={formData.lastname || ''} onChange={handleChange} error={errors.lastname} />
            </div>
            <div>
                <Input label="Email:" type="email" name="email" value={formData.email || ''} onChange={handleChange} error={errors.email} />
            </div>
            <div>
                <Input label="Phone No:" type="number" name="phoneno" value={formData.phoneno || ''} onChange={handleChange} error={errors.phoneno} />
            </div>
            <div>
                <div className='gender-wrapper'>
                    <div className='item-container'>
                        <label>Gender:</label>
                    </div>
                    <div className='item-container'>
                        <Input
                            label="Male"
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                            className="checkmark"
                        />
                    </div>
                    <div className='item-container'>
                        <Input
                            label="Female"
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                            className="checkmark"
                        />
                    </div>
                    <div className='item-container'>
                        <Input
                            label="Other"
                            type="radio"
                            name="gender"
                            value="other"
                            checked={formData.gender === 'other'}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <span className='text-err'>{errors.gender}</span>
            </div>
            <div>
                <Input label="Hobbies:" type="text" name="hobbies" value={formData.hobbies || ''} onChange={handleChange} error={errors.hobbies} />
            </div>
            <div>
                <Input label="Date of Birth:" type="date" name="dob" value={formData.dob || ''} onChange={handleChange} max={todayDate} />
            </div>
            <button type="submit" className='btn-submit'>Submit</button>
        </form>
    );
};

export default Form;
