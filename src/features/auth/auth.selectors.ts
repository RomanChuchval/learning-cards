import { RootState } from 'app/store'

const profileSelector = (state: RootState) => state.auth.profile
const redirectPathSelector = (state: RootState) => state.auth.redirectPath

export { profileSelector, redirectPathSelector }
