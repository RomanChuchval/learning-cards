import { isFulfilled, isPending, isRejectedWithValue } from '@reduxjs/toolkit'
import { authThunks } from 'features/auth/auth.slice'

const rejected = isRejectedWithValue(
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
const pending = isPending(
    authThunks.login,
    authThunks.forgotPassword,
    authThunks.logout,
    authThunks.updateProfile,
    authThunks.register,
    authThunks.setNewPassword
)
const initializePending = isPending(authThunks.authMe)

export { rejected, fulfilledWithInfo, loginFulfilled, initializePending, pending }
