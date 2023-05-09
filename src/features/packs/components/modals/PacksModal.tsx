import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { FormModals } from 'features/packs/components/modals/form-modal/FormModals'
import { FormInputValues } from 'features/auth/hooks/useAppForm'
import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { UseFormHandleSubmit } from 'react-hook-form'
import { RemoveModal } from 'features/packs/components/modals/remove-modal/RemoveModal'

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
    children: React.ReactNode
    title: string
    error: string | undefined
    packName?: string
    removeMod?: boolean
    open: boolean
    handleClose: () => void
    handleSubmit: UseFormHandleSubmit<FormInputValues>
    packHandler: (data: FormInputValues) => void
    register: UseFormRegister<FormInputValues>
}

export const PacksModal: React.FC<PacksModalPropsType> = (
    { children, title, packHandler, open, removeMod, error, handleSubmit, register, handleClose, packName }) => {
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
                    {
                        removeMod
                        ? <RemoveModal packName={packName}
                                       packHandler={()=>{} }
                                       handleClose={handleClose}/>
                        : <FormModals handleClose={handleClose}
                                      packHandler={packHandler}
                                      handleSubmit={handleSubmit}
                                      error={error}
                                      register={register} />
                    }
                </Box>
            </Modal>
        </div>
    )
}