import {useTranslation} from "react-i18next";

export const RadarChartLegend = () => {
    const {t} = useTranslation();
    return (
        <div className={'radar-chart-legend'}>
            <div className={'legend-title'}>Projekty:</div>
            <div className={'legend-item'}>
                <span className={'legend-color'} style={{backgroundColor: '#FF454E'}}/>
                <div className={'legend-labels'}>
                    <div className={'legend-label-main'}>{t('privateProjects')}</div>
                    <div className={'legend-label-sub'}>
                        {t('privateProjectsDescription')}
                    </div>
                </div>
            </div>
            <div className={'legend-item'}>
                <span className={'legend-color'} style={{backgroundColor: '#F59906'}}/>
                <div className={'legend-labels'}>
                    <div className={'legend-label-main'}>{t('commercialProjects')}</div>
                    <div className={'legend-label-sub'}>
                        {t('commercialProjectsDescription')}
                    </div>
                </div>
            </div>
        </div>
    );
}