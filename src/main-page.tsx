import React from 'react';

import { Container, Divider, Tabs, Tab, Typography } from '@mui/material';

const messages = { 
  name: 'tanya',
  mainPageTab: 'about me',
  projectsTab: 'projects',
  otherTab: 'other',
}

const tabs = [
  {
    label: 'about',
    content: <></>,
  },
  {
    label: 'projects',
    content: <></>,
  },
];

const MainPage = () => {
  const [ currentTab, setCurrentTab ] = React.useState(0);

  const handleTabsChange = (_event: React.SyntheticEvent, newCurrentTab: number) => {
    setCurrentTab(newCurrentTab);
  }

  return <Container maxWidth={'lg'}>
    <Typography variant="h1" component="h2">
      tanya
    </Typography>
    <Divider />
    <Tabs value={currentTab} onChange={handleTabsChange}>
      {
        tabs.map((tab) => <Tab label={tab.label} />
        )
      }
    </Tabs>
    {
      tabs.map((tab, index) => {
        return <div
          role='tabpanel'
          hidden={currentTab !== index}
        >
          {tab.content}
        </div>  
      })
    }

  </Container>
};

export default MainPage;