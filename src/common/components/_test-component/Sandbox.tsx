import React from 'react';
import { PageTitle } from 'common/components/page-title/PageTitle';
import { SearchBar } from 'common/components/search-bar/SearchBar';
import Box from '@mui/material/Box';

export const Sandbox = () => {
    return (
        <Box>
            <PageTitle title={'Packs list'} />
            <SearchBar />
        </Box>
    );
};
