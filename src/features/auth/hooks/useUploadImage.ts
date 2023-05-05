import { ChangeEvent } from 'react'
import { useAppDispatch } from 'app/hooks/hooks'
import { authThunks } from 'features/auth/auth.slice'

export const useUploadImage = () => {
    const dispatch = useAppDispatch()
    return (event: ChangeEvent<HTMLInputElement>) => {
        let file
        if (!event.target.files) {
            return
        }
        file = event.target.files[0]

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            const avatar = reader.result as string
            dispatch(authThunks.updateProfile({ avatar }))
        }
    }
}
