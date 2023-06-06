import React, { useCallback } from 'react'
import Grid from '@mui/material/Grid'
import { PacksHeader } from 'features/packs/components/packs/PacksHeader'
import { PackMain } from 'features/packs/components/packs/PackMain'
import { PacksModalForm } from 'features/packs/components/modals/PacksModalForm'
import { AppModal } from 'features/modals/components/AppModal'
import { SuperButton, useAppModals } from 'common'
import { useEditorPack } from 'features/packs/hooks/useEditorPack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export const Packs = () => {
    const { showCreateModal, showUpdateModal, packImg, packName, showRemoveModal, handleClose } = useAppModals()
    const { createPack, updatePack, removePack, img, setImg } = useEditorPack(packImg)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        background: '#fff',
        borderRadius: '2px',
        boxShadow: 24,
    }

    const onRemovePack = useCallback(() => {
        removePack(false)
    }, [removePack])
    return (
        <>
            <Grid container spacing={2} sx={{ mt: '1px' }} rowSpacing={5} alignItems={'flex-end'}>
                <PacksHeader />
                <PackMain />
            </Grid>

            <AppModal title={'Create Pack'} open={showCreateModal || showUpdateModal || showRemoveModal} handleClose={handleClose}>
                {showCreateModal
                    ? <PacksModalForm
                        onSubmit={createPack}
                        handleClose={handleClose}
                        img={img}
                        setImg={setImg}
                    />
                    : showUpdateModal
                        ? <PacksModalForm
                            onSubmit={updatePack}
                            handleClose={handleClose}
                            img={img}
                            setImg={setImg}
                            defaultImg={packImg}
                        />
                        : <Box sx={style}>
                            <Box
                                display={'flex'}
                                justifyContent='space-between'
                                sx={{ borderBottom: '1px solid #D9D9D9' }}
                            >
                                <Typography variant='h6' component='h2' sx={{ p: 2 }}>
                                    {'Delete Card'}
                                </Typography>
                                <IconButton onClick={handleClose} sx={{ p: 2 }}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{ p: '30px 20px', fontSize: '14px', fontWeight: '400' }}
                            >
                                Do you really want to remove{' '}
                                <b style={{ color: 'red' }}>{packName}</b>?
                                <br />
                                {'All cards'} will be deleted
                            </Typography>
                            <Box
                                display={'flex'}
                                justifyContent='space-between'
                                sx={{ p: '0 24px 36px' }}
                            >
                                <SuperButton
                                    name={'Cancel'}
                                    color={'secondary'}
                                    rounded={true}
                                    width={'130'}
                                    type={'button'}
                                    callback={handleClose}
                                />
                                <SuperButton
                                    name={'Remove'}
                                    textColor={'white'}
                                    color={'error'}
                                    rounded={true}
                                    width={'130'}
                                    callback={onRemovePack}
                                />
                            </Box>
                        </Box>
                }

            </AppModal>
        </>
    )
}

