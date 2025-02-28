import {useTranslation} from "react-i18next";
import * as yup from "yup";

export const useContactFormValidator = () => {
    const {t} = useTranslation();
    const lengthRangeTest = (min: number, max: number) =>
        yup.string().test(
            "len-range",
            t('invalidFieldLength', {from: min, to: max}),
            (value) => {
                if (!value) return true;
                return value.length >= min && value.length <= max;
            }
        );

    return yup.object().shape({
        from: lengthRangeTest(2, 50).required(t('fieldRequired')),
        subject: lengthRangeTest(2, 200).required(t('fieldRequired')),
        text: lengthRangeTest(10, 1000).required(t('fieldRequired'))
    });
}