import { isInitializeSelector, isLoadingSelector } from 'app/app.selectors'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { isLoadingPacksSelector } from 'features/packs/packs.selectors'

export const useApp = () => {
    const isAuthLoading = useAppSelector(isLoadingSelector)
    const isInitialize = useAppSelector(isInitializeSelector)
    const isPacksLoading = useAppSelector(isLoadingPacksSelector)
    const isLoading = isAuthLoading || isPacksLoading

    return {
        isInitialize,
        isLoading
    }
}