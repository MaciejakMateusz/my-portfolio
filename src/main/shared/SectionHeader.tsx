type SectionHeaderType = {
    title: string,
    description: string
}

export const SectionHeader = ({title, description}: SectionHeaderType) => {
    return (
        <div className={'section-header'}>
            <div className={'centered-container'}>
                <div className={'centered-container-wrapper'}>
                    <span className={'section-header-title'}>{title}</span>
                    <span className={'section-header-description'}>{description}</span>
                </div>
            </div>
        </div>
    );
}