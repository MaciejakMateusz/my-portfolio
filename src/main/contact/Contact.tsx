import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {SectionHeader} from "../shared/SectionHeader.tsx";
import {useTranslation} from "react-i18next";
import {HorizontalCard} from "../shared/HorizontalCard.tsx";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {resetForm, sendEmail, setData, setFrom, setSubject, setText} from "../../slices/contactSlice.ts";
import {ContactState} from "../../interfaces/ContactState.ts";
import {SocialButton} from "../landing/SocialButton.tsx";
import {forwardRef} from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {useContactFormValidator} from "../../hooks/validator/useContactFormValidator.ts";
import {ContactFormFields} from "../../interfaces/ContactFormFields.ts";

export const Contact = forwardRef((_, ref: any) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const {ref: motionRef, inView} = useInView({triggerOnce: true, threshold: 0.2});
    const {from, subject, text} = useSelector<any, any>(state => state.contact.form);
    const {data, isLoading} = useSelector<any, any>(state => state.contact.contact);
    const schema = useContactFormValidator();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ContactFormFields>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async () => {
        if (isLoading || isSubmitting) return;

        const params: ContactState = {
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
        <div ref={ref}>
            <motion.div
                ref={motionRef}
                initial={{opacity: 0, y: 100}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.8, ease: "easeOut"}}>
                <div className={'about'}>
                    <SectionHeader title={t('contact')} description={t('contactDescription')}/>
                    <div className={'main-container'}>

                        <div className={'contact-wrapper'}>
                            <div className={'contact-details-container main-typography'}>
                                <div>
                                    <HorizontalCard header={t('callMe')}
                                                    description={'+48 880 204 181'}
                                                    icon={'/placeholder-icon.svg'}
                                                    href={'tel:+48 880 204 181'}/>
                                    <HorizontalCard header={t('emailMe')}
                                                    description={'maciejakmateusz@gmail.com'}
                                                    icon={'/placeholder-icon.svg'}
                                                    href={'mailTo:maciejakmateusz@gmail.com'}/>
                                    <HorizontalCard header={t('location')}
                                                    description={'Katowice (Polska)'}
                                                    icon={'/placeholder-icon.svg'}
                                                    type={'map'}
                                                    href={'https://www.google.com/maps/place/Katowice/@50.2280398,18.8970758,11z/data=!4m6!3m5!1s0x4716ce2336a1ccd1:0xb9af2a350559fabb!8m2!3d50.2648919!4d19.0237815!16zL20vMGJsZDg?authuser=0&entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D'}/>
                                    <div className={'contact-social-buttons-wrapper'}>
                                        <SocialButton url={'https://www.linkedin.com/in/mateusz-maciejak/'}
                                                      icon={'/linkedin-logo.svg'}/>
                                        <SocialButton url={'https://github.com/MaciejakMateusz'}
                                                      icon={'/github-logo.svg'}/>
                                        <SocialButton url={'https://github.com/MaciejakMateusz'}
                                                      icon={'/github-logo.svg'}/>
                                    </div>
                                </div>
                            </div>
                            <div className={'contact-form-container'}>
                                <form className={'contact-form'} onSubmit={handleSubmit(onSubmit)}>
                                    <label className={'form-field-label'}>
                                        {t('nameSurname')}
                                        <input type={'text'}
                                               {...register('from')}
                                               className={`form-text-field ${errors.from ? 'invalid' : ''}`}
                                               value={from}
                                               onChange={(e) => dispatch(setFrom(e.target.value))}/>
                                        {errors.from && <span className="validation-msg">{errors.from.message}</span>}
                                    </label>
                                    <label className={'form-field-label'}>
                                        {t('subject')}
                                        <input type={'text'}
                                               {...register('subject')}
                                               className={`form-text-field ${errors.subject ? 'invalid' : ''}`}
                                               value={subject}
                                               onChange={(e) => dispatch(setSubject(e.target.value))}/>
                                        {errors.subject && <span className="validation-msg">{errors.subject.message}</span>}
                                    </label>
                                    <label className={'form-field-label'}>
                                        {t('message')}
                                        <textarea value={text}
                                                  {...register('text')}
                                                  className={`form-text-area-field ${errors.text ? 'invalid' : ''}`}
                                                  onChange={(e) => dispatch(setText(e.target.value))}/>
                                        {errors.text && <span className="validation-msg">{errors.text.message}</span>}
                                    </label>
                                    {isLoading && <div className={'loader'}/>}
                                    <div className={'form-button-wrapper'}>
                                        <span className={`confirmation-msg ${data ? 'show' : 'hide'}`}>
                                            {t('messageSent')}
                                        </span>
                                        <button className={`primary-button ${isLoading && 'deactivated'}`} disabled={isLoading || isSubmitting}>
                                            {t('send')}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
});