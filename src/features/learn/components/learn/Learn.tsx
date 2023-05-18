import React, { useState } from 'react'
import { BackTo, paths, SuperButton } from 'common'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid/Grid'
import { LearnFormRadio } from 'features/learn/components/learnFormRadio/LearnFormRadio'
import { useCards } from 'features/cards/hooks/useCards'

export const Learn = () => {
    const [showAnswer, setShowAnswer] = useState(false)
    const {cards} = useCards()
    const showAnswerHandler = () => {
        setShowAnswer(true)
    }
    console.log(cards)
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
                            <b>Question:</b> How "This" works in JavaScript?
                        </Typography>
                        <Typography variant='subtitle2' component='div' sx={{ marginBottom: '20px', opacity: 0.5 }}>
                            Количество попыток ответов на вопрос: <b>10</b>
                        </Typography>
                        {showAnswer
                            ? <LearnFormRadio />
                            : <SuperButton name={'Show answer'} rounded={true} textColor={'white'}
                                           callback={showAnswerHandler} />}
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

