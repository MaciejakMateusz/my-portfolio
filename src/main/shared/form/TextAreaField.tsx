import {useAppDispatch} from "../../../hooks/hooks.ts";
import {setText} from "../../../slices/contactSlice.ts";
import {TextFieldProps} from "../../../types/TextFieldProps.tsx";

export const TextAreaField = (props: TextFieldProps) => {
    const dispatch = useAppDispatch();
    return (
        <label className={'form-field-label'}>
            {props.label}
            <textarea value={props.value}
                      {...props.register(props.name)}
                      name={props.name}
                      className={`form-text-area-field ${props.error ? 'invalid' : ''}`}
                      onChange={(e) => dispatch(setText(e.target.value))}/>
            {props.error && <span className="validation-msg">{props.error.message}</span>}
        </label>
    );
}