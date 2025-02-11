import {ReactSVG} from "react-svg";

export const SocialButtons = () => {

    const redirectToSocialPage = (url :string) => {
        window.open(url, '_blank');
    }

    return (
        <div className={'logo-icons-wrapper'}>
            <div className={'logo-container'}
                 onClick={() => redirectToSocialPage('https://www.linkedin.com/in/mateusz-maciejak/')}>
                <ReactSVG src={'/linkedin-logo.svg'}
                          className={'social-icon'}/>
            </div>
            <div className={'logo-container'}
                 onClick={() => redirectToSocialPage('https://github.com/MaciejakMateusz')}>
                <ReactSVG src={'/github-logo.svg'}
                          className={'social-icon'}/>
            </div>
        </div>
    );
}