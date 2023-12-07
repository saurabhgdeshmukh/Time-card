import React from 'react'
import "../App.css"
import "./Scheduler.css"
import Scheduler from './Scheduler.js';
import { colors } from '@mui/material';
const data = [
    { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1 },
    { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 }
];
function Main() {
  return (
    <div className='main'>
        <div className="time-card">
            <h1>Burger Singh Television Advertisement</h1>
            <h5>Created on:10 October, 2021</h5>
            <h5>Project Creatde by:</h5>
        </div>
        <div className='scheduler-container'>
                    <Scheduler events={data}/>
                </div>
    </div>
  )
}

export default Main;