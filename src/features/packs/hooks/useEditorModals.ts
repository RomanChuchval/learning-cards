import { FormInputValues } from 'features/auth/hooks/useAppForm'
import { CreatePackModelType, UpdatePackModelType } from 'features/packs/packs.api'
import { packsThunks } from 'features/packs/packs.slice'
import { useAppDispatch } from 'app/hooks/useAppDispatch'

export const useEditorModals = (handleClose: () => void, packId?:string) => {
    const dispatch = useAppDispatch()

    const createPack = (data: FormInputValues) => {
        const payload: CreatePackModelType = {
            name: data.textInput,
            private: data.private
        }
        dispatch(packsThunks.createPack(payload))
        handleClose()
    }
    const removePack = () => {
        if (packId)
        dispatch(packsThunks.removePack(packId))
        handleClose()
    }
    const updatePack = (data: FormInputValues) => {
        const payload: UpdatePackModelType = {
            _id: packId || '',
            name: data.textInput,
            private: data.private
        }
        dispatch(packsThunks.updatePack(payload))
        handleClose()
    }
    return {createPack, removePack, updatePack}
}