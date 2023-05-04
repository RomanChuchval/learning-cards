import { useAppDispatch, useAppSelector } from 'app/hooks/hooks'
import { authThunks } from 'features/auth/auth.slice'
import { redirectPathSelector, profileSelector } from 'features/auth/auth.selectors'
import { LoginFieldsType } from 'features/auth/components/login/Login'
import { RegisterBodyType } from 'features/auth/auth.api'

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

    const isProfileDefine = () => !!profile
    const isUserAuth = isProfileDefine()

    return { login, registration, logout, profile, isUserAuth, redirectPath }
}
