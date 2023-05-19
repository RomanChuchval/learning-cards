import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cardsApi, CardType, GetCardsParamsType, UpdateCardGradeRequestType } from 'features/cards/cards.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { thunkErrorHandler } from 'common/utils/thunkErrorHandler'

const slice = createSlice({
    name: 'learn',
    initialState: {
        cards: [] as CardType[],
        answersCount: 0 as number,
        requestsCount: 0 as number,
        selectedPackId: '' as string,
        isLoading: false as boolean,
    },
    reducers: {
        setAnswersCount: state => {
            state.answersCount = state.answersCount+1
        },
        setRequestCounter: state => {
            state.requestsCount = state.requestsCount+1
        },
        resetCounter: (state, action: PayloadAction<string>)  => {
            state.selectedPackId = action.payload
            state.answersCount = 0
            if(state.requestsCount === 2) {
                state.requestsCount = 0
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(getSortCard.fulfilled, (state, action) => {
            state.cards = action.payload.cards
        })
    },
})

const getSortCard = createAppAsyncThunk<{cards: CardType[]}, string >(
    'learn/getSortCard',
    async(id, thunkApi) => {
        const {rejectWithValue, dispatch, getState} = thunkApi
        try {
            const sortGrade = getState().learn.requestsCount < 2 ? '0grade' : '1grade'
            const param:GetCardsParamsType = {
                cardsPack_id: id,
                pageCount: '5',
                sortCards: sortGrade
            }
            const res = await cardsApi.getCards(param)
            dispatch(learnActions.resetCounter(id))
            dispatch(learnActions.setRequestCounter())
            return {cards: res.data.cards}
        }
        catch (e) {
            const error = thunkErrorHandler(e)
            return rejectWithValue(error)
        }
    })
const updateCardGrade = createAppAsyncThunk<void, UpdateCardGradeRequestType>(
    'learn/updateCardGrade',
    async (data, thunkApi) => {
        const {rejectWithValue, dispatch} = thunkApi
        try {
            await cardsApi.updateCardGrade(data)
            dispatch(learnActions.setAnswersCount())
        }
        catch (e) {
            const error = thunkErrorHandler(e)
            return rejectWithValue(error)
        }
    }
)

export const learnReducer = slice.reducer
export const learnActions = slice.actions
export const learnThunks = { getSortCard, updateCardGrade }
