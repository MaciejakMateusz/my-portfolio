import {useTranslation} from "react-i18next";

type useErrorMessageProps = {
    error: string | undefined;
}

export const useErrorMessage = ({error}: useErrorMessageProps) => {
    const {t} = useTranslation();

    const getErrorMsg = () => {
        console.log(error)
        if (!error) return '';
        if (error === 'restApiDown') {
            return t('restApiDown');
        } else if (error.startsWith('4')) {
            return t('badRequest');
        } else if (error.startsWith('5')) {
            return t('internalServerError');
        }
        return t('errorOccurred');
    }

    return getErrorMsg()
}