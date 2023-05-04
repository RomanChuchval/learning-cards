import { RootState } from 'app/store'

const packsSelectors = (state: RootState) => state.packs.packs

export { packsSelectors }