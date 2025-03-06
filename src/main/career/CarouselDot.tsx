export const CarouselDot = ({onClick, active}: any) => {
    return (
        <li className={`custom-dot ${active && 'active'}`}
            onClick={onClick}/>
    );
};