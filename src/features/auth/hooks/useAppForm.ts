import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useValidators, ValidatorsType } from 'features/auth/hooks/useValidators'

/** Кастомный хук для управления и валидации форм в приложении
 * @param {ValidateFieldsType[]} [validateFields] - Необязательный массив c названиями полей которые нужно провалидировать.
 * Имена полей должны совпадать с функциями валидаторами в хук useValidators.
 * Если валидация не требуется, параметр можно не передавать.
 * @param {DefaultFieldsValues} [defaultInputValues] - Необязательное значение по умолчанию для полей формы.
 * Если значение по умолчанию не требуются, передайте пустой объект.
 * Иначе передавать объект с полями и значениями согласно типизации
 */
export const useAppForm = (
    validateFields: ValidateFieldsType[] = [],
    defaultInputValues: DefaultFieldsValues = {}
) => {
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
        formState: { errors },
    } = useForm<FormInputValues>({
        resolver: yupResolver(validateSchema),
        mode: 'onTouched',
        defaultValues: defaultInputValues,
    })

    return {
        handleSubmit,
        register,
        errors,
        reset,
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
    question: string
    answer: string
}

export type DefaultFieldsValues = Partial<FormInputValues>
