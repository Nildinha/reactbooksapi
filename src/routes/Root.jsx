import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import ListaBooks from '../pages/ListaBooks';
import ListaAdmin from '../pages/ListaAdmin';
import Cadastrar from '../pages/Cadastrar';
import NotFound from '../pages/NotFound';
import Editar from '../pages/Editar'

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ListaBooks />} />
                <Route path="/administrar" element={<ListaAdmin />} />
                <Route path="/administrar/cadastrar" element={<Cadastrar />} />
                <Route path="/administrar/Editar/:id" element={<Editar />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default Root;