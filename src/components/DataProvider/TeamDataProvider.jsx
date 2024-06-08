import React, { useState, useEffect } from 'react';
import { fetchTeamInfo } from "../../services/barbie" 
import LinearProgress from '@mui/material/LinearProgress';


const TeamDataProvider = ({ children }) => {
    const [team, setTeam] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          let data = await fetchTeamInfo();
          setTeam(data);
        } catch (e) {
          console.error("Failed to fetch team info:", e);
        }
      };
  
      fetchData();
    }, []);
    return (
      <React.Fragment>
        {team ? children(team) : <LinearProgress />}
      </React.Fragment>
    );
  };
  
  export default TeamDataProvider;