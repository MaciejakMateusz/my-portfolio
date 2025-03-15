import {ReactSVG} from "react-svg";

type SocialButtonType = {
    url: string,
    icon: string,
}

export const SocialButton = ({url, icon}: SocialButtonType) => {
    return (
        <>
            <div className={'logo-container'}
                 onClick={() => window.open(url, '_blank')}>
                <ReactSVG src={icon}
                          className={'social-icon'}/>
            </div>
        </>
    );
}