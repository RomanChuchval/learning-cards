import React, { FC } from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SchoolIcon from '@mui/icons-material/School';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

type TableActionsPropsType = {};

export const TableActions: FC<TableActionsPropsType> = () => {
    return (
        <Box>
            <IconButton>
                <SchoolIcon />
            </IconButton>
            <IconButton>
                <BorderColorIcon />
            </IconButton>
            <IconButton>
                <DeleteForeverIcon />
            </IconButton>
        </Box>
    );
};
