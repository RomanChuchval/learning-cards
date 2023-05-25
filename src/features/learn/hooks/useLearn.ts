import { useState } from 'react'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { counterLearnSelector, learnSelector } from 'features/learn/learn.selector'
import { selectedPackSelector } from 'features/packs/packs.selectors'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { learnThunks } from 'features/learn/learn.slice'


export const useLearn = () => {
    const dispatch = useAppDispatch()

    const [showAnswer, setShowAnswer] = useState(false)
    const cards = useAppSelector(learnSelector)
    const counter = useAppSelector(counterLearnSelector)
    const selectedPack = useAppSelector(selectedPackSelector)

    const card = cards[counter] || []

    const onShowAnswer = () => setShowAnswer(true)
    const closeAnswer = () => setShowAnswer(false)

    const updateCardGrade = (grade: GradeType ) => {
        dispatch(learnThunks.updateCardGrade({ card_id: card._id, grade }))
        closeAnswer()
    }

    return {
        updateCardGrade,
        onShowAnswer,
        closeAnswer,
        showAnswer,
        selectedPack,
        card,
    }
}

//types
export type GradeType =  "1" | "4" | "0" | "2" | "3" | "5"