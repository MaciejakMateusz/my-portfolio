import {ReactSVG} from "react-svg";

type SocialButtonType = {
    url: string,
    icon: string,
    small?: boolean
}

export const SocialButton = ({url, icon, small = false}: SocialButtonType) => {
    return (
        <>
            <div className={`logo-container ${small && 'small'}`}
                 onClick={() => window.open(url, '_blank')}>
                <ReactSVG src={icon}
                          className={`social-icon ${small && 'small'}`}/>
            </div>
        </>
    );
}