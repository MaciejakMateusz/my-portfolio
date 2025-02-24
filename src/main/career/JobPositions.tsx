import Carousel from "react-multi-carousel";
import {JobPositionCard} from "./JobPositionCard.tsx";
import {useTranslation} from "react-i18next";

const CustomDot = ({onClick, active}: any) => {
    return (
        <li className={`custom-dot ${active ? 'active' : ''}`}
            onClick={onClick}/>
    );
};

export const JobPositions = () => {
    const {t} = useTranslation();
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };

    return (
        <div className={'career-job-positions'}>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                customDot={<CustomDot/>}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={false}
                arrows={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all 1.5s"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="carousel-item-padding"
                deviceType="desktop"
                pauseOnHover={true}>
                <JobPositionCard from={'2024-01'}
                                 to={t('currently')}
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