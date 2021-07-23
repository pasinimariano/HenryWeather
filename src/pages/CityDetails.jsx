import React, { useState, useEffect } from 'react';


const CityDetails = (props) => {

    const APIKEY = '4f1ca4abca8ab37b6d420864a5ca84e6';
    const CITYID = props.match.params.id;
    const [city, setCity] = useState();

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${CITYID}&appid=${APIKEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                let newCity = {
                    id: data.id,
                    name: data.name,
                    timezone: data.timezone,
                    country: data.sys.country,
                    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                    desciption: data.weather[0].description,
                    temp: data.main.temp,
                    feels_like: data.main.feels_like,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    visibility: data.visibility,
                    wind: data.wind.speed,
                };
                setCity(newCity)
            });
    }, []);

    return(
        <div>
            {!city ? (
                <h2> LOADING ... </h2>
            ) : (
                <div> 
                    <h2> SOY CITY: {city.id} </h2>
                    <h2> NAME: {city.name} </h2>
                </div>
    
            )}
        </div>
    );
}

export default CityDetails;