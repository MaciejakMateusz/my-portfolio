import {FieldError, UseFormRegister} from "react-hook-form";

export type TextFieldProps = {
    label: string;
    name: string;
    readonly?: boolean;
    register: UseFormRegister<any>;
    error: FieldError | undefined;
    value: string;
    action: any;
}