import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function MatchList({ id, gameid, gametype, hometeam, awayteam, gp, cc, ln}){
  return (
    <li>
      <div id={id}>        
        <span>game type: {gametype}</span>
        <span>League: {ln}</span>
        <span>game id: {gameid}</span>        
        <span>home team: {hometeam}</span>
        <span>awaay team: {awayteam}</span>
        <span>GUARANTEED IN PRIZES : {gp}</span>
        <span>TOTAL: {cc}</span>        
      </div>
    </li>
  )
};  
export default MatchList;