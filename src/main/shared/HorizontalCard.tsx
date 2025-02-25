import {ReactSVG} from "react-svg";

type HobbyCardProps = {
    header: string;
    description: string;
    icon: string;
    type?: string;
    href?: string;
}

export const HorizontalCard = (props: HobbyCardProps) => {

    const handleClick = () => {
        if (!props.type || !props.href) {
            return;
        } else if (props.type === 'map') {
            window.open(props.href, '_blank')
            return;
        }
        window.location.href = props.href;
    }

    return (
        <div className={'hobby-card-wrapper'}>
            <div className={'hobby-card-icon-container'}>
                <ReactSVG src={props.icon}/>
            </div>
            <div className={'hobby-card-header'}>{props.header}</div>
            <div className={`hobby-card-description ${props.href ? 'contact-type' : ''}`}
                 onClick={() => handleClick()}>{props.description}</div>
        </div>
    );
}