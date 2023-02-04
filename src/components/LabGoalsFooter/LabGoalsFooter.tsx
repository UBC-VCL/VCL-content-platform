import React from 'react';
import { TEXT } from '@statics';
import './LabGoalsFooter.css'

const MissionStatement = () => {
    return (

      <div className="lab-goals-footer">
        <hr className="footer-divider" />
        <p className="lab-goals-text">{TEXT.LANDING_PAGE.MISSION_STATEMENT.LAB_GOALS}</p>
      </div>

    )
}

export default MissionStatement;