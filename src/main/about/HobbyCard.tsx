import {ReactSVG} from "react-svg";

type HobbyCardProps = {
    header: string;
    description: string;
    icon: string;
}

export const HobbyCard = (props: HobbyCardProps) => {
    return (
        <div className={'hobby-card-wrapper'}>
            <div className={'hobby-card-icon-container'}>
                <ReactSVG src={props.icon}/>
            </div>
            <div className={'hobby-card-header'}>{props.header}</div>
            <div className={'hobby-card-description'}>{props.description}</div>
        </div>
    );
}