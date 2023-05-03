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

    return { login, profile }
}
