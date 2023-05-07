import { isFulfilled, isRejected } from '@reduxjs/toolkit'
import { authThunks } from 'features/auth/auth.slice'

const rejected = isRejected(
    authThunks.login,
    authThunks.forgotPassword,
    authThunks.logout,
    authThunks.updateProfile,
    authThunks.register,
    authThunks.setNewPassword
)
const fulfilledWithInfo = isFulfilled(
    authThunks.logout,
    authThunks.forgotPassword,
    authThunks.setNewPassword
)
const loginFulfilled = isFulfilled(authThunks.login)

export { rejected, fulfilledWithInfo, loginFulfilled }
