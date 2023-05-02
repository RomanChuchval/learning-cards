import React from 'react';
import { PageTitle } from 'common/components/page-title/PageTitle';
import { SearchBar } from 'common/components/search-bar/SearchBar';
import { Stack } from '@mui/material';
import { ShowPacksCards } from 'common/components/show-packs-cards/ShowPacksCards';
import { CardsCountSlider } from 'common/components/number-of-cards-slider/CardsCountSlider';
import { ClearFilter } from 'common/components/clear-filter/ClearFilter';
import { CardsPagination } from 'common/components/pagination/CardsPagination';
import { CardsRating } from 'common/components/rating/CardsRating';
import { CustomTable } from 'common/components/table/CustomTable';

export const Sandbox = () => {
    return (
        <Stack spacing={5} sx={{ mt: '50px' }}>
            <PageTitle title={'Packs list'} />
            <SearchBar fullWidth={true} />
            <SearchBar />
            <ShowPacksCards />
            <CardsCountSlider />
            <CardsPagination page={1} itemsCountForPage={7} totalCount={100} onChange={() => {
            }} />
            <ClearFilter />
            <CardsRating defaultValue={2.5} />
            <CustomTable/>
        </Stack>
    );
};
