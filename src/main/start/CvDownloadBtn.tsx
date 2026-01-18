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
        if (['pl', 'pl-PL'].includes(activeLng)) {
            return 'Maciejak_Spring_Quantexa_2years_PL.pdf'
        }
        return 'Maciejak_Spring_Quantexa_2years_EN.pdf'
    }

    return (
        <>
            <div className={'secondary-button'}
                 onClick={() => handleDownload()}>
                CV
                <ReactSVG src={'/download-icon.svg'} className={'download-icon'}/>
            </div>
        </>
    );
}