import { RootState } from 'app/store'

const packsSelector = (state: RootState) => state.packs.packs
const paramsSelector = (state: RootState) => state.packs.params
const isLoadingPacksSelector = (state: RootState) => state.packs.isLoading

export { packsSelector, paramsSelector, isLoadingPacksSelector }