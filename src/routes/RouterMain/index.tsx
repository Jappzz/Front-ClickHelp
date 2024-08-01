import React from 'react'; // Importação do React
import { Routes, Route } from 'react-router-dom'; // Importação do React Router Dom
import { Homepage } from '../../components/Pages/Homepage';

export const RouterMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    );
};
