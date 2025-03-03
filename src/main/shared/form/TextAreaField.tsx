import {useAppDispatch} from "../../../hooks/hooks.ts";
import {TextFieldProps} from "../../../types/TextFieldProps.ts";

export const TextAreaField = (props: TextFieldProps) => {
    const dispatch = useAppDispatch();
    return (
        <label className={'form-field-label'}>
            {props.label}
            <textarea value={props.value}
                      {...props.register(props.name)}
                      name={props.name}
                      readOnly={props.readonly}
                      className={`form-text-area-field ${props.error ? 'invalid' : ''}`}
                      onChange={(e) => dispatch(props.action(e.target.value))}/>
            {props.error && <span className='validation-msg text-area'>{props.error.message}</span>}
        </label>
    );
}