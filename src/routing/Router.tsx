import '../index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Main} from "../main/Main.tsx";
import {AirQuality} from "../main/projects/interactive/air-quality/AirQuality.tsx";
import {PortfolioApi} from "../main/projects/non-interactive/portfolio-api/PortfolioApi.tsx";
import {ToleranceMeasure} from "../main/projects/interactive/tolerance-measure/ToleranceMeasure.tsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/air-quality' element={<AirQuality />}/>
                <Route path='/ai-translator' element={<h1>AI TRANSLATOR</h1>}/>
                <Route path='/tolerance-measure' element={<ToleranceMeasure/>}/>
                <Route path='/portfolio-api' element={<PortfolioApi/>}/>
            </Routes>
        </BrowserRouter>
    )
}