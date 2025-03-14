type SectionHeaderType = {
    title: string;
    description: string;
    lightened?: boolean;
    isYZero?: boolean;
}

export const SectionHeader = ({title, description, lightened, isYZero}: SectionHeaderType) => {
    return (
        <div className={'section-header'}>
            <div className={'centered-container'}>
                {lightened && (
                    <img src={'/blurred-light.png'}
                         className={`blurred-light ${isYZero ? 'show' : ''}`}
                         alt={'Blurred light'}/>)}
                <div className={'centered-container-wrapper'}>
                    <span className={'section-header-title'}>{title}</span>
                    <span className={'section-header-description'}>{description}</span>
                </div>
            </div>
        </div>
    );
};