import {AirQualityChart} from "./AirQualityChart.tsx";
import {AirQualityControlPanel} from "./AirQualityControlPanel.tsx";

export const AirQuality = () => {
    return (
        <section className={'aq-container'}>
            <AirQualityControlPanel/>
            <AirQualityChart/>
        </section>
    );
};