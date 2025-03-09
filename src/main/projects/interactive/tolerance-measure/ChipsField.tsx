import {forwardRef, KeyboardEvent, useState} from 'react';
import CreatableSelect from 'react-select/creatable';
import {useAppDispatch} from "../../../../hooks/hooks.ts";
import {Chip} from "../../../../interfaces/Chip.ts";
import {useTranslation} from "react-i18next";
import {ChipsFieldProps} from "../../../../types/ChipsFieldProps.ts";
import {CustomLabel} from "../../../shared/form/CustomLabel.tsx";
import {chipsStyles} from "../../../../styles/selectStyles.ts";

export const ChipsField = forwardRef((props: ChipsFieldProps, ref: any) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event: KeyboardEvent) => {
        if (!inputValue) return;

        if (['Enter', 'Tab', ','].includes(event.key)) {
            event.preventDefault();
            const trimmedInput = inputValue.trim();
            if (trimmedInput) {
                const numValue = Number(trimmedInput);
                if (!isNaN(numValue)) {
                    const newChip: Chip = { id: Date.now(), value: numValue, label: trimmedInput };
                    const updatedChips = [...props.chips, newChip];
                    props.onChange(updatedChips);
                    dispatch(props.setChips(updatedChips));
                }
            }
            setInputValue('');
        }
    };

    return (
        <label className={'form-field-label'}>
            <CustomLabel text={t('measurements')}/>
            <CreatableSelect
                className={'chips-multiselect'}
                isMulti
                inputValue={inputValue}
                onInputChange={(value) => setInputValue(value)}
                ref={ref}
                name={props.name}
                onKeyDown={handleKeyDown}
                onChange={(selectedOptions) => {
                    const updatedChips = selectedOptions || [];
                    props.onChange(updatedChips);
                    dispatch(props.setChips(updatedChips));
                }}
                value={props.chips}
                menuIsOpen={false}
                getOptionValue={(option) => option.id.toString()}
                placeholder={t('exampleMeasurements')}
                styles={chipsStyles}
            />
            {props.error && <span className="validation-msg">{props.error.message}</span>}
        </label>

    );
});