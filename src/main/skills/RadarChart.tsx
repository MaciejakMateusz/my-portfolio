import {RadarSliceTooltipDatum, RadarSliceTooltipProps, ResponsiveRadar} from '@nivo/radar'
import {useTranslation} from "react-i18next";

export const RadarChart = () => {
    const {t} = useTranslation();
    const translatedKeys: Record<string, string> = {
        private: t('privateProjects'),
        commercial: t('commercialProjects')
    };

    const data = [
        {
            "experience": "Java",
            "private": 79,
            "commercial": 112
        },
        {
            "experience": "React",
            "private": 62,
            "commercial": 45
        },
        {
            "experience": "Redux",
            "private": 51,
            "commercial": 26
        },
        {
            "experience": "SQL",
            "private": 54,
            "commercial": 110
        },
        {
            "experience": "REST-API",
            "private": 92,
            "commercial": 81
        }
    ];

    return (
        <div className={'radar-chart-container'}>
            <ResponsiveRadar
                data={data}
                keys={[ 'commercial', 'private']}
                indexBy="experience"
                valueFormat=">-.2f"
                margin={{top: 70, right: 100, bottom: 70, left: 100}}
                borderColor={{from: 'color'}}
                gridLevels={3}
                gridLabelOffset={35}
                enableDots={false}
                dotBorderWidth={2}
                colors={['#FF454E', '#F59906']}
                fillOpacity={0.25}
                motionConfig="wobbly"
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        translateX: -250,
                        translateY: -150,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemsSpacing: 20,
                        itemTextColor: '#F9F9F9',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        data: Object.keys(translatedKeys).map((key: string) => ({
                            id: key,
                            label: translatedKeys[key]
                        })),
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#FFF'
                                }
                            }
                        ]
                    }
                ]}
                sliceTooltip={({ index, data }: RadarSliceTooltipProps) => (
                    <div style={{
                        background: 'white',
                        padding: '8px 12px',
                        borderRadius: 10,
                        fontWeight: 400
                    }}>
                        <strong>{index}</strong>
                        {data.map((datum: RadarSliceTooltipDatum) => (
                            <div key={datum.id} style={{ color: datum.color }}>
                                {translatedKeys[datum.id] || datum.id}: {datum.value}
                            </div>
                        ))}
                    </div>
                )}

                theme={{
                    axis: {
                        ticks: {
                            text: {
                                fontSize: 15,
                                fontWeight: 300,
                                fill: '#F9F9F9',
                                fontFamily: "Inter, serif",
                            },
                        },
                    },
                    grid: {
                        line: {
                            stroke: '#1F1F1F'
                        }
                    },
                    crosshair: {
                        line: {
                            stroke: '#FFF'
                        }
                    },
                    legends: {
                        text: {
                            fontSize: 16,
                            fontFamily: "Inter, serif",
                            fontWeight: 300
                        }
                    }
                }}
            />
        </div>
    );
}