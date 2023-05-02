import React from 'react'
import { Box, FormControl, MenuItem, Pagination, Select, SelectChangeEvent } from '@mui/material'

export type CardsPaginationPropsType = {
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

export const CardsPagination: React.FC<CardsPaginationPropsType> = ({
    page,
    itemsCountForPage,
    totalCount,
    onChange,
}) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)
    const styleForContainer = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        flexWrap: 'wrap',
        gap: '20px',
    }
    const styleForFormControl = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
    }

    const handleSelectorChange = (event: SelectChangeEvent) => {
        onChange(page, +event.target.value)
    }
    const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        onChange(page, itemsCountForPage)
    }

    return (
        <Box sx={styleForContainer}>
            <Pagination
                count={lastPage}
                color='primary'
                shape='rounded'
                onChange={handlePaginationChange}
            />
            <FormControl sx={styleForFormControl}>
                <Box component={'span'}>Show</Box>
                <Select
                    autoWidth={true}
                    sx={{ width: '60px', height: '36px' }}
                    value={`${itemsCountForPage}`}
                    onChange={handleSelectorChange}
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
                <Box component={'span'}>Cards per Page</Box>
            </FormControl>
        </Box>
    )
}
