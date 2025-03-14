import {TextField} from "../../../shared/form/TextField.tsx";
import {
    fetchTranslation,
    setContext,
    setDetectedSource,
    setSourceLang,
    setTargetLang,
    setText,
    setTranslation
} from "../../../../slices/translatorAiSlice.ts";
import Select from "react-select";
import {secondarySelect} from "../../../../styles/selectStyles.ts";
import {TextAreaField} from "../../../shared/form/TextAreaField.tsx";
import {useTranslationAiFormValidator} from "../../../../hooks/validator/useTranslationAiFormValidator.ts";
import {useForm} from "react-hook-form";
import {TranslationFormFields} from "../../../../interfaces/TranslationFormFields.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import {useLanguageNames} from "../../../../hooks/useLanguageNames.ts";
import {useAppDispatch} from "../../../../hooks/hooks.ts";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useTranslation} from "react-i18next";
import {CustomLabel} from "../../../shared/form/CustomLabel.tsx";
import {useErrorMessage} from "../../../../hooks/useErrorMessage.ts";

export const TranslatorAIForm = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const {isLoading, error} = useSelector<any, any>(state => state.translation.translation);
    const errorMsg = useErrorMessage({error});
    const {
        text,
        source_lang,
        target_lang,
        context,
        translation,
        detectedSource
    } = useSelector<any, any>(state => state.translation.form);
    const languageNames = useLanguageNames();
    const sourceOptions = languageNames;
    const targetOptions = languageNames.filter(option => option.value !== undefined);
    const filteredTargetOptions = source_lang && source_lang.value
        ? targetOptions.filter(option => option.value !== source_lang.value)
        : targetOptions;
    const schema = useTranslationAiFormValidator();
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<TranslationFormFields>({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        dispatch(setSourceLang({value: undefined, label: t("autoDetect")}));
        dispatch(setTargetLang({value: 'EN', label: t('EN')}));
    }, []);

    useEffect(() => {
        if (source_lang && target_lang && source_lang.value === target_lang.value) {
            const currentIndex = filteredTargetOptions.findIndex(
                option => option.value === target_lang.value
            );
            let newIndex = currentIndex + 1;
            if (newIndex >= filteredTargetOptions.length) newIndex = 0;
            dispatch(setTargetLang(filteredTargetOptions[newIndex]));
        }
    }, [source_lang, target_lang, filteredTargetOptions, dispatch]);

    useEffect(() => {
        if (detectedSource && target_lang && detectedSource === target_lang.value) {
            const currentIndex = filteredTargetOptions.findIndex(
                option => option.value === target_lang.value
            );
            let newIndex = currentIndex + 1;
            if (newIndex >= filteredTargetOptions.length) newIndex = 0;
            dispatch(setTargetLang(filteredTargetOptions[newIndex]));
        }
    }, [detectedSource, target_lang, filteredTargetOptions, dispatch]);

    const onSubmit = async () => {
        if (isLoading || isSubmitting) return;

        const params: TranslationFormFields = {
            text: text,
            source_lang: source_lang.value,
            target_lang: target_lang.value,
            context: context
        };
        const action = await dispatch(fetchTranslation(params));
        if (fetchTranslation.fulfilled.match(action)) {
            const data = action.payload.translations[0];
            dispatch(setDetectedSource(data.detected_source_language));
            dispatch(setTranslation(data.text));
        }
    };

    return (
        <div className={'project-container'}>
            <div className={'form-container'}>
                {isLoading && <div className={'loader'}/>}
                <form className={'contact-form'} onSubmit={handleSubmit(onSubmit)}>
                    <TextField label={<CustomLabel text={`${t('context')} `} subText={t('contextSub')}/>}
                               name={'context'}
                               register={register}
                               error={errors.context}
                               value={context}
                               placeholder={t('contextPlaceholder')}
                               action={setContext}/>
                    <div className={'translation-fields-wrapper'}>
                        <div className={'translation-fields'}>
                            <Select id="source-lang"
                                    name="source-lang"
                                    value={source_lang}
                                    options={sourceOptions}
                                    onChange={(selected) => dispatch(setSourceLang(selected))}
                                    styles={secondarySelect}
                                    maxMenuHeight={240}
                                    isSearchable={true}/>
                            <TextAreaField label={''}
                                           name={'text'}
                                           register={register}
                                           error={errors.text}
                                           value={text}
                                           className={'translation-text-area'}
                                           action={setText}/>
                        </div>
                        <div className={'translation-fields'}>
                            <Select id="target-lang"
                                    name="target-lang"
                                    value={target_lang}
                                    options={filteredTargetOptions}
                                    onChange={(selected) => dispatch(setTargetLang(selected))}
                                    styles={secondarySelect}
                                    maxMenuHeight={240}
                                    isSearchable={true}
                            />
                            <TextAreaField label={''}
                                           name={'translation'}
                                           register={register}
                                           readonly={true}
                                           placeholder={t('translation')}
                                           error={undefined}
                                           value={translation}
                                           className={'translation-text-area'}
                                           action={setTranslation}/>
                        </div>
                    </div>
                    <div className={'form-button-wrapper'}>
                        {error && <span className={'form-msg error-msg'}>{errorMsg}</span>}
                        <button type={'submit'}
                                className={`primary-button ${isLoading && 'deactivated'}`}
                                disabled={isLoading || isSubmitting}>
                            {t('translate')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}