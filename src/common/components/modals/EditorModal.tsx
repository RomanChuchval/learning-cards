import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { EditorPacksModal } from 'features/packs/components/modals/packs-modals/EditorPacksModal'
import { useModalsForm } from 'common/hooks/useModalsForm'
import { FormInputValues } from 'features/auth/hooks/useAppForm'
import { EditorModalForm } from './EditorModalForm'

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
    title: string
    packName?: string
    onEditor: (data: FormInputValues) => void
    children: React.ReactNode
    open: boolean
    handleClose: () => void
}

export const EditorModal: React.FC<PacksModalPropsType> = (
    { children, open, handleClose, title, onEditor, packName }) => {
    const {error, register, handleSubmit, editorHandler} = useModalsForm(onEditor, packName)
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
                    <EditorModalForm handleSubmit={handleSubmit} packHandler={editorHandler} handleClose={handleClose}>
                        <EditorPacksModal error={error} register={register} />
                    </EditorModalForm>
                </Box>
            </Modal>
        </div>
    )
}

