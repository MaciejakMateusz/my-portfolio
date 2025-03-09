type CustomLabelProps = {
    text: string;
    subText?: string | undefined;
}

export const CustomLabel = ({text, subText}: CustomLabelProps) => {
    return (
        <p className={'custom-label-white'}>
            {text}
            <span className={'custom-label-grey'}>
                    {subText}
            </span>
        </p>
    );
}