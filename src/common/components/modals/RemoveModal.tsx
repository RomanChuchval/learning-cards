import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { SuperButton } from 'common'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: '#fff',
    borderRadius: '2px',
    boxShadow: 24
}

type PacksModalPropsType = {
    removedTitle: string
    entityName: string
    children: React.ReactNode
    title: string
    open: boolean
    handleClose: () => void
    onRemove: () => void
}

export const RemoveModal: React.FC<PacksModalPropsType> = (
    { entityName, removedTitle, children, title, open, handleClose, onRemove }) => {
    return (
        <div>
            {children}
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Box display={'flex'}
                         justifyContent='space-between'
                         sx={{ borderBottom: '1px solid #D9D9D9' }}>
                        <Typography variant='h6' component='h2' sx={{ p: 2 }}>
                            {title}
                        </Typography>
                        <IconButton onClick={handleClose} sx={{ p: 2 }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography variant='h6' component='h2' sx={{ p: 2 }}>
                        Do you really want to remove {entityName}? {removedTitle} will be deleted
                    </Typography>
                    <Box display={'flex'} justifyContent='space-between'>
                        <SuperButton name={'Cancel'}
                                     color={'secondary'}
                                     rounded={true}
                                     width={'130'}
                                     type={'button'}
                                     callback={handleClose} />
                        <SuperButton name={'Save'}
                                     rounded={true}
                                     width={'130'}
                                     callback={onRemove} />
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}