import React from 'react'
import Grid from '@mui/material/Grid'
import { PageTitle } from 'common/components/page-title/PageTitle'
import { SuperButton } from 'common'
import { PacksModal } from 'features/packs/components/modals/PacksModal'
import { FormModals } from 'features/packs/components/modals/form-modal/FormModals'
import { useModalsPacks } from 'features/packs/hooks/useModalsPacks'
import { useModalForm } from 'features/packs/hooks/useModalForm'

export const PacksHeader = () => {
    const { open, handleOpen, handleClose } = useModalsPacks()
    const { register, error, createPack, handleSubmit } = useModalForm(handleClose)

    return (
        <>
            <Grid item md={8}>
                <PageTitle title={'Packs list'} />
            </Grid>
            <Grid item md={4} display={'flex'} justifyContent={'flex-end'}>
                <SuperButton
                    name={'Add new pack'}
                    callback={handleOpen}
                    rounded={true}
                    textColor={'white'}
                />
                <PacksModal title={'Add pack'}
                            open={open}
                            handleClose={handleClose}>
                    <FormModals handleClose={handleClose}
                                error={error}
                                register={register}
                                packHandler={createPack}
                                handleSubmit={handleSubmit}/>
                </PacksModal>
            </Grid>
        </>
    )
}