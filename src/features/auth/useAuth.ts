import { useAppDispatch, useAppSelector } from 'app/hooks/hooks'
import { authThunks } from 'features/auth/auth.slice'
import { profileSelector } from 'features/auth/auth.selectors'

export const useAuth = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector(profileSelector)

    const login = () => {
        const payload = {
            email: 'rchuchvaldev@gmail.com',
            password: 'qwerqwerqaz',
            rememberMe: true,
        }
        dispatch(authThunks.login(payload))
    }
    const logout = () => dispatch(authThunks.logout())

    const isProfileDefine = () => !!profile
    const isUserAuth = isProfileDefine()

    return { login, profile, isUserAuth, logout }
}
