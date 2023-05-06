import * as React from 'react'

export const useModalsPacks = () => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return {
        open,
        handleOpen,
        handleClose,
    }
}

