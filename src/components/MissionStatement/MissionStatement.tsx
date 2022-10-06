import React from 'react';
import { TEXT } from '@statics';
import './MissionStatement.css'

const MissionStatement = () => {
    return (

      <div className="mission-statement-footer">
        <hr className="footer-divider"/>
        <p>{TEXT.LANDING_PAGE.MISSION_STATEMENT.LAB_GOALS}</p>
      </div>

    )
}

export default MissionStatement;