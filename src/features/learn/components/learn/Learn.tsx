import React from 'react'
import { BackTo, paths, SuperButton } from 'common'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid/Grid'
import { LearnFormRadio } from 'features/learn/components/learn/LearnFormRadio'
import Paper from '@mui/material/Paper/Paper'
import { LearnData } from 'features/learn/components/learn/LearnData'
import { useApp } from 'app/hooks/useApp'
import Skeleton from '@mui/material/Skeleton/Skeleton'
import { useLearn } from 'features/learn/hooks/useLearn'

export const Learn = () => {
    const { showAnswer, card, onShowAnswer, selectedPack, updateCardGrade } = useLearn()
    const { isLoadingLearn } = useApp()

    return (
        <>
            <BackTo link={paths.PACKS} text={'Back to Packs List'} />
            <Grid container spacing={3}
                  direction='column'
                  alignItems='center'
                  sx={{ marginTop: '20px' }}>
                <Grid item xs={12}>
                    <Typography variant='h5' component='h4' sx={{ fontWeight: 600 }}>
                        Learn: {selectedPack.name}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant='outlined' sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: '35px' }}>
                        <LearnData title={'Question'} data={card.question}
                                   dataImg={card.questionImg} />
                        <Typography variant='subtitle2' component='div' sx={{ marginBottom: '20px', opacity: 0.5 }}>
                            Количество попыток ответов на вопрос: {isLoadingLearn
                            ? <Skeleton variant='text' />
                            : <b>{card.shots}</b>}
                        </Typography>
                        {showAnswer
                            ? <LearnFormRadio answer={card.answer}
                                              answerImg={card.answerImg}
                                              updateCardGrade={updateCardGrade} />
                            : <SuperButton name={'Show answer'} rounded={true} textColor={'white'}
                                           callback={onShowAnswer} disable={isLoadingLearn} />}
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
