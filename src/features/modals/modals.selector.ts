import { RootState } from 'app/store'
const isModalOpenSelector = (state: RootState) => state.modals.open

export { isModalOpenSelector }
