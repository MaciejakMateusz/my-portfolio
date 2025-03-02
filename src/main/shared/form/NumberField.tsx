import {useAppDispatch} from "../../../hooks/hooks.ts";
import {NumberFieldProps} from "../../../types/NumberFieldProps.ts";

export const NumberField = (props: NumberFieldProps) => {
    const dispatch = useAppDispatch();
    return (
        <label className={'form-field-label'}>
            {props.label}
            <input type={'number'}
                   {...props.register(props.name)}
                   name={props.name}
                   step={0.001}
                   className={`form-text-field ${props.error ? 'invalid' : ''}`}
                   value={props.value}
                   onChange={(e) => dispatch(props.action(e.target.value))}/>
            {props.error && <span className="validation-msg">{props.error.message}</span>}
        </label>
    );
}