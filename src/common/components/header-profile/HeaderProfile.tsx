import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { CustomPopover } from 'common/components/popover/CustomPopover'
import { PopoverProfileList } from 'common/components/popover/PopoverProfileList'
import { usePopover } from 'common/hooks/usePopover'

type HeaderProfilePropsType = {
    userName: string
    avatar: string
}

export const HeaderProfile: FC<HeaderProfilePropsType> = ({ userName, avatar }) => {
    const { anchorEl, handleClose, handleClick } = usePopover()

    return (
        <Box
            component={'span'}
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}
        >
            <Typography component={'span'} sx={{ fontWeight: '500', fontSize: '16px' }}>
                {userName}
            </Typography>
            <IconButton onClick={handleClick}>
                <Avatar alt='user_avatar' src={avatar} />
            </IconButton>
            <CustomPopover anchorEl={anchorEl} handleClose={handleClose}>
                <PopoverProfileList />
            </CustomPopover>
        </Box>
    )
}
