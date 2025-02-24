import Carousel from "react-multi-carousel";
import {BookCard} from "./BookCard.tsx";
import {useTranslation} from "react-i18next";

export const BooksCarousel = () => {
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
        <BookCard title={t('atlasShrugged')}
                  author={'Ayn Rand'}
                  img={'/books/atlas-book.png'}
                  url={'https://www.empik.com/atlas-zbuntowany-rand-ayn,p1475493153,ksiazka-p?mpShopId=0'}/>,
        <BookCard title={t('cleanCode')}
                  author={'Robert C. Martin'}
                  img={'/books/clean-code-book.png'}
                  url={'https://www.empik.com/czysty-kod-podrecznik-dobrego-programisty-robert-c-martin,p1100571160,ksiazka-p'}/>,
        <BookCard title={t('designPatterns')}
                  author={'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides'}
                  img={'/books/design-patterns-book.png'}
                  url={'https://helion.pl/ksiazki/wzorce-projektowe-elementy-oprogramowania-obiektowego-wielokrotnego-uzytku-erich-gamma-richard-helm-ralph-johnson-john-vli,wzoevv.htm#format/d'}/>,
        <BookCard title={t('javaBook')}
                  author={'Cay S. Horstmann'}
                  img={'/books/java-book.png'}
                  url={'https://helion.pl/ksiazki/java-podstawy-wydanie-xii-cay-horstmann,javp12.htm#format/d'}/>,
        <BookCard title={t('hackingAPI')}
                  author={'Corey J. Ball'}
                  img={'/books/hacking-book.png'}
                  url={'https://helion.pl/ksiazki/hakowanie-interfejsow-api-lamanie-interfejsow-programowania-aplikacji-internetowych-corey-j-ball,hakint.htm#format/d'}/>,
        <BookCard title={t('cantHurt')}
                  author={'David Goggins'}
                  img={'/books/cant-hurt-book.png'}
                  url={'https://www.empik.com/nic-mnie-nie-zlamie-zapanuj-nad-swoim-umyslem-i-pokonaj-przeciwnosci-losu-goggins-david,p1371591159,ksiazka-p'}/>,
        <BookCard title={t('winFriends')}
                  author={'Dale Carnegie'}
                  img={'/books/how-to-gain-friends-book.png'}
                  url={'https://www.empik.com/jak-zdobyc-przyjaciol-i-zjednac-sobie-ludzi-carnegie-dale,62283,ksiazka-p'}/>
    ];
    const repeatedCards = [...cards, ...cards, ...cards, ...cards];
    return (
        <div className={'carousel'}>
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
}