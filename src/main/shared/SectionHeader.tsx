type SectionHeaderType = {
    title: string,
    description: string
}

export const SectionHeader = ({title, description}: SectionHeaderType) => {
    return (
        <div className={'section-header'}>
            <div className={'centered-container'}>
                <img src={'/blurred-light.png'} className={'blurred-light'} alt={'Blurred light'}/>
                <div className={'centered-container-wrapper'}>
                    <span className={'section-header-title'}>{title}</span>
                    <span className={'section-header-description'}>{description}</span>
                </div>
            </div>
        </div>
    );
}