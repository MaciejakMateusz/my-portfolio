import {resetForm, sendEmail, setData, setFrom, setSubject, setText} from "../../slices/contactSlice.ts";
import {useForm} from "react-hook-form";
import {ContactFormFields} from "../../interfaces/ContactFormFields.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import {useSelector} from "react-redux";
import {useContactFormValidator} from "../../hooks/validator/useContactFormValidator.ts";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {useTranslation} from "react-i18next";
import {TextField} from "../shared/form/TextField.tsx";
import {TextAreaField} from "../shared/form/TextAreaField.tsx";

export const ContactForm = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const {from, subject, text} = useSelector<any, any>(state => state.contact.form);
    const {data, isLoading, error} = useSelector<any, any>(state => state.contact.contact);
    const schema = useContactFormValidator();
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<ContactFormFields>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async () => {
        if (isLoading || isSubmitting) return;

        const params: ContactFormFields = {
            from: from,
            subject: subject,
            text: text
        };
        const sendAction = await dispatch(sendEmail(params))
        if (sendEmail.fulfilled.match(sendAction)) {
            dispatch(resetForm());
            dispatch(setData('fulfilled'));
            setTimeout(() => {
                dispatch(setData(undefined));
            }, 3000)
        }
    }

    return (
        <div className={'form-container'}>
            {isLoading && <div className={'loader'}/>}
            <form className={'contact-form'} onSubmit={handleSubmit(onSubmit)}>
                <TextField label={t('nameSurname')}
                           name={'from'}
                           register={register}
                           error={errors.from}
                           value={from}
                           action={setFrom}/>
                <TextField label={t('subject')}
                           name={'subject'}
                           register={register}
                           error={errors.subject}
                           value={subject}
                           action={setSubject}/>
                <TextAreaField label={t('message')}
                               name={'text'}
                               register={register}
                               error={errors.text}
                               value={text}
                               action={setText}/>
                <div className={'form-button-wrapper'}>
                    {error && <span className={'form-msg error-msg'}>
                        {t('restApiDown')}
                    </span>}
                    {data && <span className={'form-msg confirmation-msg'}>
                        {t('messageSent')}
                    </span>}
                    <button className={`primary-button ${isLoading && 'deactivated'}`}
                            disabled={isLoading || isSubmitting}>
                        {t('send')}
                    </button>
                </div>
            </form>
        </div>
    );
}