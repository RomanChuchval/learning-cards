import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useValidators, ValidatorsType } from 'features/auth/hooks/useValidators'

export const useAppForm = (validateFields: ValidateFieldsType[], defaultInput?: string) => {
    const { validators } = useValidators()

    const getValidateSchema = (
        validators: ValidatorsType,
        validateFields: ValidateFieldsType[]
    ) => {
        if (!validateFields.length) return {}
        const result: ValidatorsType = {}
        for (let i = 0; i < validateFields.length; i++) {
            result[validateFields[i]] = validators[validateFields[i]]
        }
        return result
    }
    const validateSchema = yup.object(getValidateSchema(validators, validateFields))

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm<FormInputValues>({
        resolver: yupResolver(validateSchema),
        mode: 'onTouched',
        defaultValues: {
            textInput: defaultInput || ''
        }
    })

    return {
        handleSubmit,
        register,
        errors,
        reset
    }
}

// TYPES
export type ValidateFieldsType =
    | 'email'
    | 'loginEmail'
    | 'password'
    | 'loginPassword'
    | 'confirmPassword'
    | 'textInput'

export type FormInputValues = {
    email: string
    loginEmail: string
    password: string
    loginPassword: string
    confirmPassword: string
    rememberMe: boolean
    textInput: string
    private: boolean
    radio: string
}
