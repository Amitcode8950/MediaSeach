import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Collectionpage from './pages/collectionpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div className='h-full w-full min-h-screen bg-(--colour1) text-white'>
            <ToastContainer position="top-right" theme="dark" />
            <Routes>
                <Route  path="/" element={<Homepage/>} />
                <Route path="/collection" element={<Collectionpage/>}/>
            </Routes>
        </div>
    )
}

export default App
