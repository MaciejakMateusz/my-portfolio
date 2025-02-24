import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {ProjectCard} from "./ProjectCard.tsx";
import {useTranslation} from "react-i18next";

export const ProjectsCarousel = () => {
    const {t} = useTranslation();
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 3,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 2,
        },
    };
    const cards = [
        <ProjectCard name={'UI Designer Portfolio'}
                     description={'Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam.'}
                     technologies={"Spreng but, Rekt, REST, AI"}
                     img={'/designer-image.png'}/>,
        <ProjectCard name={'Time Tracker'}
                     description={'Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam.'}
                     technologies={"Spreng but, Rekt, REST, AI"}
                     img={'/designer-image.png'}/>,
        <ProjectCard name={t('translatorAI')}
                     description={'Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam.'}
                     technologies={"Spreng but, Rekt, REST, AI"}
                     img={'/translator-image.png'}/>,
        <ProjectCard name={'Air Quality'}
                     description={'Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam.'}
                     technologies={"Spreng but, Rekt, REST, AI"}
                     img={'/air-quality-image.png'}/>,
        <ProjectCard name={t('digitalMenu')}
                     description={'Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam.'}
                     technologies={"Spreng but, Rekt, REST, AI"}
                     img={'/digital-menu-image.png'}/>,
        <ProjectCard name={'Tolerance measure'}
                     description={'Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam.'}
                     technologies={"Spreng but, Rekt, REST, AI"}
                     img={'/air-quality-image.png'}/>,
        <ProjectCard name={'Portfolio REST-API'}
                     description={'Lorem ipsum dolor sit amet consectetur. Viverra vulputate morbi est adipiscing consequat. Ut venenatis suspendisse egestas ut. Faucibus nam.'}
                     technologies={"Spreng but, Rekt, REST, AI"}
                     img={'/air-quality-image.png'}/>
    ]
    const repeatedCards = [...cards, ...cards, ...cards, ...cards]

    return (
        <div className="carousel">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                arrows={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all 1.5s"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="carousel-item-padding"
                deviceType="desktop"
                pauseOnHover={true}>
                {repeatedCards.map((card, index) => (
                    <div key={index}>{card}</div>
                ))}
            </Carousel>
        </div>
    );
};
