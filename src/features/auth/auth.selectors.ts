import { RootState } from 'app/store'

const profileSelector = (state: RootState) => state.auth.profile
const redirectPathSelector = (state: RootState) => state.auth.redirectPath
const userIdSelector = (state: RootState) => state.auth.profile?._id

export { profileSelector, redirectPathSelector, userIdSelector }
