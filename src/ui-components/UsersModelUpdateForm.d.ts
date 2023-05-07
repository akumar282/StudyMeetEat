/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UsersModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersModelUpdateFormInputValues = {
    cognito_id?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    username?: string;
    major?: string[];
    classes?: string[];
    created_meets?: string[];
    attending_meets?: string[];
};
export declare type UsersModelUpdateFormValidationValues = {
    cognito_id?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    major?: ValidationFunction<string>;
    classes?: ValidationFunction<string>;
    created_meets?: ValidationFunction<string>;
    attending_meets?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersModelUpdateFormOverridesProps = {
    UsersModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cognito_id?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    major?: PrimitiveOverrideProps<SelectFieldProps>;
    classes?: PrimitiveOverrideProps<SelectFieldProps>;
    created_meets?: PrimitiveOverrideProps<TextFieldProps>;
    attending_meets?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsersModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usersModel?: UsersModel;
    onSubmit?: (fields: UsersModelUpdateFormInputValues) => UsersModelUpdateFormInputValues;
    onSuccess?: (fields: UsersModelUpdateFormInputValues) => void;
    onError?: (fields: UsersModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersModelUpdateFormInputValues) => UsersModelUpdateFormInputValues;
    onValidate?: UsersModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsersModelUpdateForm(props: UsersModelUpdateFormProps): React.ReactElement;
