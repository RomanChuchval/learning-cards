import React from 'react'
import Grid from '@mui/material/Grid'
import { PageTitle } from 'common/components/page-title/PageTitle'
import { useCards } from 'features/cards/hooks/useCards'
import { useAuth } from 'features/auth/hooks/useAuth'
import Box from '@mui/material/Box'
import PendingIcon from '@mui/icons-material/Pending'
import IconButton from '@mui/material/IconButton'
import { usePopover } from 'common/hooks/usePopover'
import { CustomPopover } from 'common/components/popover/CustomPopover'
import { PopoverCardsPack } from 'common/components/popover/PopoverCardsPack'
import { CreateCard } from 'features/cards/components/cards/CreateCard'

export const CardsHeader = () => {
    const { packUserId, selectedPack } = useCards()
    const { authorizedUserId } = useAuth()
    const { anchorEl, handleClose, handleClick } = usePopover()
    const isMyPack = packUserId === authorizedUserId
    return (
        <>
            <Grid item md={6}>
                {isMyPack ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <PageTitle title={selectedPack.name} />
                        <IconButton onClick={handleClick} sx={{ height: '32px', p: '0' }}>
                            <PendingIcon color={'primary'} />
                        </IconButton>
                    </Box>
                ) : (
                    <PageTitle title={selectedPack.name} />
                )}
            </Grid>
            <Grid item md={6} display={'flex'} justifyContent={'flex-end'}>
                {isMyPack && <CreateCard />}
            </Grid>
            <CustomPopover anchorEl={anchorEl} handleClose={handleClose}>
                <PopoverCardsPack packId={selectedPack._id} packName={selectedPack.name} />
            </CustomPopover>
        </>
    )
}
