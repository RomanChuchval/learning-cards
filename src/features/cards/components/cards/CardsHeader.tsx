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
import { SuperButton } from 'common'
import { useLearn } from 'features/learn/hooks/useLearn'

export const CardsHeader = () => {
    const { packUserId, selectedPack, cards } = useCards()
    const { authorizedUserId } = useAuth()
    const { anchorEl, closePopover, handleClick } = usePopover()
    const { isCardsLoading } = useApp()
    const { learnHandler } = useLearn(selectedPack._id)
    const isMyPack = packUserId === authorizedUserId

    return (
        <>
            <Grid item md={6}>
                {isCardsLoading
                    ? <Skeleton width={'150px'} height={'50px'} />
                    : isMyPack
                        ? <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                        }}>
                            <PageTitle title={selectedPack.name} />
                            <IconButton onClick={handleClick} sx={{ height: '32px', p: '0' }}>
                                <PendingIcon color={'primary'} />
                            </IconButton>
                        </Box>
                        : <PageTitle title={selectedPack.name} />}
            </Grid>
            <Grid item md={6} display={'flex'} justifyContent={'flex-end'}>
                {isMyPack ? <CreateCard /> :
                    <SuperButton name={'Learn Pack'}
                                 rounded={true}
                                 textColor={'white'}
                                 callback={learnHandler}
                                 disable={cards.length === 0} />}
            </Grid>
            <CustomPopover anchorEl={anchorEl} closePopover={closePopover}>
                <PopoverCards cards={cards.length}
                              packId={selectedPack._id}
                              packName={selectedPack.name}
                              handleClose={closePopover}
                />
            </CustomPopover>
        </>
    )
}
