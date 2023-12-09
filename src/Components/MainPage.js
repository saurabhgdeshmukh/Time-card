import React from 'react'
import "../App.css"
import "./Scheduler.css"
import SchedulerData from './SchedulerData'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SortIcon from '@mui/icons-material/Sort';
import { Tab } from 'bootstrap';
import PortraitRoundedIcon from '@mui/icons-material/PortraitRounded';
function MainPage() {
  
  return (
    <div className='main'>
        <div className="time-card">
            <h1>Burger Singh Television Advertisement</h1>
            <h5>Created on:10 October, 2021</h5>
              <h5>Project Creatde by:Jane Doe</h5>
            
        </div>
        <div className="filter-time">
        <div className="add-timecard-button">
          <button className="timecard-button"><CheckCircleIcon/><h4>Add Time-Card</h4></button>
        </div>
        <div className="add-filters-button">
          <button className="filters-button"><h4>Filters &#160;</h4> <SortIcon/></button>
        </div>
        </div>
        <div>
          <SchedulerData/>
        </div>
    </div>
  )
}

export default MainPage;