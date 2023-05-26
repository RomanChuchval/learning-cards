import { useAppSelector } from 'app'
import { authThunks } from 'features/auth/auth.slice'
import {
    redirectPathSelector,
    profileSelector,
    checkEmailMessageSelector,
    userIdSelector
} from 'features/auth/auth.selectors'
import { LoginFieldsType } from 'features/auth/components/login/Login'
import {
    ForgotPassBodyType,
    RegisterBodyType,
    SetNewPassBodyType,
    UpdateProfileBodyType
} from 'features/auth/auth.api'
import { emailMessage } from 'features/auth/constants'
import { useAppDispatch } from 'app'

export const useAuth = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector(profileSelector)
    const redirectPath = useAppSelector(redirectPathSelector)
    const emailAddress = useAppSelector(checkEmailMessageSelector)
    const authorizedUserId = useAppSelector(userIdSelector)

    const isProfileDefine = () => Boolean(profile)
    const isUserAuth = isProfileDefine()

    const login = (data: LoginFieldsType) => {
        const payload = {
            email: data.loginEmail,
            password: data.loginPassword,
            rememberMe: data.rememberMe
        }
        dispatch(authThunks.login(payload))
    }
    const logout = () => dispatch(authThunks.logout())
    const registration = (data: RegisterBodyType) => {
        dispatch(authThunks.register(data))
    }
    const forgotPassword = (data: { email: string }) => {
        const payload: ForgotPassBodyType = {
            email: data.email,
            from: 'App developers ;)',
            message: emailMessage
        }
        dispatch(authThunks.forgotPassword(payload))
    }
    const setNewPassword = (password: string, token: string) => {
        const payload: SetNewPassBodyType = {
            password,
            resetPasswordToken: token
        }
        dispatch(authThunks.setNewPassword(payload))
    }

    const updateUserName = (data: UpdateProfileBodyType) => {
        dispatch(authThunks.updateProfile(data))
    }

    return {
        login,
        registration,
        logout,
        updateUserName,
        forgotPassword,
        setNewPassword,
        profile,
        isUserAuth,
        redirectPath,
        emailAddress,
        authorizedUserId
    }
}
