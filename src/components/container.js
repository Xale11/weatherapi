import React, {useState, useEffect} from 'react'
import "./container.css"
import LeftContent from './leftContent'
import RightContent from './rightContent'
import fetchData from '../api/weatherData'

const Container = () => {

  const [defaultLocation, setDefault] = useState("lancaster")
  const [info, setInfo] = useState({})
  const [location, setLocation] = useState("Lancaster UK")
  const [data, setData] = useState({})
  const seconds = 60;
  const refreshRate = seconds * 1000

  async function accessData(){
      let apiData = await fetchData(location)
      setData(apiData)
    }

  useEffect(() => {
    accessData()
  }, [])

  //setInterval(accessData, refreshRate);

  console.log(1,data,location)

  return (
    <div className='container'>
      <LeftContent data={data} location={location} setLocation={setLocation} accessData={accessData}></LeftContent>
      <RightContent data={data}></RightContent>
    </div>
  )
}

export default Container