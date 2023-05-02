import React, { FC } from 'react'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import { InputAdornment, Typography } from '@mui/material'

type SearchBarPropsType = {
    fullWidth?: boolean
}

export const SearchBar: FC<SearchBarPropsType> = ({ fullWidth }) => {
    return (
        <Box>
            <Typography sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '17px', mb: '8px' }}>
                Search
            </Typography>
            <TextField
                fullWidth={fullWidth ? fullWidth : false}
                size={'small'}
                placeholder={'Provide your text…'}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}
