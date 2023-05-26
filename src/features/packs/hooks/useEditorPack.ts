import { CreatePackModelType, UpdatePackModelType } from 'features/packs/packs.api'
import { packsThunks } from 'features/packs/packs.slice'
import { modalsAction } from 'features/modals/modals.slice'
import { packIdSelector } from 'features/modals/modals.selector'
import { FormInputValues } from 'common'
import { useAppDispatch, useAppSelector } from 'app'
import { useState } from 'react'

export const useEditorPack = (defaultImg: string = '') => {
    const dispatch = useAppDispatch()
    const packId = useAppSelector(packIdSelector)
    const [img, setImg] = useState(defaultImg)

    const createPack = (data: FormInputValues) => {
        const payload: CreatePackModelType = {
            name: data.textInput,
            deckCover: img,
            private: data.private,
        }
        dispatch(packsThunks.createPack(payload))
        dispatch(modalsAction.closeModal())
        setImg('')
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
            deckCover: img
        }
        console.log(data.packImg[0])
        dispatch(packsThunks.updatePack(payload))
        dispatch(modalsAction.closeModal())
        setImg('')
    }
    return { createPack, removePack, updatePack, setImg, img }
}
