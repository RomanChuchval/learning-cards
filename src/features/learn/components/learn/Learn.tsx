import React, { useEffect, useState } from 'react'
import { BackTo, paths, SuperButton } from 'common'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid/Grid'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { counterLearnSelector, learnSelector, selectedPackIdSelector } from 'features/learn/learn.selector'
import { LearnFormRadio } from 'features/learn/components/learnFormRadio/LearnFormRadio'
import Paper from '@mui/material/Paper/Paper'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { learnThunks } from 'features/learn/learn.slice'

export const Learn = () => {
    const [showAnswer, setShowAnswer] = useState(false)
    const cards = useAppSelector(learnSelector)
    const counter = useAppSelector(counterLearnSelector)
    const packId = useAppSelector(selectedPackIdSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (counter === 4) {
            dispatch(learnThunks.getSortCard(packId))
        }
    }, [counter, dispatch, packId])

    const showAnswerHandler = () => {
        setShowAnswer(true)
    }
    const closeAnswer = () => {
        setShowAnswer(false)
    }
    return (
        <>
            <BackTo link={paths.PACKS} text={'Back to Packs List'} />
            <Grid container spacing={3}
                  direction='column'
                  alignItems='center'
                  sx={{ marginTop: '20px' }}>
                <Grid item xs={12}>
                    <Typography variant='h5' component='h4' sx={{ fontWeight: 600 }}>
                        Learn “Pack Name”
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant='outlined' sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: '35px' }}>
                        <Typography variant='subtitle1' component='div'>
                            <b>Question:</b> {cards[counter]?.question}
                        </Typography>
                        <Typography variant='subtitle2' component='div' sx={{ marginBottom: '20px', opacity: 0.5 }}>
                            Количество попыток ответов на вопрос: <b>{cards[counter]?.shots}</b>
                        </Typography>
                        {showAnswer
                            ? <LearnFormRadio cardId={cards[counter]?._id} answer={cards[counter]?.answer}
                                              closeAnswer={closeAnswer} />
                            : <SuperButton name={'Show answer'} rounded={true} textColor={'white'}
                                           callback={showAnswerHandler} />}
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
