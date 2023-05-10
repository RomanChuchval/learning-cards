import { usePacksParamsFilter } from 'features/packs/hooks/usePacksParamsFilter'
import Grid from '@mui/material/Grid'
import { CustomTable } from 'common/components/table/CustomTable'
import TableRow from '@mui/material/TableRow/TableRow'
import TableCell from '@mui/material/TableCell/TableCell'
import React from 'react'
import { TableActions } from 'features/packs/components/pack-actions/TableActions'
import { TableSkeleton } from 'common/components/table-skeleton/TableSkeleton'
import { useAppSelector } from 'app/hooks/useAppSelector'
import { isLoadingPacksSelector } from 'features/packs/packs.selectors'

export const PacksTable = () => {
    const { packs, params, userId, sort, setSort, sortHandler } = usePacksParamsFilter()
    const isLoading = useAppSelector(isLoadingPacksSelector)

    const tableBodySX = {
        wordWrap: 'break-word',
        minWidth: '150px',
        maxWidth: '200px'
    }
    return (
        <Grid item md={12}>
            <CustomTable setSort={setSort}
                         sort={sort}
                         sortHandler={sortHandler}
                         tableCellForHeader={['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']}>
                {isLoading ? <TableSkeleton defaultCell={5} defaultRow={params.pageCount || '4'} />
                    : packs.cardPacks?.map(textBody => {
                        return (
                            <TableRow key={textBody._id}>
                                <TableCell sx={{ ...tableBodySX, paddingLeft: '40px' }}>
                                    {textBody.name}
                                </TableCell>
                                <TableCell sx={tableBodySX}>
                                    {textBody.cardsCount}
                                </TableCell>
                                <TableCell sx={tableBodySX}>
                                    {textBody.updated.slice(0, 10)}
                                </TableCell>
                                <TableCell sx={tableBodySX}>
                                    {textBody.user_name}
                                </TableCell>
                                <TableCell>
                                    <TableActions packName={textBody.name}
                                                  myCards={userId === textBody.user_id}
                                                  packId={textBody._id} />
                                </TableCell>
                            </TableRow>
                        )
                    })}
            </CustomTable>
        </Grid>
    )
}
