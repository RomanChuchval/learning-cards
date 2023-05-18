import React from 'react'
import IconButton from '@mui/material/IconButton'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { AppModal } from 'features/modals/components/AppModal'
import { EditorCardsModal } from 'features/cards/components/cards/EditorCardsModal'
import { useAppModals } from 'common/hooks/useAppModals'
import { useEditorCards } from 'features/cards/hooks/useEditorCards'
import { useModalsForm } from 'common/hooks/useModalsForm'
import { useApp } from 'app/hooks/useApp'

type UpdateCardActionsPropsType = {
    question: string
    answer: string
    cardId: string
}
export const UpdateCard: React.FC<UpdateCardActionsPropsType> = ({ question, answer, cardId }) => {
    // const { open, handleClose, handleOpen } = useAppModals()
    // const { updateCard } = useEditorCards(handleClose, cardId)
    // const { register, handleSubmit, onSubmitHandler } = useModalsForm(updateCard)
    // const { isLoading } = useApp()
    return (
        <>
            {/*<IconButton size={'small'} onClick={handleOpen}>*/}
            {/*    <BorderColorIcon sx={{ fontSize: '18px' }} />*/}
            {/*</IconButton>*/}
            {/*<AppModal*/}
            {/*    title={'Edit card'}*/}
            {/*    open={open}*/}
            {/*    handleClose={handleClose}*/}
            {/*    handleSubmit={handleSubmit}*/}
            {/*    callbackHandler={callbackHandler}*/}
            {/*>*/}
            {/*    <EditorCardsModal register={register} question={question} answer={answer} />*/}
            {/*</AppModal>*/}
        </>
    )
}
