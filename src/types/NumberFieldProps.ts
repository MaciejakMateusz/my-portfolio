import {FieldError, UseFormRegister} from "react-hook-form";

export type NumberFieldProps = {
    label: string;
    name: string;
    register: UseFormRegister<any>;
    error: FieldError | undefined;
    value: number;
    action: any;
}