import { FormInputValues, useAppForm } from 'features/auth/hooks/useAppForm'
import { useAppDispatch } from 'app/hooks/hooks'
import { CreatePackModelType, UpdatePackModelType } from 'features/packs/packs.api'
import { packsThunks } from 'features/packs/packs.slice'
import { useState } from 'react'

export const useModalForm = (handleClose: () => void) => {
    const { register, errors, reset, handleSubmit } = useAppForm(['textInput'])
    const [packId, setPackId] = useState('')
    const dispatch = useAppDispatch()

    const error = errors.textInput?.message

    const createPack = (data: FormInputValues) => {
        const payload: CreatePackModelType = {
            name: data.textInput,
            private: data.private
        }
        dispatch(packsThunks.createPack(payload))
        handleClose()
        reset()
    }
    const updatePack = (data: FormInputValues) => {
        const payload: UpdatePackModelType = {
            _id: packId,
            name: data.textInput,
            private: data.private
        }
        dispatch(packsThunks.updatePack(payload))
        handleClose()
        reset()
    }

    return {
        register,
        error,
        handleSubmit,
        createPack,
        updatePack,
        setPackId,
    }
}
