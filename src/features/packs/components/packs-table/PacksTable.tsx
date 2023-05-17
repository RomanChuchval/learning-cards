import { usePacksParamsFilter } from 'features/packs/hooks/usePacksParamsFilter'
import Grid from '@mui/material/Grid'
import { CustomTable } from 'common/components/table/CustomTable'
import TableRow from '@mui/material/TableRow/TableRow'
import TableCell from '@mui/material/TableCell/TableCell'
import React from 'react'
import { TableActions } from 'features/packs/components/pack-actions/TableActions'
import { TableSkeleton } from 'common/components/table-skeleton/TableSkeleton'
import { paths } from 'common/constants/paths'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'app/hooks/useAppDispatch'
import { cardsActions, cardsThunks } from 'features/cards/cards.slice'

import { useApp } from 'app/hooks/useApp'
import { packsAction } from 'features/packs/packs.slice'

export const PacksTable = () => {
    const { packs, params, userId, sort, setSort, sortHandler } = usePacksParamsFilter()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isLoading } = useApp()

    const tableBodySX = {
        wordWrap: 'break-word',
        minWidth: '150px',
        maxWidth: '200px',
    }

    const toCards = (id: string) => {
        dispatch(cardsActions.setSelectedCardsPackId(id))
        dispatch(packsAction.setSelectedPack({ id }))
        navigate(paths.CARDS, { state: id })
        dispatch(cardsThunks.getCards())
    }

    return (
        <Grid item md={12}>
            <CustomTable
                disabled={isLoading}
                setSort={setSort}
                sort={sort}
                sortHandler={sortHandler}
                tableCellForHeader={['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']}
            >
                {isLoading ? (
                    <TableSkeleton defaultCell={5} defaultRow={params.pageCount || '4'} />
                ) : (
                    packs.cardPacks?.map(textBody => {
                        return (
                            <TableRow key={textBody._id}>
                                <TableCell
                                    onClick={() => toCards(textBody._id)}
                                    sx={{
                                        ...tableBodySX,
                                        paddingLeft: '40px',
                                        cursor: 'pointer',
                                        ':hover': { backgroundColor: 'rgb(245, 245, 245)' },
                                    }}
                                >
                                    {textBody.name}
                                </TableCell>
                                <TableCell sx={tableBodySX}>{textBody.cardsCount}</TableCell>
                                <TableCell sx={tableBodySX}>
                                    {textBody.updated.slice(0, 10)}
                                </TableCell>
                                <TableCell sx={tableBodySX}>{textBody.user_name}</TableCell>
                                <TableCell>
                                    <TableActions
                                        packName={textBody.name}
                                        myCards={userId === textBody.user_id}
                                        packId={textBody._id}
                                    />
                                </TableCell>
                            </TableRow>
                        )
                    })
                )}
            </CustomTable>
        </Grid>
    )
}
