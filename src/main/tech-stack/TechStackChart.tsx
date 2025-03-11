import {RadarSliceTooltipDatum, RadarSliceTooltipProps, ResponsiveRadar} from '@nivo/radar'
import {useTranslation} from "react-i18next";
import {useSkillsData} from "../../hooks/useSkillsData.ts";
import {RadarChartLegend} from "./RadarChartLegend.tsx";
import {useEffect, useState} from "react";

export const TechStackChart = () => {
    const {t} = useTranslation();
    const data = useSkillsData();
    const initialMargins = {top: 70, right: 100, bottom: 70, left: 100};
    const [margins, setMargins] = useState(initialMargins);
    const translatedKeys: Record<string, string> = {
        private: t('privateProjects'),
        commercial: t('commercialProjects')
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 400) {
                setMargins({top: 80, right: 40, bottom: 220, left: 40});
            } else if (window.innerWidth <= 450) {
                setMargins({top: 80, right: 40, bottom: 180, left: 40});
            } else if (window.innerWidth <= 600) {
                setMargins({top: 100, right: 40, bottom: 100, left: 40});
            } else if (window.innerWidth <= 800) {
                setMargins({top: 100, right: 70, bottom: 100, left: 70});
            } else if (window.innerWidth <= 1050) {
                setMargins({top: 100, right: 130, bottom: 100, left: 130});
            } else {
                setMargins(initialMargins);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={'radar-chart-container'}>
            <RadarChartLegend/>
            <ResponsiveRadar
                data={data}
                keys={['commercial', 'private']}
                indexBy="experience"
                valueFormat=">-.2f"
                margin={margins}
                gridLevels={3}
                gridLabelOffset={window.innerWidth <= 600 ? 20 : 35}
                enableDots={false}
                dotBorderWidth={2}
                borderColor={(datum) => {
                    if (datum.key === 'commercial') return '#FFB000'
                    if (datum.key === 'private') return '#FF454E'
                    return '#333'
                }}
                colors={['rgba(122, 84, 0, 0.60)', 'rgba(66, 0, 3, 0.60)']}
                motionConfig="wobbly"
                sliceTooltip={({index, data}: RadarSliceTooltipProps) => (
                    <div className={'chart-tooltip'}>
                        <p className={'chart-tooltip-index'}>{index}</p>
                        {data.map((datum: RadarSliceTooltipDatum) => (
                            <div key={datum.id} className={'radar-chart-tooltip-value'}>
                                <div className={'radar-chart-dot'}
                                     style={datum.id === 'commercial' ? {background: '#FFB000'} : {background: '#FF454E'}}/>
                                <div className={'radar-chart-tooltip-label'}>
                                    <span>{translatedKeys[datum.id] || datum.id}</span>
                                    <span>{datum.value}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                theme={{
                    axis: {
                        ticks: {
                            text: {
                                fontSize: window.innerWidth <= 800 ? 14 : 16,
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
                    }
                }}
            />
        </div>
    );
}