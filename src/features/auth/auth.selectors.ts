import { RootState } from 'app/store'

const profileSelector = (state: RootState) => state.auth.profile

export { profileSelector }
