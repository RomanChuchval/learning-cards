import React, { ChangeEvent, FC, useState } from 'react'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'

type SearchBarPropsType = {
    fullWidth?: boolean
    onChange: (value: string) => void
    value: string
}

export const SearchBar: FC<SearchBarPropsType> = ({ fullWidth, value, onChange }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    return (
        <Box>
            <Typography sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '17px', mb: '8px' }}>
                Search
            </Typography>
            <TextField
                onChange={onChangeHandler}
                value={value}
                fullWidth={fullWidth ?? false}
                size={'small'}
                placeholder={'Provide your text…'}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
        </Box>
    )
}
