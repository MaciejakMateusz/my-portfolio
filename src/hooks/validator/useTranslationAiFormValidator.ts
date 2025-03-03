import {useTranslation} from "react-i18next";
import * as yup from "yup";

export const useTranslationAiFormValidator = () => {
    const { t } = useTranslation();

    return yup.object().shape({
        text: yup.string().required(t('fieldRequired'))
    });
};