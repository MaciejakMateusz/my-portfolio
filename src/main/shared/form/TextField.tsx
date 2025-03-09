import {useAppDispatch} from "../../../hooks/hooks.ts";
import {TextFieldProps} from "../../../types/TextFieldProps.ts";



export const TextField = (props: TextFieldProps) => {
    const dispatch = useAppDispatch();
    return (
        <label className={'form-field-label'}>
            {props.label}
            <input type={'text'}
                   {...props.register(props.name)}
                   name={props.name}
                   className={`form-text-field ${props.error ? 'invalid' : ''}`}
                   value={props.value}
                   placeholder={props.placeholder}
                   onChange={(e) => dispatch(props.action(e.target.value))}/>
            {props.error && <span className="validation-msg">{props.error.message}</span>}
        </label>
    );
}