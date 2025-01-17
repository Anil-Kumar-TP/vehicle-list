
import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditVehicle = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [manufacture, setManufacture] = useState('');
    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/vehicle/${id}`)
            .then((res) => {
                setName(res.data.name)
                setDescription(res.data.description)
                setPrice(res.data.price)
                setManufacture(res.data.manufacture)
                setModel(res.data.model)
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
            })
    }, [])

    const handleEditVehicle = () => {
        const data = { title, author, publishYear };
        setLoading(true);
        axios.put(`http://localhost:5555/vehicle/${id}`, data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            })
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Edit Vehicle</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Manufacture</label>
                    <input type="text" value={manufacture} onChange={(e) => setManufacture(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Model</label>
                    <input type="number" value={model} onChange={(e) => setModel(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditVehicle}>Add Vehicle</button>
            </div>
        </div>
    );
};

export default EditVehicle;
