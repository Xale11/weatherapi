import React, { useState } from 'react'
import "./rightCon.css"

const RightContent = ({data}) => {
    
    let times = data.localtime;
    if(times == undefined){
        times = ["2001-12-12", "17:38"]
    }
    else {
        times = times.toString()
        times = times.split(" ")
    }

  return (
    <div className='rightContent'>
        <div className="time">
            <div className='timeDate'>{times[0]}</div>
            <div className='timeTime'>{times[1]}</div>
        </div>
        <div className="temp">
            <div className="tempTitle">Temperature</div>
            <div>{data.temp_c} °C</div>
        </div>
        <div className="tempFeel">
            <div className='tempTitle'>Feels like</div>
            <div>{data.feelslike_c} °C</div>
            
        </div>
    </div>
  )
}

export default RightContent