import {FieldError, UseFormRegister} from "react-hook-form";
import React from "react";

export type TextFieldProps = {
    label: string | React.ReactNode;
    name: string;
    readonly?: boolean;
    register: UseFormRegister<any>;
    error: FieldError | undefined;
    value: string;
    placeholder?: string;
    className?: string;
    action: any;
}