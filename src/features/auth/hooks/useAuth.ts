import { useAppDispatch, useAppSelector } from 'app/hooks/hooks'
import { authThunks } from 'features/auth/auth.slice'
import { redirectPathSelector, profileSelector } from 'features/auth/auth.selectors'
import { LoginFieldsType } from 'features/auth/components/login/Login'
import { ForgotPassBodyType, RegisterBodyType, SetNewPassBodyType } from 'features/auth/auth.api'
import { emailMessage } from 'features/auth/constants'

export const useAuth = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector(profileSelector)
    const redirectPath = useAppSelector(redirectPathSelector)

    const login = (data: LoginFieldsType) => {
        const payload = {
            email: data.loginEmail,
            password: data.loginPassword,
            rememberMe: data.rememberMe,
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
            message: emailMessage,
        }
        dispatch(authThunks.forgotPassword(payload))
    }
    const setNewPassword = (password: string, token: string) => {
        const payload: SetNewPassBodyType = {
            password,
            resetPasswordToken: token,
        }
        dispatch(authThunks.setNewPassword(payload))
    }

    const isProfileDefine = () => !!profile
    const isUserAuth = isProfileDefine()

    return {
        login,
        registration,
        logout,
        forgotPassword,
        setNewPassword,
        profile,
        isUserAuth,
        redirectPath,
    }
}
