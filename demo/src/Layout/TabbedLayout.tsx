import React, { FC } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { PageName } from '../constants/PageName';

interface TabbedLayoutProps {
  currentTab: PageName;
  selectTab: (tabName: PageName) => void;
}

const TabbedLayout: FC<TabbedLayoutProps> = ({ currentTab, selectTab, children }) => {
  const handleChange = (event: React.SyntheticEvent, value: PageName) => {
    selectTab(value);
  };

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example">
          {[PageName.First, PageName.Second, PageName.Third].map((tabName) => (
            <Tab key={tabName} value={tabName} label={tabName} />
          ))}
        </Tabs>
      </Box>
      {children}
    </Container>
  );
};

export default TabbedLayout;
