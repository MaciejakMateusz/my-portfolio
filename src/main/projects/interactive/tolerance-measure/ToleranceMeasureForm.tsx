import {NumberField} from "../../../shared/form/NumberField.tsx";
import {
    fetchAnalysis, resetForm,
    setMeasurements,
    setNegTolerance,
    setPosTolerance,
    setProductLength
} from "../../../../slices/toleranceMeasureSlice.ts";
import {Controller, useForm} from "react-hook-form";
import {ChipsField} from "./ChipsField.tsx";
import {generateRandomMeasurements} from "../../../../util/util.ts";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "../../../../hooks/hooks.ts";
import {ToleranceMeasureFields} from "../../../../interfaces/ToleranceMeasureFields.ts";
import {useSelector} from "react-redux";
import {useToleranceMeasureFormValidator} from "../../../../hooks/validator/useToleranceMeasureFormValidator.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import {PreparedMeasurements} from "../../../../interfaces/PreparedMeasurements.ts";
import {CustomLabel} from "../../../shared/form/CustomLabel.tsx";
import {Analysis} from "./Analysis.tsx";

export const ToleranceMeasureForm = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const {
        productLength,
        posTolerance,
        negTolerance,
        measurements
    }: ToleranceMeasureFields = useSelector<any, any>(state => state.toleranceMeasure.form);
    const {isLoading} = useSelector<any, any>(state => state.toleranceMeasure.analysis);
    const schema = useToleranceMeasureFormValidator();
    const {
        reset,
        setValue,
        control,
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<ToleranceMeasureFields>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async () => {
        if (isLoading || isSubmitting) return;

        const params: PreparedMeasurements = {
            productLength: productLength,
            posTolerance: posTolerance,
            negTolerance: negTolerance,
            measurements: measurements?.map((measurement) => measurement?.value)
        };

        const action = await dispatch(fetchAnalysis(params))
        if (fetchAnalysis.fulfilled.match(action)) {
            dispatch(resetForm());
            reset({
                productLength: 0,
                posTolerance: 0,
                negTolerance: 0,
                measurements: [],
            });
        }
    }

    return (
        <div className={'project-container'}>
            <div className={'form-container'}>
                {isLoading && <div className={'loader'}/>}
                <form className={'contact-form'} onSubmit={handleSubmit(onSubmit)}>
                    <div className={'product-fields-wrapper'}>
                        <NumberField label={<CustomLabel text={t('productLength')}/>}
                                     name={'productLength'}
                                     register={register}
                                     error={errors.productLength}
                                     value={productLength}
                                     action={setProductLength}/>
                        <NumberField label={<CustomLabel text={t('posTolerance')}/>}
                                     name={'posTolerance'}
                                     register={register}
                                     error={errors.posTolerance}
                                     value={posTolerance}
                                     action={setPosTolerance}/>
                        <NumberField label={<CustomLabel text={t('negTolerance')}/>}
                                     name={'negTolerance'}
                                     register={register}
                                     error={errors.negTolerance}
                                     value={negTolerance}
                                     action={setNegTolerance}/>
                    </div>
                    <Controller
                        control={control}
                        name="measurements"
                        defaultValue={[]}
                        render={({field: {onChange, value, ref}, fieldState: {error}}) => (
                            <ChipsField chips={value}
                                        setChips={setMeasurements}
                                        ref={ref}
                                        error={error}
                                        onChange={onChange}
                                        name={'measurements'}/>
                        )}
                    />
                    <div className={'form-button-wrapper'}>
                        <button type={'button'}
                                className={`secondary-button white ${isLoading && 'deactivated'}`}
                                disabled={isLoading || isSubmitting}
                                onClick={() => generateRandomMeasurements(dispatch, setValue)}>
                            {t('generateRandomData')}
                        </button>
                        <button type={'submit'}
                                className={`primary-button big ${isLoading && 'deactivated'}`}
                                disabled={isLoading || isSubmitting}>
                            {t('analyse')}
                        </button>
                    </div>
                    <Analysis/>
                </form>
            </div>
        </div>
    );
}