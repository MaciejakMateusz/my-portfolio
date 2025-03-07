export const AboutPhotoChunk = () => {
    return (
        <div className={'about-photo-container non-selectable'}>
            <img src={'/m-maciejak-image.png'} alt={'M. Maciejak'} className={'about-photo'}/>
            <div className={'about-photo-signature-wrapper'}>
                <div className={'about-photo-signature'}>Mateusz Maciejak</div>
            </div>
        </div>
    );
};