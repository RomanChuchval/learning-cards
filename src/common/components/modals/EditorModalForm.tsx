import React from 'react'
import FormGroup from '@mui/material/FormGroup/FormGroup'
import Box from '@mui/material/Box'
import { SuperButton } from 'common'
import { UseFormHandleSubmit } from 'react-hook-form'
import { FormInputValues } from 'features/auth/hooks/useAppForm'

type EditorModalFormPropsType = {
    children: React.ReactNode
    handleClose: () => void
    handleSubmit: UseFormHandleSubmit<FormInputValues>
    packHandler: (data: FormInputValues) => void
}
export const EditorModalForm: React.FC<EditorModalFormPropsType> =
    ({ children, handleSubmit, handleClose, packHandler }) => {
        return (
            <form onSubmit={handleSubmit(packHandler)}>
                <FormGroup sx={{ p: '30px 40px' }}>
                    {children}
                    <Box display={'flex'} justifyContent='space-between'>
                        <SuperButton name={'Cancel'}
                                     color={'secondary'}
                                     rounded={true}
                                     width={'130'}
                                     type={'button'}
                                     callback={handleClose} />
                        <SuperButton name={'Save'} rounded={true} width={'130'} />
                    </Box>
                </FormGroup>
            </form>
        )
    }