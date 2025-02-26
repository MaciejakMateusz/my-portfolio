import '../index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Main} from "../main/Main.tsx";
import {AirQuality} from "../main/projects/interactive/air-quality/AirQuality.tsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/air-quality' element={<AirQuality />}/>
                <Route path='/ai-translator' element={<h1>AI TRANSLATOR</h1>}/>
                <Route path='/tolerance-measure' element={<h1>TOLERANCE MEASURE</h1>}/>
                <Route path='/portfolio-api' element={<h1>PORTFOLIO REST API</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}