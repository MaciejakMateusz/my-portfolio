import {useAppDispatch} from "../../../hooks/hooks.ts";
import {useEffect} from "react";
import {fetchAQCountries, fetchAQLocations} from "../../../slices/airQualitySlice.ts";
import {ResponsiveLine} from "@nivo/line";

export const AirQuality = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAQCountries());
        dispatch(fetchAQLocations());
    }, []);

    const data = [
        {
            "id": "japan",
            "color": "hsl(256, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 3
                },
                {
                    "x": "helicopter",
                    "y": 87
                },
                {
                    "x": "boat",
                    "y": 146
                },
                {
                    "x": "train",
                    "y": 132
                },
                {
                    "x": "subway",
                    "y": 294
                },
                {
                    "x": "bus",
                    "y": 9
                },
                {
                    "x": "car",
                    "y": 36
                },
                {
                    "x": "moto",
                    "y": 83
                },
                {
                    "x": "bicycle",
                    "y": 8
                },
                {
                    "x": "horse",
                    "y": 170
                },
                {
                    "x": "skateboard",
                    "y": 266
                },
                {
                    "x": "others",
                    "y": 220
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(315, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 135
                },
                {
                    "x": "helicopter",
                    "y": 176
                },
                {
                    "x": "boat",
                    "y": 58
                },
                {
                    "x": "train",
                    "y": 136
                },
                {
                    "x": "subway",
                    "y": 223
                },
                {
                    "x": "bus",
                    "y": 69
                },
                {
                    "x": "car",
                    "y": 134
                },
                {
                    "x": "moto",
                    "y": 224
                },
                {
                    "x": "bicycle",
                    "y": 219
                },
                {
                    "x": "horse",
                    "y": 37
                },
                {
                    "x": "skateboard",
                    "y": 266
                },
                {
                    "x": "others",
                    "y": 240
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(183, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 113
                },
                {
                    "x": "helicopter",
                    "y": 263
                },
                {
                    "x": "boat",
                    "y": 298
                },
                {
                    "x": "train",
                    "y": 47
                },
                {
                    "x": "subway",
                    "y": 137
                },
                {
                    "x": "bus",
                    "y": 61
                },
                {
                    "x": "car",
                    "y": 1
                },
                {
                    "x": "moto",
                    "y": 188
                },
                {
                    "x": "bicycle",
                    "y": 59
                },
                {
                    "x": "horse",
                    "y": 236
                },
                {
                    "x": "skateboard",
                    "y": 288
                },
                {
                    "x": "others",
                    "y": 47
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(57, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 246
                },
                {
                    "x": "helicopter",
                    "y": 135
                },
                {
                    "x": "boat",
                    "y": 290
                },
                {
                    "x": "train",
                    "y": 232
                },
                {
                    "x": "subway",
                    "y": 28
                },
                {
                    "x": "bus",
                    "y": 29
                },
                {
                    "x": "car",
                    "y": 253
                },
                {
                    "x": "moto",
                    "y": 188
                },
                {
                    "x": "bicycle",
                    "y": 5
                },
                {
                    "x": "horse",
                    "y": 273
                },
                {
                    "x": "skateboard",
                    "y": 101
                },
                {
                    "x": "others",
                    "y": 256
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(195, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 102
                },
                {
                    "x": "helicopter",
                    "y": 34
                },
                {
                    "x": "boat",
                    "y": 46
                },
                {
                    "x": "train",
                    "y": 273
                },
                {
                    "x": "subway",
                    "y": 43
                },
                {
                    "x": "bus",
                    "y": 155
                },
                {
                    "x": "car",
                    "y": 232
                },
                {
                    "x": "moto",
                    "y": 232
                },
                {
                    "x": "bicycle",
                    "y": 12
                },
                {
                    "x": "horse",
                    "y": 257
                },
                {
                    "x": "skateboard",
                    "y": 256
                },
                {
                    "x": "others",
                    "y": 274
                }
            ]
        }
    ];

    return (
        <>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
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
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle',
                    truncateTickAt: 0
                }}
                pointSize={8}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="data.yFormatted"
                pointLabelYOffset={-12}
                enableArea={true}
                areaOpacity={0.05}
                enableTouchCrosshair={true}
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
            />
        </>
    );
}