import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CreateVehicle from './pages/CreateVehicle';
import ShowVehicle from './pages/ShowVehicle';
import EditVehicle from './pages/EditVehicle';
import DeleteVehicle from './pages/DeleteVehicle';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/vehicle/create' element={<CreateVehicle />} />
      <Route path='/vehicle/details/:id' element={<ShowVehicle />} />
      <Route path='/vehicle/edit/:id' element={<EditVehicle />} />
      <Route path='/vehicle/delete/:id' element={<DeleteVehicle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;