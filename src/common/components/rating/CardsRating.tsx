import React from 'react'
import Rating from '@mui/material/Rating'

type CardsRatingPropsType = {
    defaultValue: number
}

export const CardsRating: React.FC<CardsRatingPropsType> = ({ defaultValue }) => {
    return <Rating name='half-rating-read' defaultValue={defaultValue} precision={0.5} readOnly />
}
