import {RadarSliceTooltipDatum, RadarSliceTooltipProps, ResponsiveRadar} from '@nivo/radar'
import {useTranslation} from "react-i18next";
import {useSkillsData} from "../../hooks/useSkillsData.ts";
import {RadarChartLegend} from "./RadarChartLegend.tsx";

export const RadarChart = () => {
    const {t} = useTranslation();
    const data = useSkillsData();
    const translatedKeys: Record<string, string> = {
        private: t('privateProjects'),
        commercial: t('commercialProjects')
    };

    return (
        <div className={'radar-chart-container'}>
            <RadarChartLegend/>
            <ResponsiveRadar
                data={data}
                keys={['commercial', 'private']}
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
                sliceTooltip={({index, data}: RadarSliceTooltipProps) => (
                    <div className={'radar-chart-tooltip'}>
                        <p className={'radar-chart-tooltip-index'}>{index}</p>
                        {data.map((datum: RadarSliceTooltipDatum) => (
                            <div key={datum.id} className={'radar-chart-tooltip-value'}>
                                <div className={'radar-chart-dot'} style={{background: datum.color}}/>
                                {translatedKeys[datum.id] || datum.id}: {datum.value}%
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