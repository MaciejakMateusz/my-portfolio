import '../index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Main} from "../main/Main.tsx";
import {AirQuality} from "../main/projects/interactive/AirQuality.tsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/air-quality' element={<AirQuality />}/>
            </Routes>
        </BrowserRouter>
    )
}