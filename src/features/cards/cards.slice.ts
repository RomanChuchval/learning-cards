import { createSlice } from '@reduxjs/toolkit'
import { cardsApi, GetCardsParamsType, GetCardsResponseType } from 'features/cards/cards.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { thunkErrorHandler } from 'common/utils/thunkErrorHandler'

const slice = createSlice({
    name: 'cards',
    initialState: {
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
        isLoading: false as boolean,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCards.fulfilled, (state, action) => {
            state.cards = action.payload.cards
        })
    },
})

const getCards = createAppAsyncThunk<{ cards: GetCardsResponseType }, string>(
    'cards/getCards',
    async (id, { rejectWithValue, getState }) => {
        const params = { ...getState().cards.params, cardsPack_id: id }
        try {
            const res = await cardsApi.getCards(params)
            return { cards: res.data }
        } catch (e) {
            const error = thunkErrorHandler(e)
            return rejectWithValue(error)
        }
    }
)

export const cardsReducer = slice.reducer
export const cardsThunks = { getCards }
