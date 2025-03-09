import {useAppDispatch} from "../../../hooks/hooks.ts";
import {TextFieldProps} from "../../../types/TextFieldProps.ts";

export const TextAreaField = (props: TextFieldProps) => {
    const dispatch = useAppDispatch();
    const className = props.className || 'form-text-area-field';
    return (
        <label className={'form-field-label'}>
            {props.label}
            <textarea value={props.value}
                      {...props.register(props.name)}
                      name={props.name}
                      readOnly={props.readonly}
                      placeholder={props.placeholder}
                      className={`${className} ${props.error ? 'invalid' : ''}`}
                      onChange={(e) => dispatch(props.action(e.target.value))}/>
            {props.error && <span className='validation-msg text-area'>{props.error.message}</span>}
        </label>
    );
}