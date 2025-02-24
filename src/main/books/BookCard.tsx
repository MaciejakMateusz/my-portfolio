import {useTranslation} from "react-i18next";

type BookCardProps = {
    title: string;
    author: string;
    img: string;
    url: string;
};

export const BookCard = (props: BookCardProps) => {
    const {t} = useTranslation();
    return (
        <div className="carousel-card">
            <div className="carousel-card-inner-wrapper">
                <img src={props.img} alt={props.title} className={"book-card-image"}/>
            </div>

            <div className="carousel-card-turned">
                <p className={'book-p-header'}>Tytuł:</p>
                <p className={'book-title'}>{props.title}</p>
                <p className={'book-p-header'}>Autor:</p>
                <p className={'book-author'}>{props.author}</p>
                <div className={'carousel-card-button-container'}>
                    <button className={'primary-button'} onClick={() => window.open(props.url, '_blank')}>{t('seeBook')}</button>
                </div>
            </div>
        </div>
    );
};
