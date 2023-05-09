import { useModalsPacks } from 'features/packs/components/modals/hooks/useModalsPacks'
import { PacksModal } from 'features/packs/components/modals/PacksModal'
import { SuperButton } from 'common'
import React from 'react'

export const CreatePack = () => {
    const { createPack, handleOpen, handleClose, handleSubmit, open, register, error } = useModalsPacks()
    return (
        <PacksModal title={'Add pack'}
                    packHandler={createPack}
                    handleSubmit={handleSubmit}
                    open={open}
                    error={error}
                    register={register}
                    handleClose={handleClose}>
            <SuperButton
                name={'Add new pack'}
                callback={handleOpen}
                rounded={true}
                textColor={'white'} />
        </PacksModal>
    )
}