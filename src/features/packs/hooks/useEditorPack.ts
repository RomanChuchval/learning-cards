import { FormInputValues } from 'common/hooks/useAppForm'
import { CreatePackModelType, UpdatePackModelType } from 'features/packs/packs.api'
import { packsThunks } from 'features/packs/packs.slice'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { modalsAction } from 'features/modals/modals.slice'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { packIdSelector } from 'features/modals/modals.selector'

export const useEditorPack = () => {
    const dispatch = useAppDispatch()
    const packId = useAppSelector(packIdSelector)

    const createPack = (data: FormInputValues) => {
        const payload: CreatePackModelType = {
            name: data.textInput,
            private: data.private,
        }
        dispatch(packsThunks.createPack(payload))
        dispatch(modalsAction.closeModal())
    }
    const removePack = () => {
        if (packId) dispatch(packsThunks.removePack(packId))
        dispatch(modalsAction.closeModal())
    }
    const updatePack = (data: FormInputValues) => {
        const payload: UpdatePackModelType = {
            _id: packId || '',
            name: data.textInput,
            private: data.private,
        }
        dispatch(packsThunks.updatePack(payload))
        dispatch(modalsAction.closeModal())
    }
    return { createPack, removePack, updatePack }
}
