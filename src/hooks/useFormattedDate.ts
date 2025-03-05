import {useCallback} from "react";
import {useTranslation} from "react-i18next";

export function useFormattedDate() {
    const {t} = useTranslation();
    const formatDate = useCallback((dateString: string): string => {
        const months: string[] = [
            t('january'), t('february'), t('march'), t('april'),
            t('may'), t('june'), t('july'), t('august'),
            t('september'), t('october'), t('november'), t('december')
        ];

        const [year, month, day] = dateString.split('-').map(Number);

        if (!year || !month || !day || month < 1 || month > 12 || day < 1 || day > 31) {
            throw new Error("Invalid format. Expected format: YYYY-MM-DD.");
        }

        return `${day} ${months[month - 1]} ${year}`;
    }, []);

    return {formatDate};
}