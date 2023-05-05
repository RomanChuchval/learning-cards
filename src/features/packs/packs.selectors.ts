import { RootState } from 'app/store'

export const packsSelector = (state: RootState) => state.packs.packs
export const paramsSelector = (state: RootState) => state.packs.params
