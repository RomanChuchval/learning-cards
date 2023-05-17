import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { cardsThunks } from 'features/cards/cards.slice'
import { CreateCardRequestType, UpdateCardRequestType } from 'features/cards/cards.api'
import { FormInputValues } from 'features/auth/hooks/useAppForm'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { selectedCardsPackIdSelector } from 'features/cards/cards.selectors'

export const useEditorCards = (handleClose: () => void, cardId: string = '') => {
    const dispatch = useAppDispatch()
    const selectedPackId = useAppSelector(selectedCardsPackIdSelector)

    const createCard = (data: FormInputValues) => {
        const requestData: CreateCardRequestType = {
            cardsPack_id: selectedPackId,
            question: data.question,
            answer: data.answer,
        }
        dispatch(cardsThunks.createCard(requestData))
        handleClose()
    }

    const updateCard = (data: FormInputValues) => {
        const requestData: UpdateCardRequestType = {
            _id: cardId,
            question: data.question,
            answer: data.answer,
        }
        dispatch(cardsThunks.updateCard(requestData))
        handleClose()
    }

    const removeCard = () => {
        dispatch(cardsThunks.removeCard(cardId))
        handleClose()
    }

    return { createCard, updateCard, removeCard }
}
