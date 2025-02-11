import {RadarChart} from "./RadarChart.tsx";
import {Introduction} from "./Introduction.tsx";

export const Landing = () => {
    return (
        <>
            <div className={'landing-grid'}>
                <Introduction/>
                <RadarChart/>
            </div>
        </>
    );
}