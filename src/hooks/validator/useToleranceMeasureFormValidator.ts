import { useTranslation } from "react-i18next";
import * as yup from "yup";

export const useToleranceMeasureFormValidator = () => {
    const { t } = useTranslation();

    const minMaxTest = (min: number, max: number) =>
        yup.number().test(
            "dimension-range",
            t('invalidDimensionValue', { from: min, to: max }),
            (value) => {
                if (!value) return true;
                return value >= min && value <= max;
            }
        );

    return yup.object().shape({
        productLength: yup.number().min(1, t('minDimension', {dimension: 1})).required(t('fieldRequired')),
        negTolerance: minMaxTest(-5000, 0).required(t('fieldRequired')),
        posTolerance: minMaxTest(0, 5000).required(t('fieldRequired')),
        measurements: yup.array()
            .of(
                yup.object().shape({
                    id: yup.number().required(),
                    value: yup.number().required(),
                    label: yup.string().required()
                })
            )
            .min(2, t('minMeasurements'))
            .required(t('fieldRequired'))
    });
};