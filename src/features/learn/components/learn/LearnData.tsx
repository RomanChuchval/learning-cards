import Skeleton from '@mui/material/Skeleton/Skeleton'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useApp } from 'app'

type LearnDataPropsType = {
    title: string
    data: string
    dataImg?: string
}

export const LearnData: React.FC<LearnDataPropsType> =
    ({ title, data, dataImg }) => {
    const { isLoadingLearn } = useApp()

        return (
            <Typography variant='subtitle1' component='div' sx={{ marginBottom: '20px' }}>

                <b>{title}: </b>
                {isLoadingLearn
                    ? <Skeleton variant="text"/>
                    : data && data !== ' '
                        ? data
                        : <div style={{
                            width: '375px',
                            height: '120px',
                            background: `url(${dataImg}) no-repeat center/contain`
                        }} />}
            </Typography>
        )
    }