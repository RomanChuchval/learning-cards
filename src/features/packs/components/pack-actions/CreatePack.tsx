import React from 'react'
import { SuperButton } from 'common'
import { useAppDispatch, useAppState } from 'app'
import { modalsAction } from 'features/modals/modals.slice'

export const CreatePack = () => {
    const dispatch = useAppDispatch()
    const { isLoadingApp } = useAppState()

    const openCreateModal = () => {
        dispatch(modalsAction.showCreateModal({}))
    }

    return (
        <SuperButton
            name={'Add new pack'}
            callback={openCreateModal}
            rounded={true}
            textColor={'white'}
            disable={isLoadingApp}
        />
    )
}
