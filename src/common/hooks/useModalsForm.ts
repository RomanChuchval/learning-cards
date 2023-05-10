import { FormInputValues, useAppForm } from 'features/auth/hooks/useAppForm'

export const useModalsForm = (onEditor: (data: FormInputValues) => void, packName?: string) => {
    const { register, errors, reset, handleSubmit } = useAppForm(['textInput'], packName)
    const error = errors.textInput?.message

    const editorHandler = (data: FormInputValues) => {
        onEditor(data)
        reset()
    }

    return {
        register,
        error,
        handleSubmit,
        editorHandler
    }
}