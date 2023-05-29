import { describe, it, expect } from '@jest/globals'
import { CardQuestionType, cardsActions, cardsReducer } from 'features/cards/cards.slice'
import { GetParamsType } from 'features/cards/hooks/useCards'
import { GetCardsParamsType, GetCardsResponseType } from 'features/cards/cards.api'

describe('cards slice', () => {
    let initialState: any

    beforeEach(() => {
        initialState = {
            cards: {} as GetCardsResponseType,
            params: {
                cardAnswer: '',
                cardQuestion: '',
                cardsPack_id: '',
                min: '0',
                max: '100',
                sortCards: '0grade',
                page: '1',
                pageCount: '4',
            } as GetCardsParamsType,
            selectedCardsPackId: '' as string,
            isLoading: false as boolean,
            infoMessage: '' as string,
            updateCardQuestions: {
                question: '',
                questionImg: '',
            } as CardQuestionType,
        }
    })

    it('should set cards params correctly', () => {
        const params: GetParamsType = {
            cardAnswer: 'answer',
            cardQuestion: 'question',
            min: '0',
            max: '100',
            sortCards: '0grade',
            page: '1',
            pageCount: '4',
        }
        const nextState = cardsReducer(initialState, cardsActions.setCardsParams({ params }))

        expect(nextState.params).toEqual(params)
    })

    it('should set selected cards pack ID correctly', () => {
        const selectedCardsPackId = 'selectedPackId'

        const nextState = cardsReducer(
            initialState,
            cardsActions.setSelectedCardsPackId(selectedCardsPackId)
        )
        expect(nextState.selectedCardsPackId).toEqual(selectedCardsPackId)
    })
})
