import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from "./Home.module.scss";
import BasicTable from '../../Components/TableComp/BasicTable';


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
    <div className={styles.homeLeftSide}>
      <CenteredTabs/>
      <BasicTable/>
    </div>
  )
}

export default Home
