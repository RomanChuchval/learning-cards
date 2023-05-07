import { RootState } from 'app/store'

const errorSelector = (state: RootState) => state.app.error
const infoMessageSelector = (state: RootState) => state.app.infoMessage

export { errorSelector, infoMessageSelector }
