
  
const fetchData = async (defaultLocation) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b3d705c7ebmsh4b6b30d3ffd08ebp15272fjsne32607d5ec80',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    const data = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${defaultLocation}&days=5`, options)
        .then(response => response.json())
        .then(data => data)

    console.log(data)

    const {
    current: {
        condition,
        feelslike_c,
        wind_mph,
        wind_dir,
        temp_c
        },
    location: {
        name,
        country,
        localtime
        }
    } = data

    const {text, icon} = condition

    return {text, icon, feelslike_c, wind_mph, wind_dir, temp_c, name, country, localtime}
}

export default fetchData


    
    