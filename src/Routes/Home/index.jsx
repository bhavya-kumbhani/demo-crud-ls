// App.js
import React, { useEffect, useState } from 'react';
import Form from '../../components/Form';
import List from '../../components/List';
import "./Home.scss"

const Home = () => {
    const [data, setData] = useState([]);
    const [editItem, setEditItem] = useState(null);

    // Load data from localStorage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem('crudData');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    // Save data to localStorage whenever data changes
    useEffect(() => {
        localStorage.setItem('crudData', JSON.stringify(data));
    }, [data]);

    const handleSubmit = (formData) => {
        if (editItem) {
            // Update existing item
            setData((prevData) =>
                prevData.map((item) => (item.email === editItem.email ? { ...formData } : item))
            );
            setEditItem(null);
        } else {
            // Add new item
            setData((prevData) => [...prevData, formData]);
        }
    };

    const handleDelete = (email) => {
        setData((prevData) => prevData.filter((item) => item.email !== email));
    };

    const handleEdit = (item) => {
        setEditItem(item);
    };

    return (
        <div className='home-container'>
            <h1 className='header-conatiner'>CRUD Application</h1>
            <Form onSubmit={handleSubmit} initialData={editItem} />
            <List data={data} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    );
};

export default Home;
