import '../index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Main} from "../main/Main.tsx";
import {AirQuality} from "../main/projects/interactive/air-quality/AirQuality.tsx";
import {PortfolioApi} from "../main/projects/non-interactive/portfolio-api/PortfolioApi.tsx";
import {ToleranceMeasure} from "../main/projects/interactive/tolerance-measure/ToleranceMeasure.tsx";
import {TranslatorAI} from "../main/projects/interactive/translator-ai/TranslatorAI.tsx";

export const Router = () => {
    return (
        <BrowserRouter future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
        }}>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path='/air-quality' element={<AirQuality />}/>
                <Route path='/ai-translator' element={<TranslatorAI/>}/>
                <Route path='/tolerance-measure' element={<ToleranceMeasure/>}/>
                <Route path='/portfolio-api' element={<PortfolioApi/>}/>
            </Routes>
        </BrowserRouter>
    )
}