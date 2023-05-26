import { FormInputValues } from 'common/hooks/useAppForm'
import { CreatePackModelType, UpdatePackModelType } from 'features/packs/packs.api'
import { packsThunks } from 'features/packs/packs.slice'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { modalsAction } from 'features/modals/modals.slice'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { packIdSelector } from 'features/modals/modals.selector'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useEditorPack = (defaultImg: string = '') => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
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
    const removePack = (withRedirect: boolean = false) => {
        if (packId)
            dispatch(packsThunks.removePack({ packId, withRedirect })).then(() =>
                withRedirect ? navigate('/packs') : ''
            )
        dispatch(modalsAction.closeModal())
    }
    const updatePack = (data: FormInputValues) => {
        const payload: UpdatePackModelType = {
            _id: packId || '',
            name: data.textInput,
            private: data.private,
            deckCover: img,
        }
        dispatch(packsThunks.updatePack(payload))
        dispatch(modalsAction.closeModal())
        setImg('')
    }
    return { createPack, removePack, updatePack, setImg, img }
}
