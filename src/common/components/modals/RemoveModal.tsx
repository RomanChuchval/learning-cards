import React, { memo } from 'react'

type PacksModalPropsType = {
    removedTitle: string
    entityName: string
    children: React.ReactNode
    title: string
    open: boolean
    handleClose: () => void
    onRemove: () => void
}

export const RemoveModal: React.FC<PacksModalPropsType> = memo(
    ({ entityName, removedTitle, children, title, open, handleClose, onRemove }) => {
        return (
            <div>
                {children}
                {/*<Modal open={open} onClose={handleClose}>*/}
                {/*    */}
                {/*</Modal>*/}
            </div>
        )
    }
)
