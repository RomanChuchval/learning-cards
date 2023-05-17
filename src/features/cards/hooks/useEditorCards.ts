import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { cardsThunks } from 'features/cards/cards.slice'
import { CreateCardRequestType } from 'features/cards/cards.api'
import { FormInputValues } from 'features/auth/hooks/useAppForm'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { selectedCardsPackIdSelector } from 'features/cards/cards.selectors'

export const useEditorCards = (handleClose: () => void) => {
    const dispatch = useAppDispatch()
    const selectedPackId = useAppSelector(selectedCardsPackIdSelector)

    const createCard = (data: FormInputValues) => {
        const requestData: CreateCardRequestType = {
            cardsPack_id: selectedPackId,
            question: data.questionInput,
            answer: data.answerInput,
        }
        dispatch(cardsThunks.createCard(requestData))
        handleClose()
    }

    return { createCard }
}
