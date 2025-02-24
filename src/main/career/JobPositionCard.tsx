import {duties} from "../projects/jobDuties.ts";

type JobPositionCardProps = {
    from: string;
    to: string;
    positionName: string;
    locality?: string | undefined;
    dutiesKey: string;
}

export const JobPositionCard = (props: JobPositionCardProps) => {
    return (
        <div className={'job-position-card'}>
            <div className={'job-position-card-wrapper'}>
                <div className={'job-position-from-to'}>{`${props.from} / ${props.to}`}</div>
                <div className={'position-name-locality'}>
                    <span className={'position-name'}>{props.positionName}</span>
                    {props.locality && <span className={'position-locality'}>{props.locality}</span>}
                </div>
                <ul className={'duty-list'}>
                    {duties.get(props.dutiesKey)?.map((duty: string, index) => (
                        <li key={index}>{duty}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}