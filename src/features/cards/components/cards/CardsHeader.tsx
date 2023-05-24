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
import { PopoverCards } from 'common/components/popover/PopoverCards'
import { CreateCard } from 'features/cards/components/cards-actions/CreateCard'
import { useApp } from 'app/hooks/useApp'
import Skeleton from '@mui/material/Skeleton'

export const CardsHeader = () => {
    const { packUserId, selectedPack } = useCards()
    const { authorizedUserId } = useAuth()
    const { anchorEl, closePopover, handleClick } = usePopover()
    const { isCardsLoading } = useApp()
    const isMyPack = packUserId === authorizedUserId

    return (
        <>
            <Grid item md={6}>
                {isCardsLoading ? (
                    <Skeleton width={'150px'} height={'50px'} />
                ) : isMyPack ? (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
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
                {/*TODO Add learn*/}
                {isMyPack ? <CreateCard /> : <h3>Learn Pack</h3>}
            </Grid>
            <CustomPopover anchorEl={anchorEl} closePopover={closePopover}>
                <PopoverCards
                    packId={selectedPack._id}
                    packName={selectedPack.name}
                    handleClose={closePopover}
                />
            </CustomPopover>
        </>
    )
}
