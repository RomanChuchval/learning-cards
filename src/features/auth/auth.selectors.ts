import { RootState } from 'app/store'

const profileSelector = (state: RootState) => state.auth.profile
const userIdSelector = (state: RootState) => state.auth.profile?._id

export { profileSelector, userIdSelector }
