import {ResponsiveRadar} from '@nivo/radar'

export const RadarChart = () => {
    const data = [
        {
            "experience": "Java",
            "commercial": 112,
            "projects": 79,
        },
        {
            "experience": "React",
            "commercial": 45,
            "projects": 62,
        },
        {
            "experience": "Redux",
            "commercial": 26,
            "projects": 51,
        },
        {
            "experience": "SQL",
            "commercial": 110,
            "projects": 54,
        },
        {
            "experience": "REST-API",
            "commercial": 81,
            "projects": 92,
        }
    ];

    return (
        <div className={'radar-chart-container'}>
            <ResponsiveRadar
                data={data}
                keys={['commercial', 'projects']}
                indexBy="experience"
                valueFormat=">-.2f"
                margin={{top: 70, right: 0, bottom: 40, left: 0}}
                borderColor={{from: 'color'}}
                gridLevels={3}
                gridLabelOffset={35}
                enableDots={false}
                dotBorderWidth={2}
                colors={['#FF454E', '#F59906']}
                fillOpacity={0.25}
                motionConfig="wobbly"
                theme={{
                    axis: {
                        ticks: {
                            text: {
                                fontSize: 15,
                                fill: '#FFF',
                                fontFamily: "Poppins, serif",
                            },
                        },
                    },
                    grid: {
                        line: {
                            stroke: '#414449'
                        }
                    },
                    crosshair: {
                        line: {
                            stroke: '#FFF'
                        }
                    }
                }}
            />
        </div>
    );
}