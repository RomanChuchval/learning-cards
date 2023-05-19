import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { cardsThunks } from 'features/cards/cards.slice'
import { CreateCardRequestType, UpdateCardRequestType } from 'features/cards/cards.api'
import { FormInputValues } from 'features/auth/hooks/useAppForm'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { selectedCardsPackIdSelector } from 'features/cards/cards.selectors'
import { cardIdsSelector } from 'features/modals/modals.selector'
import { modalsAction } from 'features/modals/modals.slice'

export const useEditorCards = () => {
    const dispatch = useAppDispatch()
    const selectedPackId = useAppSelector(selectedCardsPackIdSelector)
    const cardId = useAppSelector(cardIdsSelector)

    const createCard = (data: FormInputValues) => {
        const requestData: CreateCardRequestType = {
            cardsPack_id: selectedPackId,
            question: data.question,
            answer: data.answer,
        }
        dispatch(cardsThunks.createCard(requestData))
        dispatch(modalsAction.closeModal())
    }

    const updateCard = (data: FormInputValues) => {
        const requestData: UpdateCardRequestType = {
            _id: cardId,
            question: data.question,
            answer: data.answer,
        }
        dispatch(cardsThunks.updateCard(requestData))
        dispatch(modalsAction.closeModal())
    }

    const removeCard = () => {
        dispatch(cardsThunks.removeCard(cardId))
        dispatch(modalsAction.closeModal())
    }

    return { createCard, updateCard, removeCard }
}
