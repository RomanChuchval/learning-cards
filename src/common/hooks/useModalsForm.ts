import {
    DefaultFieldsValues,
    FormInputValues,
    useAppForm,
    ValidateFieldsType,
} from 'features/auth/hooks/useAppForm'
/**
 * Кастомный хук для управления формой модального окна.
 * @param {function(data: FormInputValues): void} callback - Функция обратного вызова, которая будет вызвана
 * при отправке формы с данными формы в качестве аргумента.
 * @param {DefaultFieldsValues} [defaultInputValues] - Необязательное значение по умолчанию для полей формы.
 * Если значение по умолчанию не требуются, передайте пустой объект.
 * Иначе передавать объект с полями и значениями согласно типизации
 * @param {ValidateFieldsType[]} [validateFields] - Необязательный массив c названиями полей которые нужно провалидировать.
 * Имена полей должны совпадать с функциями валидаторами в хук useValidators.
 * Если валидация не требуется, параметр можно не передавать.
 * @returns {Object} - Объект, содержащий состояние формы и методы для его управления.
 * [callbacHandler] - колбэк который сработает при сабмите формы.
 * [error] -
 * Остальное возвращается из хука useAppForm.
 *
 * */
export const useModalsForm = (
    callback: (data: FormInputValues) => void,
    defaultInputValues: DefaultFieldsValues = {},
    validateFields?: ValidateFieldsType[]
) => {
    const { register, errors, reset, handleSubmit } = useAppForm(validateFields, defaultInputValues)

    const callbackHandler = (data: FormInputValues) => {
        callback(data)
        reset()
    }

    return {
        register,
        errors,
        handleSubmit,
        callbackHandler,
    }
}
