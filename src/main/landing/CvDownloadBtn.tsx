import {ReactSVG} from "react-svg";
import {getLanguage} from "../../util/util.ts";

export const CvDownloadBtn = () => {
    const activeLng = getLanguage();

    const handleDownload = () => {
        const fileName = getFileName();
        const pdfPath = `/cv/${fileName}`;
        const link = document.createElement("a");
        link.href = pdfPath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const getFileName = () => {
        if (activeLng === 'pl') {
            return 'Maciejak_Spring_React_2years_PL.pdf'
        }
        return 'Maciejak_Spring_React_2years_EN.pdf'
    }

    return (
        <>
            <div className={'logo-container'}
                 onClick={() => handleDownload()}>
                <ReactSVG src={'/github-logo.svg'} className={'social-icon'}/>
            </div>
        </>
    );
}