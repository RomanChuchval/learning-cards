import { isInitializeSelector, isLoadingSelector } from 'app/app.selectors'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { isLoadingPacksSelector } from 'features/packs/packs.selectors'
import { isLoadingLearnSelector } from 'features/learn/learn.selector'

export const useApp = () => {
    const isAuthLoading = useAppSelector(isLoadingSelector)
    const isInitialize = useAppSelector(isInitializeSelector)
    const isPacksLoading = useAppSelector(isLoadingPacksSelector)
    const isLearnLoading = useAppSelector(isLoadingLearnSelector)

    const isLoadingApp = isAuthLoading || isPacksLoading
    const isLoadingLearn = isAuthLoading || isLearnLoading

    return {
        isInitialize,
        isLoadingApp,
        isLoadingLearn
    }
}