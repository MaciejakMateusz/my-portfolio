import Carousel from "react-multi-carousel";
import {JobPositionCard} from "./JobPositionCard.tsx";
import {useTranslation} from "react-i18next";
import {CarouselDot} from "./CarouselDot.tsx";

export const JobPositions = () => {
    const {t} = useTranslation();
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
        },
        tablet: {
            breakpoint: {max: 1250, min: 800},
            items: 2,
        },
        mobile: {
            breakpoint: {max: 800, min: 0},
            items: 1,
        },
    };

    return (
        <div className={'career-job-positions'}>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                customDot={<CarouselDot/>}
                responsive={responsive}
                ssr={true}
                infinite={false}
                autoPlay={false}
                arrows={false}
                keyBoardControl={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding"
                deviceType="desktop"
                pauseOnHover={false}>
                <JobPositionCard from={'2025-05'}
                                 to={t('currently')}
                                 positionName={t('dataEngineer')}
                                 locality={'ING Hubs Poland'}
                                 dutiesKey={'dataEngineer'}/>
                <JobPositionCard from={'2024-01'}
                                 to={t('2025-04')}
                                 positionName={'Java Developer'}
                                 locality={'EQ System, Dąbrowa Górnicza'}
                                 dutiesKey={'javaDev'}/>
                <JobPositionCard from={'2023-11'}
                                 to={'2024-01'}
                                 positionName={t('devIntern')}
                                 locality={'EQ System, Dąbrowa Górnicza'}
                                 dutiesKey={'javaIntern'}/>
                <JobPositionCard from={'2023-03'}
                                 to={'2023-11'}
                                 positionName={t('careerBreak')}
                                 dutiesKey={'careerBreak'}/>
                <JobPositionCard from={'2018-01'}
                                 to={'2023-03'}
                                 positionName={t('cncProgrammer')}
                                 locality={'Boal Systemen B.V. - Netherlands'}
                                 dutiesKey={'cncProgrammer'}/>
            </Carousel>
        </div>
    );
}