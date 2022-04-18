import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import React, { useState } from 'react';
import Detail from './Detail';
import Data from './data';

function App() {
    const [shoes, setShoes] = useState(Data);
    const [stock, setStock] = useState([10, 11, 12]);
    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={<Main shoes={shoes} setShoes={setShoes} />}
                ></Route>
                <Route
                    path='/detail/:id'
                    element={<Detail shoes={shoes} stock={stock} />}
                ></Route>
            </Routes>
        </Router>
    );
}
export default App;
