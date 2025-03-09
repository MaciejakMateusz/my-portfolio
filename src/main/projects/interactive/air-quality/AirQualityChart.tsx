import {ResponsiveLine} from "@nivo/line";
import {useEffect, useMemo} from "react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../../../hooks/hooks.ts";
import {fetchAQMeasurements} from "../../../../slices/airQualitySlice.ts";
import {useTranslation} from "react-i18next";
import {CustomSliceTooltip} from "./CustomSliceTooltip.tsx";

export const AirQualityChart = () => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const {chosenLocation, chosenYear, chosenMonth} = useSelector((state: any) => state.airQuality.view);
    const {data} = useSelector((state: any) => state.airQuality.fetchMeasurements);
    const {error} = useSelector((state: any) => state.airQuality.fetchCountries);

    const sensorIds = useMemo(() =>
            chosenLocation.value?.sensors?.map((sensor: any) => sensor.id).join(",") || "",
        [chosenLocation]
    );

    const dateFrom = `${chosenYear.value}-${chosenMonth.value}-01`;
    const lastDay = new Date(Number(chosenYear.value), Number(chosenMonth.value), 0).getDate();
    const dateTo = `${chosenYear.value}-${chosenMonth.value}-${lastDay}`;

    useEffect(() => {
        if (sensorIds) {
            dispatch(fetchAQMeasurements({sensorIds, dateFrom, dateTo}));
        }
    }, [dispatch, sensorIds, chosenYear.value, chosenMonth.value]);

    const fallbackData = () => {
        return [{
            id: "No data",
            data: Array.from({length: 31}, (_, index) => ({x: (++index).toString(), y: 0}))
        }];
    };

    return (
        <div className={'air-quality-chart-wrapper'}>
            {error && <span className={'server-down-msg'}>{t('restApiDown')}</span>}
            <ResponsiveLine
                data={data && data.length ? data : fallbackData()}
                margin={{top: 50, bottom: 50, left: 70, right: 70}}
                xScale={{type: 'point'}}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                }}
                yFormat=" >-.2f"
                curve="catmullRom"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: t('days'),
                    legendOffset: 36,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickValues: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: `${t('sensorValue')}`,
                    legendOffset: -60,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                pointSize={8}
                gridYValues={5}
                pointColor={{theme: 'background'}}
                pointBorderWidth={2}
                pointBorderColor={{from: 'serieColor'}}
                pointLabel="data.yFormatted"
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                enableSlices={'x'}
                enableGridX={false}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                theme={{
                    grid: {
                        line: {
                            stroke: '#383838'
                        },
                    },
                    text: {
                        fontFamily: 'Inter, serif',
                        stroke: '#828282',
                        fontWeight: 200,
                        letterSpacing: 1
                    },
                    annotations: {
                        text: {
                            fontFamily: 'Inter, serif'
                        }
                    },
                    axis: {
                        ticks: {
                            line: {
                                strokeWidth: '0'
                            },
                            text: {
                                fill: '#93939E'
                            }
                        }
                    },
                    crosshair: {
                        line: {
                            stroke: '#93939E'
                        }
                    },
                    legends: {
                        text: {
                            fill: '#93939E'
                        }
                    }
                }}
                sliceTooltip={(props) => <CustomSliceTooltip {...props} />}
            />
        </div>
    );
}