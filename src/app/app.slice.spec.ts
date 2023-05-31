import { appActions, appReducer } from 'app'

describe('app slice', () => {
    let initialState: any

    beforeEach(() => {
        initialState = {
            error: null,
            infoMessage: null,
            isLoading: false,
            isAppInitialized: false,
        }
    })

    it('should handle setIsLoading action', () => {
        const nextState = appReducer(initialState, appActions.setIsLoading({ isLoading: true }))

        expect(nextState.isLoading).toEqual(true)
    })

    it('should handle setAppInitialize action', () => {
        const nextState = appReducer(initialState, appActions.setAppInitialize())

        expect(nextState.isAppInitialized).toEqual(false)
    })
})
