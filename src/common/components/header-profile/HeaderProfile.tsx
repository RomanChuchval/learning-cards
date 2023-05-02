import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { CustomPopover } from 'common/components/popover/CustomPopover'
import { PopoverProfileList } from 'common/components/popover/PopoverProfileList'

type HeaderProfilePropsType = {
    userName: string
}

export const HeaderProfile: FC<HeaderProfilePropsType> = ({ userName }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

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
                <Avatar alt='user_avatar' src='/static/images/avatar/1.jpg' />
            </IconButton>
            <CustomPopover anchorEl={anchorEl} handleClose={handleClose}>
                <PopoverProfileList />
            </CustomPopover>
        </Box>
    )
}
