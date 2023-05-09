import * as React from 'react'
import { FormInputValues, useAppForm } from 'features/auth/hooks/useAppForm'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { CreatePackModelType, UpdatePackModelType } from 'features/packs/packs.api'
import { packsThunks } from 'features/packs/packs.slice'

export const useModalsPacks = (packId: string = '') => {
    const { register, errors, reset, handleSubmit } = useAppForm(['textInput'])
    const dispatch = useAppDispatch()
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const error = errors.textInput?.message

    const createPack = (data: FormInputValues) => {
        const payload: CreatePackModelType = {
            name: data.textInput,
            private: data.private,
        }
        dispatch(packsThunks.createPack(payload))
        handleClose()
        reset()
    }
    const updatePack = (data: FormInputValues) => {
        const payload: UpdatePackModelType = {
            _id: packId,
            name: data.textInput,
            private: data.private,
        }
        dispatch(packsThunks.updatePack(payload))
        handleClose()
        reset()
    }
    const removePack = (data: FormInputValues) => {
        dispatch(packsThunks.removePack(packId))
        handleClose()
    }

    return {
        register,
        error,
        handleSubmit,
        open,
        handleOpen,
        handleClose,
        createPack,
        updatePack,
        removePack
    }
}