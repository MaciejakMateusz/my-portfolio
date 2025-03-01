import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "../../../../hooks/hooks.ts";
import {useSelector} from "react-redux";
import {
    fetchAnalysis,
    resetForm,
    setMeasurements,
    setNegTolerance,
    setPosTolerance,
    setProductLength
} from "../../../../slices/toleranceMeasureSlice.ts";
import {NumberField} from "../../../shared/form/NumberField.tsx";
import {useToleranceMeasureFormValidator} from "../../../../hooks/validator/useToleranceMeasureFormValidator.ts";
import {ToleranceMeasureFields} from "../../../../interfaces/ToleranceMeasureFields.ts";
import {ChipsField} from "./ChipsField.tsx";
import {PreparedMeasurements} from "../../../../interfaces/PreparedMeasurements.ts";

export const ToleranceMeasure = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const {
        productLength,
        posTolerance,
        negTolerance,
        measurements
    }: ToleranceMeasureFields = useSelector<any, any>(state => state.toleranceMeasure.form);
    const {isLoading, error} = useSelector<any, any>(state => state.contact.contact);
    const schema = useToleranceMeasureFormValidator();
    const {
        reset,
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
            console.log(action.payload);
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
        <>
            <div className={'contact-form-container'}>
                {isLoading && <div className={'loader'}/>}
                <form className={'contact-form'} onSubmit={handleSubmit(onSubmit)}>
                    <NumberField label={t('productLength')}
                                 name={'productLength'}
                                 register={register}
                                 error={errors.productLength}
                                 value={productLength}
                                 action={setProductLength}/>
                    <NumberField label={t('posTolerance')}
                                 name={'posTolerance'}
                                 register={register}
                                 error={errors.posTolerance}
                                 value={posTolerance}
                                 action={setPosTolerance}/>
                    <NumberField label={t('negTolerance')}
                                 name={'negTolerance'}
                                 register={register}
                                 error={errors.negTolerance}
                                 value={negTolerance}
                                 action={setNegTolerance}/>
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
                        {error && <span className={'form-msg error-msg'}>
                        {t('restApiDown')}
                        </span>}
                        <button className={`primary-button ${isLoading && 'deactivated'}`}
                                disabled={isLoading || isSubmitting}>
                            {t('send')}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}