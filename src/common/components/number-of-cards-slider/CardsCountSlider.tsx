import React, { useState } from 'react';
import { Slider, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export const CardsCountSlider = () => {
    const [value, setValue] = useState<number[]>([0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) setValue(newValue);
    };

    const boxSx = {
        width: '63px',
        height: '36px',
        border: '1px solid rgba(000, 000, 000, 0.3)',
        borderRadius: '3px',
        padding: '3px',
        elevation: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const typographySx = {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '20px',
        textAlign: 'center',
    };

    return (
        <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: '500', mb: '8px' }}>
                Number of cards
            </Typography>
            <Box sx={{ width: 250, display: 'flex', alignItems: 'center' }}>
                <Box sx={boxSx}>
                    <Typography sx={typographySx}>{value[0]}</Typography>
                </Box>
                <Slider value={value} onChange={handleChange} sx={{ m: '0 20px' }} />
                <Box sx={boxSx}>
                    <Typography sx={typographySx}>{value[1]}</Typography>
                </Box>
            </Box>
        </Box>
    );
};
