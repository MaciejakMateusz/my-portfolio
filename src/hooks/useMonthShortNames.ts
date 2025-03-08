import {useTranslation} from "react-i18next";

export const useMonthShortNames = () => {
    const {t} = useTranslation();
    return [
        t('januaryShort'), t('februaryShort'), t('marchShort'), t('aprilShort'),
        t('mayShort'), t('juneShort'), t('julyShort'), t('augustShort'),
        t('septemberShort'), t('octoberShort'), t('novemberShort'), t('decemberShort')
    ];
}