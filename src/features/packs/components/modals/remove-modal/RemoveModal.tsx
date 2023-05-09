import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { SuperButton } from 'common'

type RemoveModalPropsType = {
    packName?: string
    packHandler: () => void
    handleClose: () => void
}
export const RemoveModal: React.FC<RemoveModalPropsType> =
    ({ packName, packHandler, handleClose }) => {
        return (
            <>
                <Typography variant='h6' component='h2' sx={{ p: 2 }}>
                    Do you really want to remove {packName}? All cards will be deleted
                </Typography>
                <Box display={'flex'} justifyContent='space-between'>
                    <SuperButton name={'Cancel'}
                                 color={'secondary'}
                                 rounded={true}
                                 width={'130'}
                                 type={'button'}
                                 callback={handleClose} />
                    <SuperButton name={'Save'} rounded={true} width={'130'} callback={packHandler} />
                </Box>
            </>
        )
    }