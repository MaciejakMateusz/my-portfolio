import {useTranslation} from "react-i18next";
import {FieldError, UseFormRegister} from "react-hook-form";
import {useAppDispatch} from "../../../hooks/hooks.ts";

type TextFieldProps = {
    register: UseFormRegister<any>;
    error: FieldError | undefined;
    value: string;
    action: any;
}

export const TextField = (props: TextFieldProps) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    return (
        <label className={'form-field-label'}>
            {t('nameSurname')}
            <input type={'text'}
                   {...props.register('from')}
                   className={`form-text-field ${props.error ? 'invalid' : ''}`}
                   value={props.value}
                   onChange={(e) => dispatch(props.action(e.target.value))}/>
            {props.error && <span className="validation-msg">{props.error.message}</span>}
        </label>
    );
}