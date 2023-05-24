import React, { FC } from 'react'
import Box from '@mui/material/Box'

type CustomToastPropsType = {
    message: string
    image: string
}

export const CustomToast: FC<CustomToastPropsType> = ({ message, image }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {image !== ' ' && (
                <>
                    <img style={{ width: '40px' }} src={image} alt='notify_img' />
                    <span>Card updated!</span>
                </>
            )}
            {message !== ' ' && message !== 'no question' && <span>{message} Card updated!</span>}
            {(message === ' ' || message === 'no question') && image === ' ' && (
                <span>You create empty card!</span>
            )}
        </Box>
    )
}
