import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from "./Home.module.scss";
import Table from '../../Components/Table/Table';

function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', color: "white" }}>
      <Tabs value={value} onChange={handleChange} className={styles.tabs} >
        <Tab label="All" sx={{ color: "white" }} />
        <Tab label="Top 50" sx={{ color: "white" }} />
        <Tab label="Top Gainers" sx={{ color: "white" }} />
        <Tab label="Top Losers" sx={{ color: "white" }} />
      </Tabs>
    </Box>
  );
}


function Home() {
  return (
    <div>
      {/* <CenteredTabs/> */}
      {/* <Table/> */}
    </div>
  )
}

export default Home
