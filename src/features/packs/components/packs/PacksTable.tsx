import React from 'react'
import Grid from '@mui/material/Grid'
import TableRow from '@mui/material/TableRow/TableRow'
import TableCell from '@mui/material/TableCell/TableCell'
import Box from '@mui/material/Box/Box'
import { usePacksParamsFilter } from 'features/packs/hooks/usePacksParamsFilter'
import { TableActions } from 'features/packs/components/pack-actions/TableActions'
import { cardsActions, cardsThunks } from 'features/cards/cards.slice'
import { packsAction } from 'features/packs/packs.slice'
import { useNavigate } from 'react-router-dom'
import { CustomTable, TableSkeleton, paths } from 'common'
import { useAppDispatch, useApp } from 'app'


export const PacksTable = () => {
    const { packs, params, userId, sort, setSort, sortHandler } = usePacksParamsFilter()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isLoadingApp } = useApp()

    const tableBodySX = {
        wordWrap: 'break-word',
        minWidth: '150px',
        maxWidth: '200px'
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
                disabled={isLoadingApp}
                setSort={setSort}
                sort={sort}
                sortHandler={sortHandler}
                tableCellForHeader={['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']}
            >
                {isLoadingApp ? (
                    <TableSkeleton defaultCell={5} defaultRow={params.pageCount || '4'} />
                ) : (
                    packs.cardPacks?.map(pack => {
                        return (
                            <TableRow key={pack._id} sx={{ ':hover': { backgroundColor: 'rgb(245, 245, 245)' } }}>
                                <TableCell
                                    onClick={() => toCards(pack._id)}
                                    sx={{
                                        ...tableBodySX,
                                        paddingLeft: '40px',
                                        maxWidth: '500px',
                                        cursor: 'pointer',
                                        verticalAlign: 'center',
                                        ':hover': { textDecoration: 'underline' }
                                    }}>
                                    <Box sx={{display: 'flex', alignItems: 'center',}}>
                                        {pack.deckCover && <div style={{
                                            marginLeft: '-12px',
                                            width: '60px',
                                            height: '35px',
                                            display: 'inline-block',
                                            background: `url(${pack.deckCover}) no-repeat center/contain`
                                        }} />}
                                        {pack.name}
                                    </Box>
                                </TableCell>
                                <TableCell sx={tableBodySX}>
                                    {pack.cardsCount}
                                </TableCell>
                                <TableCell sx={tableBodySX}>
                                    {pack.updated.slice(0, 10)}
                                </TableCell>
                                <TableCell sx={tableBodySX}>{pack.user_name}</TableCell>
                                <TableCell>
                                    <TableActions packName={pack.name}
                                                  myCards={userId === pack.user_id}
                                                  packId={pack._id}
                                                  defaultImg={pack.deckCover}
                                                  isCards={pack.cardsCount === 0} />
                                </TableCell>
                            </TableRow>
                        )
                    })
                )}
            </CustomTable>
        </Grid>
    )
}
