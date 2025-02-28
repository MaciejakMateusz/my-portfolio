import {useTranslation} from "react-i18next";
import {FieldError, UseFormRegister} from "react-hook-form";
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {setText} from "../../../slices/contactSlice.ts";

type TextAreaProps = {
    register: UseFormRegister<any>;
    error: FieldError | undefined;
    value: string;
    action: any;
}

export const TextAreaField = (props: TextAreaProps) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    return (
        <label className={'form-field-label'}>
            {t('message')}
            <textarea value={props.value}
                      {...props.register('text')}
                      className={`form-text-area-field ${props.error ? 'invalid' : ''}`}
                      onChange={(e) => dispatch(setText(e.target.value))}/>
            {props.error && <span className="validation-msg">{props.error.message}</span>}
        </label>
    );
}