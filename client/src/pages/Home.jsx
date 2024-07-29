import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { PiBookOpenTextLight } from 'react-icons/pi'

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/vehicle')
            .then((res) => {
                setVehicles(res.data.data);
                setLoading(false);
            })

            .catch((error) => {
                console.log(error)
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Vehicles List</h1>
                <Link to='/vehicle/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            {loading ? <Spinner /> :
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {vehicles.map((vehicle) => {
                        return <div key={vehicle._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
                            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>{vehicle.name}</h2>
                            <h4 className='my-2 text-gray-500'>{vehicle.description}</h4>
                            <div className='flex justify-start items-center gap-x-2'>
                                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                                <h2 className='my-1'>{vehicle.price}</h2>
                            </div>
                            <div className='flex justify-start items-center gap-x-2'>
                                <BiUserCircle className='text-red-300 text-2xl' />
                                <h2 className='my-1'>{vehicle.manufacture}</h2>
                            </div>
                            <div className='flex justify-start items-center gap-x-2'>
                                <BiUserCircle className='text-red-300 text-2xl' />
                                <h2 className='my-1'>{vehicle.model}</h2>
                            </div>
                            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                                <Link to={`/vehicle/details/${vehicle._id}`}>
                                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                                </Link>
                                <Link to={`/vehicle/edit/${vehicle._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                                </Link>
                                <Link to={`/vehicle/delete/${vehicle._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                                </Link>
                            </div>
                        </div>
                    })}
                </div>
            }
        </div>
    );
};

export default Home;