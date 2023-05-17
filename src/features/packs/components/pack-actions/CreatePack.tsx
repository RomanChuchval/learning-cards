import { SuperButton } from 'common'
import React from 'react'
import { EditorModal } from 'common/components/modals/EditorModal'
import { useAppModals } from 'common/hooks/useAppModals'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'
import { useApp } from 'app/hooks/useApp'
import { EditorPacksModal } from 'features/packs/components/modals/EditorPacksModal'
import { useModalsForm } from 'common/hooks/useModalsForm'

export const CreatePack = () => {
    const { open, handleClose, handleOpen } = useAppModals()
    const { createPack } = useEditorPack(handleClose)
    const { isLoading } = useApp()
    const { errors, register, handleSubmit, callbackHandler } = useModalsForm(createPack, {}, [
        'textInput',
    ])
    return (
        <>
            <SuperButton
                name={'Add new pack'}
                callback={handleOpen}
                rounded={true}
                textColor={'white'}
                disable={isLoading}
            />
            <EditorModal
                title={'Add Pack'}
                handleSubmit={handleSubmit}
                callbackHandler={callbackHandler}
                open={open}
                handleClose={handleClose}
            >
                <EditorPacksModal errors={errors} register={register} />
            </EditorModal>
        </>
    )
}
