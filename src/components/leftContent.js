import React from 'react'
import "./leftCon.css"
import {AiOutlineSearch} from "react-icons/ai"

const LeftContent = ({data, location, setLocation, accessData}) => {
    
    const submitData = (e) =>{
        if(e.key == "Enter"){
            accessData()
        }  
    }

  return (
    <div className='leftContent'>
        <div className='searchbar'>
            <input type="text" value={location} onChange={e => setLocation(e.target.value)} onKeyUp={submitData} className='textarea' placeholder="Enter a city or country"/>
            <div className='textButton' onClick={accessData}><AiOutlineSearch/></div>
        </div>
        <div className='location'>
            <div>{data.name},</div>
            <div>{data.country}</div>
        </div>
        <div className='weather'>
            <div><img src={data.icon} className='weatherIcon'/></div>
            <div className='weatherCond'>{data.text}</div>
        </div>
        <div className='wind'>
            <div className='windTitle'>Wind</div>
            <div>Speed: {data.wind_mph} MPH</div>
            <div>Direction: {data.wind_dir}</div>
        </div>
    </div>
  )
}

export default LeftContent