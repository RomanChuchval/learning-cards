import { SuperButton } from 'common'
import React from 'react'
import { EditorModal } from 'common/components/modals/EditorModal'
import { useAppModals } from 'common/hooks/useAppModals'
import { useEditorModals } from 'features/packs/hooks/useEditorModals'
import { useApp } from 'app/hooks/useApp'

export const CreatePack = () => {
    const { open, handleClose, handleOpen } = useAppModals()
    const { createPack } = useEditorModals(handleClose)
    const {isLoading} = useApp()

    return (
        <>
            <EditorModal title={'Add Pack'}
                         open={open}
                         onEditor={createPack} handleClose={handleClose}>
                <SuperButton name={'Add new pack'}
                             callback={handleOpen}
                             rounded={true}
                             textColor={'white'}
                             disable={isLoading} />
            </EditorModal>
        </>
    )
}