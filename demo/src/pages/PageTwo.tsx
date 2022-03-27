import React, { FC } from 'react';
import TabbedLayout from '../Layout/LiftedLayout';
import { PageName } from '../constants/PageName';
import { PageProps } from './types';
import { Typography } from '@mui/material';

const PageOne: FC<PageProps> = ({ setPage }) => (
  <TabbedLayout currentTab={PageName.Second} selectTab={setPage}>
    <Typography variant="h2">Second Page Says:</Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Typography>
  </TabbedLayout>
);

export default PageOne;
