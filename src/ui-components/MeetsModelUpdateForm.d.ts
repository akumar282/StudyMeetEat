/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MeetsModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MeetsModelUpdateFormInputValues = {
    creator_id?: string;
    meet_creator?: string;
    meet_name?: string;
    location?: string;
    start_time?: string;
    end_time?: string;
    classes?: string;
    attendants?: string[];
};
export declare type MeetsModelUpdateFormValidationValues = {
    creator_id?: ValidationFunction<string>;
    meet_creator?: ValidationFunction<string>;
    meet_name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    start_time?: ValidationFunction<string>;
    end_time?: ValidationFunction<string>;
    classes?: ValidationFunction<string>;
    attendants?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MeetsModelUpdateFormOverridesProps = {
    MeetsModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    creator_id?: PrimitiveOverrideProps<TextFieldProps>;
    meet_creator?: PrimitiveOverrideProps<TextFieldProps>;
    meet_name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    start_time?: PrimitiveOverrideProps<TextFieldProps>;
    end_time?: PrimitiveOverrideProps<TextFieldProps>;
    classes?: PrimitiveOverrideProps<SelectFieldProps>;
    attendants?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MeetsModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: MeetsModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    meetsModel?: MeetsModel;
    onSubmit?: (fields: MeetsModelUpdateFormInputValues) => MeetsModelUpdateFormInputValues;
    onSuccess?: (fields: MeetsModelUpdateFormInputValues) => void;
    onError?: (fields: MeetsModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MeetsModelUpdateFormInputValues) => MeetsModelUpdateFormInputValues;
    onValidate?: MeetsModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MeetsModelUpdateForm(props: MeetsModelUpdateFormProps): React.ReactElement;
