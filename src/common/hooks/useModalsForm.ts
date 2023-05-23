import { FormInputValues, useAppForm, ValidateFieldsType } from 'common/hooks/useAppForm'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { modalStateSelector } from 'features/modals/modals.selector'

export const useModalsForm = (
    onSubmit: (data: FormInputValues) => void,
    validateFields?: ValidateFieldsType[]
) => {
    const modalState = useAppSelector(modalStateSelector)
    const { register, errors, reset, handleSubmit, control } = useAppForm(validateFields)

    const onSubmitHandler = (data: FormInputValues) => {
        onSubmit(data)
        reset()
    }

    return {
        modalState,
        register,
        errors,
        handleSubmit,
        onSubmitHandler,
        control,
    }
}
