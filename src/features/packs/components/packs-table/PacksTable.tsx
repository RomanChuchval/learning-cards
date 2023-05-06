import { usePacksParamsFilter } from 'features/packs/hooks/usePacksParamsFilter'
import Grid from '@mui/material/Grid'
import { CustomTable } from 'common/components/table/CustomTable'
import TableRow from '@mui/material/TableRow/TableRow'
import TableCell from '@mui/material/TableCell/TableCell'
import React from 'react'
import { TableActions } from 'common/components/table-actions-buttons/TableActions'
import { PacksModal } from 'features/packs/components/modals/PacksModal'
import { useModalsPacks } from 'features/packs/hooks/useModalsPacks'
import { FormModals } from 'features/packs/components/modals/form-modal/FormModals'
import { useModalForm } from 'features/packs/hooks/useModalForm'

export const PacksTable = () => {
    const { packs, userId, sort, setSort, sortHandler } = usePacksParamsFilter()
    const { open, handleClose, handleOpen } = useModalsPacks()
    const {
        register,
        error,
        updatePack,
        handleSubmit,
        setPackId,
    } = useModalForm(handleClose)

    const tableBodySX = {
        wordWrap: 'break-word',
        minWidth: '50px',
        maxWidth: '50px'
    }
    return (
        <Grid item md={12}>
            <CustomTable setSort={setSort} sort={sort} sortHandler={sortHandler}
                         tableCellForHeader={['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']}>
                {packs.cardPacks?.map(textBody => {
                    return (
                        <TableRow key={textBody._id}>
                            <TableCell sx={{ ...tableBodySX, paddingLeft: '40px', maxWidth: '200px' }}>
                                {textBody.name}
                            </TableCell>
                            <TableCell sx={{ ...tableBodySX, maxWidth: '200px' }}>{textBody.cardsCount}</TableCell>
                            <TableCell sx={tableBodySX}>{textBody.updated}</TableCell>
                            <TableCell sx={tableBodySX}>{textBody.user_name}</TableCell>
                            <TableCell sx={tableBodySX}>
                                <TableActions myCards={userId === textBody.user_id}
                                              packId={textBody._id}
                                              handleOpen={handleOpen}
                                              getPackId={setPackId} />
                            </TableCell>
                        </TableRow>
                    )
                })}
                <PacksModal title={'Edit pack'} open={open} handleClose={handleClose}>
                    <FormModals handleClose={handleClose}
                                error={error}
                                register={register}
                                packHandler={updatePack}
                                handleSubmit={handleSubmit} />
                </PacksModal>
            </CustomTable>
        </Grid>
    )
}