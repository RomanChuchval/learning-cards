import React from 'react';
import { PageTitle } from 'common/components/page-title/PageTitle';
import { SearchBar } from 'common/components/search-bar/SearchBar';
import { Stack } from '@mui/material';

export const Sandbox = () => {
    return (
        <Stack spacing={5} sx={{ mt: '50px' }}>
            <PageTitle title={'Packs list'} />
            <SearchBar fullWidth={true} />
            <SearchBar />
        </Stack>
    );
};
