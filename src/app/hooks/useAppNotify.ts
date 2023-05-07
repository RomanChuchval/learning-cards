import { useAppSelector } from 'app/hooks/useAppSelector'
import { errorSelector, infoMessageSelector } from 'app/app.selectors'
import { toast } from 'react-toastify'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { appActions } from 'app/app.slice'

export const useAppNotify = () => {
    const error = useAppSelector(errorSelector)
    const infoMessage = useAppSelector(infoMessageSelector)
    const dispatch = useAppDispatch()

    if (infoMessage) {
        toast.success(infoMessage, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            style: {
                backgroundColor: '#366EFF',
            },
        })
        dispatch(appActions.resetAppInfo())
    }

    if (error) {
        toast.error(error, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        })
        dispatch(appActions.resetAppInfo())
    }
}
