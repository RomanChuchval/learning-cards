import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    cardsApi,
    CreateCardRequestType,
    GetCardsParamsType,
    GetCardsResponseType,
} from 'features/cards/cards.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { thunkErrorHandler } from 'common/utils/thunkErrorHandler'
import { GetParamsType } from 'features/cards/hooks/useCards'

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
        selectedCardsPackId: '' as string,
        isLoading: false as boolean,
    },
    reducers: {
        setCardsParams: (state, action: PayloadAction<{ params: GetParamsType }>) => {
            state.params = { ...state.params, ...action.payload.params }
        },
        setSelectedCardsPackId: (state, action: PayloadAction<string>) => {
            state.selectedCardsPackId = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(getCards.fulfilled, (state, action) => {
            state.cards = action.payload.cards
        })
    },
})

const getCards = createAppAsyncThunk<{ cards: GetCardsResponseType }>(
    'cards/getCards',
    async (id, { rejectWithValue, getState }) => {
        const params = {
            ...getState().cards.params,
            cardsPack_id: getState().cards.selectedCardsPackId,
        }
        try {
            const res = await cardsApi.getCards(params)
            return { cards: res.data }
        } catch (e) {
            const error = thunkErrorHandler(e)
            return rejectWithValue(error)
        }
    }
)

const createCard = createAppAsyncThunk<void, CreateCardRequestType>(
    'cards/createCard',
    async (data, { rejectWithValue, dispatch }) => {
        try {
            await cardsApi.createCard(data)
            dispatch(getCards())
        } catch (e) {
            const error = thunkErrorHandler(e)
            return rejectWithValue(error)
        }
    }
)

export const cardsReducer = slice.reducer
export const cardsActions = slice.actions
export const cardsThunks = { getCards, createCard }
