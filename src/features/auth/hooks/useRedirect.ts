import { redirectPathSelector } from 'features/auth/auth.selectors'
import { useNavigate } from 'react-router-dom'
import { authActions } from 'features/auth/auth.slice'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { useAppDispatch } from 'app/hooks/useAppDispatch'

export const useRedirect = () => {
    const redirectPath = useAppSelector(redirectPathSelector)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    if (redirectPath !== '/') {
        navigate(redirectPath)
        dispatch(authActions.clearRedirectPath())
    }
}
