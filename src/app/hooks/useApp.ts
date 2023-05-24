import { isInitializeSelector, isLoadingSelector } from 'app/app.selectors'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { isLoadingPacksSelector } from 'features/packs/packs.selectors'
import { isCardsLoadingSelector } from 'features/cards/cards.selectors'

export const useApp = () => {
    const isAuthLoading = useAppSelector(isLoadingSelector)
    const isInitialize = useAppSelector(isInitializeSelector)
    const isPacksLoading = useAppSelector(isLoadingPacksSelector)
    const isCardsLoading = useAppSelector(isCardsLoadingSelector)

    const isLoading = isAuthLoading || isPacksLoading || isCardsLoading

    return {
        isInitialize,
        isLoading,
        isCardsLoading,
    }
}
