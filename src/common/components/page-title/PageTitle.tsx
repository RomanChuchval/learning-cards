import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

type PageTitlePropsType = {
    title: string;
};

export const PageTitle: FC<PageTitlePropsType> = ({ title }) => {
    return (
        <Box
            component={'h3'}
            sx={{
                display: 'flex',
                minWidth: '200px',
                mt: '39px',
                pl: '25px',
            }}
        >
            <Typography sx={{ fontWeight: '600', fontSize: '22px' }}>{title}</Typography>
        </Box>
    );
};
