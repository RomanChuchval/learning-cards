import { FormInputValues, useAppForm, ValidateFieldsType } from 'features/auth/hooks/useAppForm'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { modalStateSelector } from 'features/modals/modals.selector'

export const useModalsForm = (
    callback: (data: FormInputValues) => void,
    validateFields?: ValidateFieldsType[]
) => {
    const modalState = useAppSelector(modalStateSelector)
    const { register, errors, reset, handleSubmit } = useAppForm(validateFields)

    const onSubmitHandler = (data: FormInputValues) => {
        callback(data)
        reset()
    }

    return {
        modalState,
        register,
        errors,
        handleSubmit,
        onSubmitHandler,
    }
}
