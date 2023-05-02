import React, { FC, ReactNode } from 'react'
import Popover from '@mui/material/Popover'

type CustomPopoverPropsType = {
    anchorEl: HTMLButtonElement | null
    handleClose: () => void
    children?: ReactNode
}

export const CustomPopover: FC<CustomPopoverPropsType> = ({ handleClose, anchorEl, children }) => {
    return (
        <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            {children}
        </Popover>
    )
}
