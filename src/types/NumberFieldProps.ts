import {FieldError, UseFormRegister} from "react-hook-form";
import React from "react";

export type NumberFieldProps = {
    label: string | React.ReactNode;
    name: string;
    register: UseFormRegister<any>;
    error: FieldError | undefined;
    value: number;
    action: any;
}