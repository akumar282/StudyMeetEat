/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MeetsModelCreateFormInputValues = {
    creator_id?: string;
    meet_creator?: string;
    meet_name?: string;
    location?: string;
    start_time?: string;
    end_time?: string;
    classes?: string[];
    attendants?: string[];
    image_key?: string;
    description?: string;
};
export declare type MeetsModelCreateFormValidationValues = {
    creator_id?: ValidationFunction<string>;
    meet_creator?: ValidationFunction<string>;
    meet_name?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    start_time?: ValidationFunction<string>;
    end_time?: ValidationFunction<string>;
    classes?: ValidationFunction<string>;
    attendants?: ValidationFunction<string>;
    image_key?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MeetsModelCreateFormOverridesProps = {
    MeetsModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    creator_id?: PrimitiveOverrideProps<TextFieldProps>;
    meet_creator?: PrimitiveOverrideProps<TextFieldProps>;
    meet_name?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    start_time?: PrimitiveOverrideProps<TextFieldProps>;
    end_time?: PrimitiveOverrideProps<TextFieldProps>;
    classes?: PrimitiveOverrideProps<SelectFieldProps>;
    attendants?: PrimitiveOverrideProps<TextFieldProps>;
    image_key?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MeetsModelCreateFormProps = React.PropsWithChildren<{
    overrides?: MeetsModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MeetsModelCreateFormInputValues) => MeetsModelCreateFormInputValues;
    onSuccess?: (fields: MeetsModelCreateFormInputValues) => void;
    onError?: (fields: MeetsModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MeetsModelCreateFormInputValues) => MeetsModelCreateFormInputValues;
    onValidate?: MeetsModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function MeetsModelCreateForm(props: MeetsModelCreateFormProps): React.ReactElement;
